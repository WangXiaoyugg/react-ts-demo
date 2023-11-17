import React, { useState, useCallback } from 'react'
import type { FC } from 'react'

const CallbackDemo: FC = () => {
  const [text, setText] = useState('hello')

  function fn1() {
    console.log('fn1 text: ', text)
  }

  const fn2 = useCallback(() => {
    console.log('fn2 text: ', text)
  }, [text])

  return (
    <>
      <div>
        <button onClick={fn1}>fn1</button>
        <button onClick={fn2}>fn2</button>
      </div>
      <p>
        <input type="text" onChange={e => setText(e.target.value)} value={text} />
      </p>
    </>
  )
}

export { CallbackDemo }
