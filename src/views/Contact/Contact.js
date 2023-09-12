import './Contact.css';
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/Button';
export default  function Contact(){
    return(<>
    <Navbar/>
    <h1>this is contact page</h1>
    <Button text={'this is contact page'} colorvalue='primary' />
    </>)
}