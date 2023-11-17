import React, { useState } from 'react'
import type { FC } from 'react'
import { produce } from 'immer'
const ImmerDemo: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: 'dajiba', age: 20 })

  function changeAge() {
    setUserInfo(
      produce(draft => {
        draft.age = 21
      })
    )
  }

  return (
    <div>
      <h3>immer 不可变数据</h3>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>change Age</button>
    </div>
  )
}

export { ImmerDemo }
