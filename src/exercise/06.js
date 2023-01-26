// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputText, setInputText] = React.useState('')

  function handleChange(event) {
    setInputText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert(inputText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label value={inputText} >
          Username:
        </label>
        <input onChange={handleChange} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
