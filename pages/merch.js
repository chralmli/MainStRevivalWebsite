import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/components/Merch.module.css';

const getProducts = () => [
    {
        id: '1',
        name: 'T-Shirt Gold Logo',
        img: 'T-skjorte-unisex-sort-med-stor-gul-logo.png',
        link: 'https://dinide.no/shop/t-skjorte-main-street-revival-unisex-sort/'
    },
    {
        id: '2',
        name: 'Hoodie',
        img: 'Hettegenser-med-hvit-stor-logo.png',
        link: 'https://dinide.no/shop/hettegenser-main-street-revival-sort/'
    },
    {
        id: '3',
        name: 'T-Shirt White',
        img: 'T-skjorte-unisex-hvit-med-stor-sort-logo.png',
        link: 'https://dinide.no/shop/t-skjorte-main-street-revival-unisex-hvit-4/'
    },
    {
        id: '4',
        name: 'Mug',
        img: 'Krus-med-logo.png',
        link: 'https://dinide.no/shop/porselenskrus-main-street-revival/'
    },
    {
        id: '5',
        name: 'Snap Back Cap White Logo',
        img: 'Snap-Back-Caps-med-hvit-logo.png',
        link: 'https://dinide.no/shop/snapback-main-street-revival-2/'
    },
    {
        id: '6',
        name: 'Beer Glass',
        img: 'Olglass-med-logo.png',
        link: 'https://dinide.no/shop/olseidel-main-street-revival-05l/'
    },
    {
        id: '7',
        name: 'T-shirt Small Logo',
        img: 'T-skjorte-unisex-sort-med-liten-gul-logo.png',
        link: 'https://dinide.no/shop/t-skjorte-main-street-revival-unisex-sort-2/'
    },
    {
        id: '8',
        name: 'Hoodie Small Logo',
        img: 'Hettegenser-med-hvit-liten-logo.png',
        link: 'https://dinide.no/shop/hettegenser-main-street-revival-sort-2/'
    },
    {
        id: '9',
        name: 'Cap',
        img: 'Caps-med-hvit-logo.png',
        link: 'https://dinide.no/shop/caps-main-street-revival-2/'
    },
    {
        id: '10',
        name: 'Shopping Bag',
        img: 'Handlenett-med-hvit-logo.png',
        link: 'https://dinide.no/shop/handlenett-main-street-revival-2/'
    },
    {
        id: '11',
        name: 'Hip Flask',
        img: 'Lommelerke-med-logo.png',
        link: 'https://dinide.no/shop/lommelerke-main-street-revival/'
    },
    {
        id: '12',
        name: 'Hat',
        img: 'Lue-med-hvit-logo.png',
        link: 'https://dinide.no/shop/beanie-lue-main-street-revival/'
    },
    {
        id: '13',
        name: 'T-Shirt White Logo',
        img: 'T-skjorte-unisex-sort-med-stor-hvit-logo.png',
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
                    <h1>Merch</h1>
                    <div className={styles.merchContainer}>
                    {products.map((product) => (
                        <div className={styles.product} key={product.id}>
                            <a href={product.link} target="_blank" rel="noopener noreferrer">
                                <Image src={`/images/merch/${product.img}`} alt={product.name} width={300} height={300} layout='responsive' />
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

