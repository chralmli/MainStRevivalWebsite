import styles from '../styles/components/UpcomingGigs.module.css';

function UpcomingGigs() {
    const gigs = [
        { 
            date: '22 Sept 2023',
            venue: 'Scandic Stiklestad, Verdal',
            ticketLink: 'https://www.eventim.no/artist/hoestrock-2023/'
        },
        { 
            date: '31 Oct 2023',
            venue: 'Scandic Lerkendal, Trondheim',
        }
    ];

    return (
        <>
            <h2 className={styles.gigsTitle}>Upcoming Gigs</h2>
            <div className={styles.gigsContainer}>
                {gigs.map((gig, index) => (
                    <div key={index} className={styles.gigCard}>
                        <h3 className={styles.gigDate}>{gig.date}</h3>
                        <p className={styles.gigVenue}>{gig.venue}</p>
                        <a className={styles.ticketLink} href={gig.ticketLink} target="_blank" rel="noopener noreferrer">Buy Tickets</a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UpcomingGigs;