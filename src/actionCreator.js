import { CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM } from './actionTypes'

export const getChangeInputAction = (value)=>({
	type:CHANGE_INPUT_VALUE,
	value:value
})

export const getAddItemAction = ()=>({
	type:ADD_LIST_ITEM
})

export const getDeleteItemAction = (value)=>({
	type:DELETE_LIST_ITEM,
	value:value
})