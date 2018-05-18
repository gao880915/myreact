import React, { Component } from 'react'
import store from './store'
import dispatcher from './dispatcher'

export default class Todolist extends Component{
	constructor(props){
		super(props)
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		store.addChangeFn(this.handleStoreChange)
	}
	render(){
		return (
			<div>
			  <div>
			   <input value={this.state.inputValue} onChange={this.handleInputChange}/>
			   <button>提交</button>
			  </div>
			  <ul>
			    {
			    	this.state.list.map((value,index)=>{
			    		return <li key={index}>{value}</li>
			    	})
			    }
			  </ul>
			</div>
		)
	}
	
	handleInputChange(e){
		const action = {
			type:'change_input_value',
			value:e.target.value
		}
		dispatcher.dispatch(action)
	}
	handleStoreChange(){
		this.setState(store.getState())
	}
}
