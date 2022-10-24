import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import { VscChromeClose } from "react-icons/vsc"
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, star } from './features/todoReducer';



function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo)

  const handleClick = () => {
    if (text === '') {
      dispatch(
        addTodo({
          text,
          completed: false
        })
      )
      setText('')
    }
  }

  const handleremove = (index) => {
    dispatch(
      removeTodo(index)
    )
  }

  const handleStar = (index) => {
    dispatch(star(index))
  }


  return (
    <>
    <div className="app">
      <form onSubmit={(e) => e.preventDefault()}>
        <input  value={text} onChange={(e) => setText(e.target.value)} placeholder="Введите текст..." />
        <button onClick={handleClick}>Добавить</button>
      </form>
        {todos.map((item, index) => {
          return (
            <div className="todos" style={item.completed ? { backgroundColor: "pink", opacity: 0.9 } : { backgroundColor: "white" }}>
              <div  onClick={() => handleStar(index)} className="star">{!item.completed ? <FaStar/> : <FaStar style={{color: ' #ffff00'}} />}</div>
              <span>{item.text}</span>
              <div onClick={() => handleremove(index)} className="button"><VscChromeClose /></div>
            </div>
          )
        })}
      </div>
      </>     
  )
};
export default App;
