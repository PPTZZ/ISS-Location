import './App.css'
import Earth from './components/Earth';
import Satelite from './components/Satelite'
import Tracker from './components/Tracker';

const Animation = ()=> {

  return (
    <>
      <h1 className='title'>THE ISS CURRENT LOCATION</h1>
      <div className="center">
          <Earth/>
          <Satelite/>
          <Tracker/>
      </div>
    </>
  )
}

export default Animation