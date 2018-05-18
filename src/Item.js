import React,{ Component } from 'react'

export default class Item extends Component {
	componentWillReceiveProps(){
		console.log('componentWillReceiveProps')
	}
	render() {
		return <div>child</div>
	}
}
