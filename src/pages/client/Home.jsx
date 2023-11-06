// import { useEffect, useState} from 'react'
// import axios from 'axios'

// IMAGES
import cleanLogo from '../../assets/images/cleanwater-logo.png'
import odorLogo from '../../assets/images/noOdor-logo.png'
import phLogo from '../../assets/images/phlevel-logo.png'
import containerLogo  from '../../assets/images/container-logo.png'
import contactLogo from '../../assets/images/poster.jpg'

// STYLES
import '../../styles/client/homePage.css'

// ICONS
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

export default function Home() {

    // const [users, setUsers] = useState('');

    // useEffect(()=>{

    //     async function getUsers() {
    //         try {
    //         const response = await axios.get('http://localhost:5174/api/users', {
    //             headers: {
    //             Accept: 'application/json',
    //             },
    //         });
    //         const jsonData = response.data;
    //         setUsers(jsonData);
    //         } catch (err) {
    //         console.error('Error fetching data:', err);
    //         }
    //     }

    //     getUsers();
    // },[]);
    // console.log("test fetch", users);

    return (
        <>
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
            <div className='home-about-container'>
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
            <div className='home-contact-container'>
                <section>
                    <img src={contactLogo}></img>
                    <div className='home-contact-object'>
                        <h1>come and visit us</h1>
                        <article>
                            <div>
                                <IoCallOutline fontSize={'25px'}/>
                                <IoMailOutline fontSize={'25px'}/>
                                <IoLocationOutline fontSize={'25px'}/>
                            </div>
                            <aside>
                                <p>414 857 - 0107</p>
                                <p>happytummy@restaurant.com</p>
                                <p>837 W. Marshall Lane Marshalltown,<br></br> IA 50158, Los Angeles</p>
                            </aside>
                        </article>
                    </div>
                </section>
                <section className='home-contact-content'>
                    <h2>We provide healthy Water<br></br> for your family.</h2>
                    <h3>
                        Our story began with a vision to create a unique dining <br></br>
                        experience that merges fine dining, exceptional service,<br></br>
                        and a vibrant ambiance. Rooted in city rich culinary culture, we aim to<br></br> 
                        honor our local roots while infusing a global palate.
                    </h3>
                    <p>
                        At place, we believe that dining is not just about food, but also about the<br></br>
                        overall experience. Our staff, renowned for their warmth and dedication, <br></br>
                        strives to make every visit an unforgettable event.<br></br>
                    </p>
                    <button>More About us</button>
                </section>
            </div>
            <div className='home-custormers-container'>

            </div>
        </>
    )
}
