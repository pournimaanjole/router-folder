import './Home.css';
import Navbar from '../../component/Navbar/Navbar';
import imghome1 from './Homeimges/food2.avif';
import imghome2 from './Homeimges/home4.avif';
export default function Home() {
   return (
      <>
         <Navbar />
         <header>
            <div className="container main-hero-container  ">
               <div className="row">
                  <div className="col-12 col-lg-6 d-flex justify-content-center flex-column align-items-start">
                     <h1 >online fruits deivery  <br/> Easy For you</h1>
                     <p className='main-hero-para'>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam minima provident necessitatibus. Autem facere cum, asperiores magnam est delectus. Eius doloremque asperiores perferendis dolorum quia eaque magnam quae aliquam minima!

                     </p>
                     <h3>Get early acces for you</h3>
                     <div className='input-group mt-3 '>
                        <input type='text' className='rounded-pill w-75 p-2 form-control-text ' placeholder='Entner your email'></input>
                        <div className='input-group-button'>Get it now</div>

                     </div>
                  </div>
                  <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-imeges">
                     <img src={imghome1} alt='home1' className='img-fluid'></img>
                     <img src={imghome2} alt='home2' className='img-fluid main-hero-img2'></img>
                  </div>

               </div>
            </div>
         </header>
      </>

   )
}   