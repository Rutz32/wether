import React from 'react'

class CityForm extends React.Component {
	render(){
		return(
			<form onSubmit={this.props.getWether}>
				<input type="text" name='city'/>	
				<button className="clickMe">Click Me</button>
			</form>
		)
	}
}

export default CityForm