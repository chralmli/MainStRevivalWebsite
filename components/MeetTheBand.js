import styles from "../styles/components/MeetTheBand.module.css";

function MeetTheBand() {
    const bandMembers = [
        {
            name: 'Mats Erik Haugskott',
            role: 'Guitar, Vocals',
            bio: 'Step into the world of Mats, the soulful voice and guitarist of Main Street Revival. Since the band\'s inception in 2018, he has been the driving force behind the band\'s sound and direction, captivating audiences with his blend of heartfelt lyrics and electrifying guitar work. As the frontman, Mats ensures that every concert is a journey worth remembering.',
            img: 'mats-portrait.jpeg'
        },
        {
            name: 'Julie Sæther Laupstad',
            role: 'Bass, Backing Vocals',
            bio: 'Introducing Julie, the vibrant bassist who not only lays down the grooves for Main Street Revival, but brings a infectious energy to every stage she graces. With diplomas from multiple music institutions, including London\'s LCCM, her academic and musical paths are as layered as her bass lines. It\'s not just her bass playing that\'s groovy, it\'s her personality too.',
            img: 'julie-portrait.jpeg'
        },
        {
            name: 'Christian Almli',
            role: 'Drums, Backing Vocals',
            bio: "Meet Christian, the rhythmic backbone of Main Street Revival. With 18 years of drumming experience under his belt, he's no stranger to setting the stage on fire. A graduate of Inderøy Videregående Skole and Trøndertun Folkehøgskole, his musical journey is both deep and diverse. Since joining the band in 2019, he's been adding his unique flavor to our sound.",
            img: 'christian-portrait.jpeg'
        }
    ];

    return (
        <section className={styles.bandSection}>
            <h2>Meet the Band</h2>
            <div className={styles.bandContainer}>
                {bandMembers.map((member, index) => (
                    <div key={index} className={styles.polaroid}>
                        <img src={`/images/tinified/${member.img}`} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p><strong>{member.role}</strong></p>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MeetTheBand;