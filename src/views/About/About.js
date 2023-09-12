import './About.css';
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/Button';
import aboutImge from './Aboutimges/restaurant.webp';
export default function About() {
    return (<>
        <Navbar />
        <section>
        <div className='container ' >
           
            <p className='main-hero-para font-sizing'>
            The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className='font-sizing'>The Chef? Mr. Italiano himself</h3>
            <h3 className='font-sizing'>We are proud of our interiors.</h3>
        </div>
        <div>
            <img src={aboutImge}></img>
        </div>
        </section>
    </>)
}