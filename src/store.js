import { EventEmitter } from 'events'

const store = Object.assign({},EventEmitter.prototype,{
	state:{
		inputValue:'',
		list: []
	},
	getState(){
		return this.state
	},
	changeInputValue(value){
		this.state.inputValue = value
		this.emit('change')
	},
	addChangeFn(fn){
		this.on('change',fn)
	},
	addListItem(){
		this.state.list.push(this.state.inputValue)
		this.state.inputValue = ''
		this.emit('change')
	}
})

export default store