import './button.css';

function Button({ label, Click }) {
    return (
        <button className='button_component' onClick={(event) => Click(event)}>{label}</button>
    )
}

export default Button;