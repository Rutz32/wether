import React from 'react'

class CountDown extends React.Component{
	constructor(){
		super()
		this.state = {
			count : 0
		};

		this.valueUp = this.valueUp.bind(this);
		this.valueDown = this.valueDown.bind(this);
		this.reset = this.reset.bind(this);
	}

	valueUp(){
		this.setState((state) => ({
			count: this.state.count + 1
		}));
	}

	valueDown(){
		this.setState((state) => ({
			count: this.state.count - 1
		}));
	}

	reset(){
		this.setState({
			count: 0
		})
	}

	render(){
		return (
			<div>
				<p className="valueDisplay">{this.state.count < 0 ? 'Please increase the value now' : this.state.count}</p>
				<button className="clickMe" onClick={this.valueUp}>value Up</button>
				<button className="clickMe" onClick={this.valueDown} >value Down</button>
				<button className="clickMe" onClick={this.reset} >Reset my Counter</button>
			</div>
		)
	}
}

export default CountDown