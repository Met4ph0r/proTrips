import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import homeIcon from './assets/house-solid.svg'
import mapIcon from './assets/map-location.svg'
import clockIcon from './assets/clock-rotate.svg'
import tropicIcon from './assets/palm-tree.png'
import trekIcon from './assets/trekking.png'
import clubIcon from './assets/beer-mug.png'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList"))
    }
    document.body.style = `background-image:linear-gradient(45deg, #ffcfc7 30%, rgb(213, 222, 35) 80%); font-size: 50px; height: 79vh;`
  }

  counting(arr) {
    let count = 0
    for (let e of arr) {
      if (e.type === "Tropic")
        count++
    }
    return count;
  }

  render() {
    let typeArr = this.state.tripsArr.map(ele => ele.type)
    return <>
      <div className='parentHome'>
        <div>Trips <span className='totalTrips'>{(this.state.tripsArr).length}</span></div>
        <div className='sortedTripsDiv'>
          <div className='sortedTrips'>
            <span><img src={tropicIcon} alt="tropic" height="40" width="40" /> </span>
            <span className='sortedNum'>
              {
                typeArr.reduce((total, ele) => {
                  if (ele === "Tropic")
                    total++
                  return total
                }, 0)
              }
            </span>
          </div>

          <div className='sortedTrips'>
            <span><img src={trekIcon} alt="trek" height="40" width="40" /> </span>
            <span className='sortedNum'>
              {
                typeArr.reduce((total, ele) => {
                  if (ele === "Trek")
                    total++
                  return total
                }, 0)
              }
            </span>
          </div>

          <div className='sortedTrips'>
            <span><img src={clubIcon} alt="club" height="40" width="40" /> </span>
            <span className='sortedNum'>
              {
                typeArr.reduce((total, ele) => {
                  if (ele === "Club")
                    total++
                  return total
                }, 0)
              }
            </span>
          </div>

        </div>
      </div>
      <div className='links'>
        <div><Link to="/" style = {{backgroundColor : "#ffffffcc"}}><img src={homeIcon} alt="home" height="50" width="50" /></Link></div>
        <div><Link to="/add"><img src={mapIcon} alt="home" height="50" width="50" /></Link></div>
        <div><Link to="/list"><img src={clockIcon} alt="home" height="50" width="50" /></Link></div>
      </div>
    </>
  }
}

export default Home;
