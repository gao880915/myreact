import { EventEmitter } from 'events'

const store = Object.assign({},EventEmitter.prototype,{
	state:{
		inputValue:'',
		list: [1,2,3,4]
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
	}
})

export default store