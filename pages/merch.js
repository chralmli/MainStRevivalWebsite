import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/components/Merch.module.css';

const getProducts = () => [
    {
        id: '1',
        name: 'MSR T-Shirt Gold Logo',
        img: 'T-skjorte-unisex-sort-med-stor-gul-logo-transparent.png',
        link: 'https://dinide.no/shop/t-skjorte-main-street-revival-unisex-sort/'
    },
    {
        id: '2',
        name: 'MSR Hoodie White Logo',
        img: 'Hettegenser-med-hvit-stor-logo-gjennomsiktig.png',
        link: 'https://dinide.no/shop/hettegenser-main-street-revival-sort/'
    },
    {
        id: '3',
        name: 'MSR White T-Shirt',
        img: 'T-skjorte-unisex-hvit-med-stor-sort-logo-transparent.png',
        link: 'https://dinide.no/shop/t-skjorte-main-street-revival-unisex-hvit-4/'
    },
    {
        id: '4',
        name: 'MSR Mug',
        img: 'Krus-med-logo-transparent.png',
        link: 'https://dinide.no/shop/porselenskrus-main-street-revival/'
    },
    {
        id: '5',
        name: 'MSR Snap Back Cap',
        img: 'Snap-Back-Caps-med-hvit-logo-transparent.png',
        link: 'https://dinide.no/shop/snapback-main-street-revival-2/'
    },
    {
        id: '6',
        name: 'MSR Beer Glass',
        img: 'Olglass-med-logo-transparent.png',
        link: 'https://dinide.no/shop/olseidel-main-street-revival-05l/'
    },
    {
        id: '7',
        name: 'MSR T-shirt Chest Logo',
        img: 'T-skjorte-unisex-sort-med-liten-gul-logo-transparent.png',
        link: 'https://dinide.no/shop/t-skjorte-main-street-revival-unisex-sort-2/'
    },
    {
        id: '8',
        name: 'MSR Hoodie Chest Logo',
        img: 'Hettegenser-med-hvit-liten-logo-transparent.png',
        link: 'https://dinide.no/shop/hettegenser-main-street-revival-sort-2/'
    },
    {
        id: '9',
        name: 'MSR Cap',
        img: 'Caps-med-hvit-logo-transparent.png',
        link: 'https://dinide.no/shop/caps-main-street-revival-2/'
    },
    {
        id: '10',
        name: 'MSR Shopping Bag',
        img: 'Handlenett-med-hvit-logo-transpar.png',
        link: 'https://dinide.no/shop/handlenett-main-street-revival-2/'
    },
    {
        id: '11',
        name: 'MSR Hip Flask',
        img: 'Lommelerke-med-logo-transparent.png',
        link: 'https://dinide.no/shop/lommelerke-main-street-revival/'
    },
    {
        id: '12',
        name: 'MSR Hat',
        img: 'Lue-med-gul-logo-transparent.png',
        link: 'https://dinide.no/shop/beanie-lue-main-street-revival/'
    },
    {
        id: '13',
        name: 'MSR T-Shirt White Logo',
        img: 'T-skjorte-unisex-sort-med-stor-hvit-logo-transparent.png',
        link: 'https://dinide.no/shop/t-skjorte-main-street-revival-unisex-sort-kopi/'
    },
];

export default function Merch() {
    const products = getProducts();

    return (
        <>
            <Head>
                <title>Main Street Revival</title>
                <meta name="description" content="Official website of Main Street Revival" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className={styles.merchHero}>
                    <h1 className={styles.merchTitle}>Check Out Our Merch</h1>
                    <div className={styles.merchContainer}>
                    {products.map((product) => (
                        <div className={styles.product} key={product.id}>
                            <a href={product.link} target="_blank" rel="noopener noreferrer">
                                <div className={styles.imageWrapper}>
                                <div className={styles.overlay}>
                                    <button className={styles.shopButton}>Buy on external shop</button>
                                </div>
                                    <Image src={`/images/merch/${product.img}`} alt={product.name} width={300} height={300} layout='responsive' />
                                </div>
                                <p>{product.name}</p>
                            </a>
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

