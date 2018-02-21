import React, {Component} from 'react'

class Battle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOneName: '',
			playerOneImage: null,
			playerTwoName: '',
			playerTwoImgage: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(id, username) {
		this.setState(function () {
			var newState = {};
			newState[id + 'Name'] = username;
			newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
			return newState;
		});
	}
	
	render() {
		return (<div>
			<div className="row"></div>
		</div>)
		
	}
}

export default Battle;