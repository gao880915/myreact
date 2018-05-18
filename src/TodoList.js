import React, { Component } from 'react'
import store from './store'
import dispatcher from './dispatcher'
import { getChangeInputAction,getAddItemAction } from './actionCreator'

export default class Todolist extends Component{
	constructor(props){
		super(props)
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleAddClick = this.handleAddClick.bind(this)
		store.addChangeFn(this.handleStoreChange)
	}
	render(){
		return (
			<div>
			  <div>
			   <input value={this.state.inputValue} onChange={this.handleInputChange}/>
			   <button onClick={this.handleAddClick}>提交</button>
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
		dispatcher.dispatch(getChangeInputAction(e.target.value))
	}
	handleStoreChange(){
		this.setState(store.getState())
	}
	
	handleAddClick(){
		dispatcher.dispatch(getAddItemAction())
	}
}
