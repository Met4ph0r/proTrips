import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import homeIcon from './assets/house-solid.svg'
import mapIcon from './assets/map-location.svg'
import clockIcon from './assets/clock-rotate.svg'

class AddTrip extends React.Component {
    constructor() {
        super()
        this.state = {
            date: "",
            place: "",
            type: "",
            tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList"))
        }
        document.body.style = `background-image:linear-gradient(45deg, #4d90ed 30%, rgb(236, 159, 118) 80%); font-size: 50px; height: 90vh;`
    }

    submitInfo(date, place, type) {
        if(date === "" || place === "" || type === ""){
            document.querySelector("#message").innerHTML = `<span style= 'color: red; animation: popin ease-in-out 350ms; display: inline-block;'>All fields required</span>`
            setTimeout(() => {document.querySelector("#message").innerHTML = ""}, 2000)
        }
        else {
            let TripObj = {
                date: date,
                place: place,
                type: type
            }
            this.setState(prevState => ({
                tripsArr: [...prevState.tripsArr, TripObj],
                date: "",
                place: "",
                type: "Trek"
            }))
            document.querySelector("#message").innerHTML = `<span style= 'color: green; animation: popin ease-in-out 350ms; display: inline-block;'>Saved</span>`
            setTimeout(() => {document.querySelector("#message").innerHTML = ""}, 2000)
    }
    }

    render() {
        localStorage.setItem("tripList", JSON.stringify(this.state.tripsArr));
        return <>
            <div className='parentAdd'>
                <div className='header'>Add a trip</div>
                <div className='form'>
                    <div className='date'>
                        <div>Date</div>
                        <div><input class="addInput" type="date" id='date' value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })}></input></div>
                    </div>
                    <div>
                        <div>Place</div>
                        <div><input class="addInput" type="text" id='place' value={this.state.place} onChange={(e) => this.setState({ place: e.target.value })}></input></div>
                    </div>
                    <div>
                        <div>Type</div>
                        <div>
                            <select id='type' value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                                <option value=""  disabled={true}>Select</option>
                                <option className='otherOptions' value="Trek">Trek</option>
                                <option className='otherOptions' value="Tropic">Tropic</option>
                                <option className='otherOptions' value="Club">Club</option>
                            </select>
                        </div>
                    </div>
                    <div className='buttonAndMessage'>
                        <div id="message"></div>
                        <button onClick={() => this.submitInfo(this.state.date, this.state.place, this.state.type)}>Submit</button>
                    </div>
                </div>
            </div>

            <div className='links'>
                <div><Link to="/"><img src={homeIcon} alt="home" className='filterImg' height="50" width="50" /></Link></div>
                <div><Link to="/add" style = {{backgroundColor : "#00000077"}}><img src={mapIcon} alt="home" className='filterImg' height="50" width="50" /></Link></div>
                <div><Link to="/list"><img src={clockIcon} alt="home" className='filterImg' height="50" width="50" /></Link></div>
            </div>
        </>
    }
}

export default AddTrip;