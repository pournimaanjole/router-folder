import './Button.css';
export default function Button ({text ,colorvalue}){
    return(<>
    <button className={'button ${colorvalue}'}>{text}</button>
    </>)
}