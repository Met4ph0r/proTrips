import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import homeIcon from './assets/house-solid.svg'
import mapIcon from './assets/map-location.svg'
import clockIcon from './assets/clock-rotate.svg'

class ListTrip extends React.Component {
    constructor() {
        super()
        this.state = {
            tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList")),
            title: "All Trips",
            list: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList")).map(ele => {
                return <section className='dataRow'>
                    <div className='tripDetails'>{ele.date}</div>
                    <div className='tripDetails'>{ele.place}</div>
                    <div className='tripDetails'>{ele.type}</div>
                </section>
            })
        }
        document.body.style = `background-image:linear-gradient(45deg, #9b63e5 30%, rgb(118, 236, 216) 80%); font-size: 50px; height: 93vh;`
    }

    filterTrips(type) {
        if (type === "All")
            this.setState({
                title: type + " Trips",
                list: this.state.tripsArr.map(ele => {
                    return <section className='dataRow'>
                        <div className='tripDetails'>{ele.date}</div>
                        <div className='tripDetails'>{ele.place}</div>
                        <div className='tripDetails'>{ele.type}</div>
                    </section>
                })
            })
        else
            this.setState({
                title: type + " Trips",
                list: this.state.tripsArr.map(ele => {
                    if (ele.type === type)
                        return <div className='dataRow'>
                            <div className='tripDetails'>{ele.date}</div>
                            <div className='tripDetails'>{ele.place}</div>
                            <div className='tripDetails'>{ele.type}</div>
                        </div>
                    else return <></>
                })
            })
    }

    render() {
        return <>
            <div className='parentTrips'>
                <div className='tripsHeader'>{this.state.title}</div>
                <div className='tripsListHeader'>
                    <div>Date</div>
                    <div>Place</div>
                    <div>Type</div>
                </div>
                <div className='tripList'>
                    {
                        this.state.list
                    }
                </div>
                <div className='radioButtons' onChange={(e) => { this.filterTrips(e.target.value) }}>
                    <div>Filter By &emsp;</div>
                    <div><input type="radio" value="Tropic" name="type" /> Tropic</div>
                    <div><input type="radio" value="Trek" name="type" /> Trek</div>
                    <div><input type="radio" value="Club" name="type" /> Club</div>
                    <div><input type="radio" value="All" name="type" /> None</div>
                </div>
            </div>

            <div className='links'>
                <div><Link to="/"><img src={homeIcon} alt="home" className='filterImg' height="50" width="50" /></Link></div>
                <div><Link to="/add"><img src={mapIcon} alt="home" className='filterImg' height="50" width="50" /></Link></div>
                <div><Link to="/list" style = {{backgroundColor : "#00000077"}}><img src={clockIcon} alt="home" className='filterImg' height="50" width="50" /></Link></div>
            </div>
        </>
    }
}

export default ListTrip;