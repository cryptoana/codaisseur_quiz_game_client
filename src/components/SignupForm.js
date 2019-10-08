import React from 'react'
import { Link } from 'react-router-dom';

export default function CreateForm (props) {
  const { onSubmit, onChange, values } = props
  const { name, email, password } = values

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='name'
        />

        <input
          type='text'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='email'
        />

        <input
          type='text'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='password'
        />

        <button type='submit'>Submit</button>
      </form>
      <p>Have an account? <Link to="/login">Log in</Link></p>
    </div>
  )
}