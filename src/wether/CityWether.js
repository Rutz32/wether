import React from 'react'
import CityForm from './CityForm'

const APPKey = 'e5bb6a6ec2a2ebedd2be9141ca009d3b'
const URL = 'https://api.openweathermap.org/data/2.5'

class CityWether extends React.Component {

	constructor(){
		super()
		this.state = {
			CityName : '',
			minTemperature: '',
			WetherDescription: '',
			maxTemperature: '',
			WindSpeed: '',
			temp: ''


		}
	}

	getWether = (e) => {
		e.preventDefault();
		var city = e.target.elements.city.value;
		var url = `${URL}/weather?q=${city}&APPID=${APPKey}&units=imperial`;
		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({
			 CityName: data.name,
			 temp: data.main.temp,
			 minTemperature: data.main.temp_min,
			 maxTemperature: data.main.temp_max,
			 WindSpeed: data.wind.speed,
			 WetherDescription: data.weather[0].description
			});
		})
		.catch(error => console.log("Error is here: ", error))
	}

	render(){
		return(
			<div className="valueDisplay">
				<p>City: {this.state.CityName}</p>
				<p>Wether Description:{this.state.WetherDescription}</p>
				<p>temp: {this.state.temp}</p>
				<p>temp_max: {this.state.maxTemperature}</p>
				<p>temp_min: {this.state.minTemperature}</p>
				<p>Wind Speed: {this.state.WindSpeed}</p>
				<CityForm getWether={this.getWether}/>
			</div>
		)
	} 
}

export default CityWether