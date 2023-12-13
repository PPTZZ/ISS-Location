import './App.css'
import Earth from './components/Earth';
import Satelite from './components/Satelite'
import Tracker from './components/Tracker';

const Animation = ()=> {

  return (
      <div className="center">
          <Earth/>
          <Satelite/>
          <Tracker/>
      </div>
  )
}

export default Animation