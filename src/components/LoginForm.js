import React from 'react'
import { Link } from 'react-router-dom';

export default function CreateForm (props) {
  const { onSubmit, onChange, values } = props
  const { email, password } = values

  return (
    <React.Fragment> 
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='e-mail'
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
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </React.Fragment>
  )
}