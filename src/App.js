import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './app.css'

export default class App extends React.Component {
  constructor(props) {
	    super(props)
	    this.state = {
	    	items: ['hello', 'world', 'click', 'me']
	    }
	    this.handleClick = this.handleClick.bind(this)
  }
  render () {
  	const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));
    
    return (
    	<div>
    	  <CSSTransitionGroup
    	   transitionName="example"
    	   transitionAppear={true}
    	   transitionEnterTimeout={500}
    	   transitionLeaveTimeout={300}>
    	    {items}
    	  </CSSTransitionGroup>
    	  <div onClick={this.handleClick}>toggle</div>
    	</div>
    )
  }
  
  handleClick(){
  	this.setState({
  		show:!this.state.show
  	})
  }
}
