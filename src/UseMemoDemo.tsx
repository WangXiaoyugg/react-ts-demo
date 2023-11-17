import React, { useMemo, useState } from 'react'
import type { FC } from 'react'

const MemoDemo: FC = () => {
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)
  const [text, setText] = useState('hello')

  const sum = useMemo(() => {
    console.log('gen sum')
    return num1 + num2
  }, [num1, num2])

  console.log('demo....')

  return (
    <>
      <p>{sum}</p>
      <p>
        {num1} <button onClick={() => setNum1(num1 + 1)}>add num1</button>
      </p>
      <p>
        {num2} <button onClick={() => setNum2(num2 + 1)}>add num2</button>
      </p>
      <p>
        <input type="text" onChange={e => setText(e.target.value)} value={text} />
      </p>
    </>
  )
}

export { MemoDemo }
