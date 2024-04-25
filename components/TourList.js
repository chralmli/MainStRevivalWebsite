import styles from '../styles/components/TourList.module.css';

const TourList = () => {
    const tourDates2023 = [
        { date: '2023-03-10', venue: 'Byscenen, Trondheim'},
        { date: '2023-04-22', venue: 'Leirelva MC, Trondheim'},
        { date: '2023-05-13', venue: 'Vårt Hjem, Steinkjer'},
        { date: '2023-05-20', venue: 'Krambua, Trondheim'},
        { date: '2023-05-26', venue: 'Røstad Scene, Levanger'},
        { date: '2023-06-09', venue: 'Sommerpuls Festival 2023, Inderøy'},
        { date: '2023-06-10', venue: 'Midtlivskrisefestivalen 2023, Levanger'},
        { date: '2023-06-16', venue: 'Poltergeist MC, Verdal'},
        { date: '2023-09-22', venue: 'Høstrock Festival 2023, Stiklestad'},
        { date: '2023-10-31', venue: 'Scandic Lerkendal, Trondheim'},
    ];

    const tourDates2024 = [
        { date: '2024-03-15', venue: 'Antikvariatet, Trondheim'},
        { date: '2024-03-30', venue: 'Normeland Gårdshotell, Osen'},
        { date: '2024-04-12', venue: 'Trykkeriet Scene, Trondheim'},
        { date: '2024-05-11', venue: 'Riggen MC, Trondheim'},
        { date: '2024-05-25', venue: 'Havna Scene, Levanger'},
        { date: '2024-06-20', venue: 'Steinkjerfestivalen, Steinkjer'},
    ];

    return (
        <section className={styles.tourList}>
            <div className={styles.container}>
                <h2 className={styles.title}>Tour Dates 2023</h2>
                <ul className={styles.list}>
                    {tourDates2023.map((tour, index) => (
                        <li key={index} className={styles.item}>
                            <span className={styles.date}>{tour.date}</span>
                            <span className={styles.venue}>{tour.venue}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.container}>
                <h2 className={styles.title}>Tour Dates 2024</h2>
                <ul className={styles.list}>
                    {tourDates2024.map((tour, index) => (
                        <li key={index} className={styles.item}>
                            <span className={styles.date}>{tour.date}</span>
                            <span className={styles.venue}>{tour.venue}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default TourList;