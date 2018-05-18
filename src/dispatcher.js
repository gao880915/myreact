import { Dispatcher } from 'flux'
import store from './store'
import { CHANGE_INPUT_VALUE,ADD_LIST_ITEM } from './actionTypes'

const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
	if(action.type === CHANGE_INPUT_VALUE){
		store.changeInputValue(action.value)
	}else if(action.type === ADD_LIST_ITEM){
		store.addListItem()
	}
})

export default dispatcher
