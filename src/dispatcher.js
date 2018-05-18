import { Dispatcher } from 'flux'
import store from './store'
import { CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM } from './actionTypes'

const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
	if(action.type === CHANGE_INPUT_VALUE){
		store.changeInputValue(action.value)
	}else if(action.type === ADD_LIST_ITEM){
		store.addListItem()
	}else if(action.type === DELETE_LIST_ITEM){
		store.deleteListItem(action.value)
	}
})

export default dispatcher
