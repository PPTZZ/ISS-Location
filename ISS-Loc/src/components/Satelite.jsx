import satelite from '../assets/satelite.svg'
import '../assets/satelite.css'

const Satelite = ()=> {
    return(
        <div className='position'>
            <img src={satelite} className='satelite'  alt='Planet Earth'/>
        </div>
    )
}

export default Satelite