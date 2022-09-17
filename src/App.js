import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { FetchUsers } from './store/usersReducer'
import { AsyncIncrementCreator, AsyncDecrementCreator } from './store/counterReducer'

const App = () => {
  const users = useSelector(state => state.usersReducer.users)
  const count = useSelector(state => state.countReducer.count)
  const dispatch = useDispatch()

  return (
    <div className='app'>
      <div className='count'>{count}</div>
      <div className='btns'>
        <button className='btn' onClick={() => dispatch(AsyncIncrementCreator())}>
          Increment
        </button>
        <button className='btn' onClick={() => dispatch(AsyncDecrementCreator())}>
          Decrement
        </button>
        <button className='btn' onClick={() => dispatch(FetchUsers())}>
          Fetch users
        </button>
      </div>
      <div className='users'>
        {users.map(user => (
          <div key={user.id} className='user'>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
