import React, { useRef } from 'react'
import type { FC } from 'react'

const RefDemo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const userRef = useRef({ name: 'garen', age: 20 })
  function handleInputClick() {
    const inputEl = inputRef.current
    inputEl && inputEl.focus()
  }

  function changeUser() {
    userRef.current.age = 30
    console.log(userRef.current)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleInputClick}>input focus</button>
      <br />
      <div>{JSON.stringify(userRef.current)}</div>
      <button onClick={changeUser}>change User</button>
    </div>
  )
}

export { RefDemo }
