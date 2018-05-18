import React from 'react'
import Item from './Item'

export default class App extends React.Component {
  constructor(props) {
	    super(props)
	    console.log('constructor')
	    this.state = {
	    	message:'hello world',
	    }
	    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {
  	console.log('componentWillMount')
  }
  render () {
  	console.log('render')
    return (
    	<div onClick={this.handleClick}>
    	{this.state.message}
    	<Item/>
    	</div>
    )
  }
  componentDidMount(){
  	console.log('componentDidMount')
  }
  
  shouldComponentUpdate(nextProps, nextState){
  	console.log('shouldComponentUpdate')
  	return true
  }
  
  componentWillUpdate(){
  	console.log('componentWillUpdate')
  }
   componentDidUpdate(){
  	console.log('componentDidUpdate')
  }
  handleClick(){
	this.setState({
		message:'Gao'
	})
  }
}
