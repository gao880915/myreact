import { Dispatcher } from 'flux'
import store from './store'

const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
	if(action.type === 'change_input_value'){
		store.changeInputValue(action.value)
	}
})

export default dispatcher
