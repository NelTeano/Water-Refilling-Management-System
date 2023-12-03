import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// IMAGES
import cleanLogo from '../assets/images/cleanwater-logo.png'
import odorLogo from '../assets/images/noOdor-logo.png'
import phLogo from '../assets/images/phlevel-logo.png'
import containerLogo  from '../assets/images/container-logo.png'

// STYLES
import '../styles/homePage.css'


export default function Home() {


    return (
        <>
            <Header/>
            <div className='home-board'>
                <section>
                    <h1>Welcome to Hydromaze <br></br>Water Refilling Station</h1>
                </section>
                <section>
                    <p>Discover delectable cuisine and unforgettable moments<br></br> in our welcoming, culinary haven.</p>
                </section>
                <section className='board-buttons'>
                    <button>Order a Water</button>
                    <button>Explore Products</button>
                </section>
            </div>
            <div className='home-about-products'>
                <h1>About Our Product Quality</h1>
                <section className='about-boxes'>
                    <article>
                        <header>
                            <img src={cleanLogo}></img>
                        </header>
                        <h2>Purified</h2>
                        <p>
                            In the new era of technology we<br></br>
                            look in the future with certainty<br></br> 
                            and pride for our life.
                        </p>
                    </article>
                    <article>
                        <header>
                            <img height={'50px'} width={'50px'}  src={phLogo}></img>
                        </header>
                        <h2>Exact pH Level</h2>
                        <p>
                            In the new era of technology we<br></br>
                            look in the future with certainty<br></br> 
                            and pride for our life.
                        </p>
                    </article>
                    <article>
                        <header>
                            <img height={'30px'} width={'25px'} src={odorLogo}></img>
                        </header>
                        <h2>No Odor</h2>
                        <p>
                            In the new era of technology we<br></br>
                            look in the future with certainty<br></br> 
                            and pride for our life.
                        </p>
                    </article>
                    <article>
                        <header>
                            <img src={containerLogo}></img>
                        </header>
                        <h2>Container</h2>
                        <p>
                            In the new era of technology we<br></br>
                            look in the future with certainty<br></br> 
                            and pride for our life.
                        </p>
                    </article>
                </section>
            </div>
            <Footer />
        </>
    )
}
