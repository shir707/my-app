import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })
    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.edit ? 'Update your item' : 'Add to todo'}
        value={input}
        name="text"
        className={`todo-input ${props.edit && 'edit'}`}
        onChange={handleChange}
        ref={inputRef}
      />
      <button className={`todo-button ${props.edit && 'edit'}`}>
        {props.edit ? 'Update' : 'Add todo'}
      </button>
    </form>
  )
}

export default TodoForm
