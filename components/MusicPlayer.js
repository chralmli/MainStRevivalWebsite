import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';
import styles from '../styles/components/MusicPlayer.module.css'; 

const MusicPlayer = () => {
    // State and Refs
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const progressBarRef = useRef(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const  [hasEnded, setHasEnded] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);
    const [currentTrackName, setCurrentTrackName] = useState("Initial Track");
    const [pausedTime, setPausedTime] = useState(0);

    const audioRef = useRef(null);
    const groovesElementRef = useRef(null);
    const labelElementRef = useRef(null);

    const onAudioEnd = () => {
        setHasEnded(true);
        handleTrackEnded();
    }



    // Constants
    const tracks = [
            { path: "music/001_Fortune_and_Fame.wav", name: "Fortune and Fame" },
            { path: "music/002_Coming_Home.wav", name: "Coming Home" },
            // { path: "music/003_Second_Chance.wav", name: "Second Chance" },
            // { path: "music/004_Furry_Little_Friend.wav", name: "Furry Little Friend" },
            // { path: "music/005_Communication.wav", name: "Communication" },
            { path: "music/006_First_Time.wav", name: "First Time" },
            { path: "music/007_Lost_your_way.wav", name: "Lost your way" },
            // { path: "music/008_Only_Mine.wav", name: "Only Mine" },
            { path: "music/009_Easy_way_out.wav", name: "Easy way out" },
            // { path: "music/010_At_ease.wav", name: "At ease"},
    ];


    const updateProgress = () => {
        const { currentTime, duration } = audioRef.current;
        setProgress((currentTime / duration) * 100);
    };

    const onAudioReady = () => {
        console.log("Audio is ready to play");
        setReadyToPlay(true);
    }
    const onAudioError = (e) => {
        console.error('Error playing audio:', e);
        setReadyToPlay(true);
    };

    const handleTrackEnded = () => {
        nextTrack();
        setHasEnded(false);
    }

    // Lifecycle methods
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('ended', onAudioEnd);
            audio.addEventListener('canplaythrough', onAudioReady);
            audio.addEventListener('error', onAudioError);
            audio.addEventListener('ended', handleTrackEnded);

            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('ended', onAudioEnd);
                audio.removeEventListener('canplaythrough', onAudioReady);
                audio.removeEventListener('error', onAudioError);
                audio.removeEventListener('ended', handleTrackEnded);
            };
        }
    }, [audioRef.current]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            console.log("Audio readyState:", audio.readyState);
            console.log("Audio networkState:", audio.networkState);
            if (currentTrackIndex >= 0 && tracks[currentTrackIndex]) {
                if (audio.src !== tracks[currentTrackIndex].path) {
                    setCurrentTrackName(tracks[currentTrackIndex].name);
                    audio.src = tracks[currentTrackIndex].path;
                    audio.load();
                }
            }
                if (isPlaying) {
                    audio.currentTime = pausedTime;
                    audio.play();
                } else {
                    audio.pause();
                }

                if (hasEnded) {
                    audio.currentTime = 0;
                    setHasEnded(false);
                }
            }
        }, [currentTrackIndex, isPlaying, hasEnded, pausedTime]);


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    // Handlers and functions
    const playAudio = () => {
        audioRef.current.play();
        groovesElementRef.current.style.animationPlayState = 'running';
        labelElementRef.current.style.animationPlayState = 'running';
        setIsPlaying(true);
    };

    const pauseAudio = () => {
        setPausedTime(audioRef.current.currentTime);
        audioRef.current.pause();
        groovesElementRef.current.style.animationPlayState = 'paused';
        labelElementRef.current.style.animationPlayState = 'paused';
        setIsPlaying(false);
    }

    const playPauseHandler = () => {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    };

    const nextTrack = () => {
        setPausedTime(0);
        setProgress(0);
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
    }
};

    const previousTrack = () => {
        setPausedTime(0);
        setProgress(0);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    };

        // JSX
        return (
        <div className={`${styles.musicPlayer} ${styles.vintageBox}`}>
            <div className={styles.vinylAndArt}>
                <div className={styles.vinylContainer}>
                    <div ref={groovesElementRef} className={`${styles.grooves} ${isPlaying ? styles.spin : ''}`}></div>
                    <div ref={labelElementRef} className={`${styles.label} ${isPlaying ? styles.spin : ''}`}></div>
                </div>
                <Image className={`${styles.albumArt}`} src={'/images/fortuneandfame_front-cover.png'} alt={'Main Street Revival album art'} width={300} height={300} />
            </div>
            <audio ref={audioRef}></audio>

            <div className={styles.controls}>
                <div className={styles.trackInfo}>
                    <p>Now Playing: {currentTrackName}</p>
                </div>
                <div className={styles.progressContainer}>
                    <div ref={progressBarRef} className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                </div>
                <div className={styles.controlWrapper}>
                    <div className={styles.playerButtons}>
                        <button className={styles.prevButton} onClick={previousTrack}>
                            <i className="fa fa-step-backward"></i>
                        </button>
                        <button className={styles.playButton} onClick={playPauseHandler}>
                            {isPlaying ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
                        </button>
                        <button className={styles.nextButton} onClick={nextTrack}>
                            <i className="fa fa-step-forward"></i>
                        </button>
                    </div>
                    <div className={styles.volumeControl}>
                        <input type="range" min="0" max="1" step="0.1" value={volume} onChange={(e) => setVolume(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className={styles.ctaButtonContainer}>
                <a href="https://dinide.no/shop/main-street-revival-fortune-and-fame-vinyl/" target='_blank' rel="noopener noreferrer">
                    <button className={styles.ctaButtonBuy} aria-label="Buy Main Street Revival's debut album 'Fortune And Fame' on vinyl">Buy Album</button>
                </a>   
                <a href="https://open.spotify.com/album/0xIYesyZvOEYHkMyFM3ljQ?si=yhqzbH-TRLSB1ygzWVJEmA" target="_blank" rel="noopener noreferrer">
                    <button className={styles.ctaButtonSpotify} aria-label="Listen to Main Street Revival on Spotify">Listen to Full album</button>
                </a>
            </div>
        </div>
    );
};

export default MusicPlayer;