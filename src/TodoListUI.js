import React from 'react'

export default (props) => {
	const { list,inputValue,handleDelete,handleInputChange,handleSubmitClick } = props
	const finalList = list.map((value,index)=>{
		return (
			<li key={index}>{value}
				<span onClick={handleDelete} data-index={index}>删除</span>
			</li>
		)
	})
	return (
		<div>
			<div>
				<input value= {inputValue} onChange={ handleInputChange }/>
				<button onClick={handleSubmitClick}>提交</button>
			</div>
			<ul>{finalList}</ul>
		</div>
	)
}