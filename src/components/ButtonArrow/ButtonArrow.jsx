import './buttonArrow.css'
import Arrow from '../../assets/arrow.png'

function ButtonArrow({Click, rotate}) {
    return (
        <button className='button_arrow_components' onClick={(event) => Click(event)}>
            <img src={Arrow} alt="arrow" style={{ transform: `rotate(${rotate}deg)` }} />
        </button>
    )
}

export default ButtonArrow;