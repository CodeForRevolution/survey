import React from 'react'
import './Home.css'
import Form from '../Auth/Form'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div id='Home'>
     <h3 className='text-center'>"Shape the Future: Join Our Survey Today!"
     <Link to={'/survey'}> <span className='d-block'>Click here jo join</span></Link>
     </h3>
    </div>
  )
}

export default Home