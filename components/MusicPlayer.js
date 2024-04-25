import React, { useState, useRef, useEffect, useMemo } from 'react';
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
    const tracks = useMemo(() => [
        { path: "music/001_Fortune_and_Fame.wav", name: "Fortune and Fame" },
            { path: "music/002_Coming_Home.wav", name: "Coming Home" },
            // { path: "music/003_Second_Chance.wav", name: "Second Chance" },
            // { path: "music/004_Furry_Little_Friend.wav", name: "Furry Little Friend" },
            { path: "music/005_Communication.wav", name: "Communication" },
            { path: "music/006_First_Time.wav", name: "First Time" },
            { path: "music/007_Lost_your_way.wav", name: "Lost your way" },
            // { path: "music/008_Only_Mine.wav", name: "Only Mine" },
            { path: "music/009_Easy_way_out.wav", name: "Easy way out" },
            // { path: "music/010_At_ease.wav", name: "At ease"},
    ], []);


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

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || currentTrackIndex < 0 || currentTrackIndex >= tracks.length) return;

        const track = tracks[currentTrackIndex];
        if (audio.src !== new URL(track.path, window.location.origin).href) {
            audio.src = track.path;
            audio.load();
        }

        setCurrentTrackName(track.name);
    }, [currentTrackIndex, tracks]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
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
        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();

        setProgress(0);
        setHasEnded(false);
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);

        setTimeout(() => {
            audio.load();
            audio.play();
        }, 200);
};

    const previousTrack = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();

        setProgress(0);
        setHasEnded(false);
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);

        setTimeout(() => {
            audio.load();
            audio.play();
        }, 200);
    };

        // JSX
        return (
        <div className={`${styles.musicPlayer} ${styles.vintageBox}`}>
            <div className={styles.vinylAndArt}>
                <div className={styles.vinylContainer}>
                    <div ref={groovesElementRef} className={`${styles.grooves} ${isPlaying ? styles.spin : ''}`}></div>
                    <div ref={labelElementRef} className={`${styles.label} ${isPlaying ? styles.spin : ''}`}></div>
                </div>
                <Image className={`${styles.albumArt}`} src={'/images/fortuneandfame_front-cover.png'} alt={'Main Street Revival album art'} width={250} height={250} />
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