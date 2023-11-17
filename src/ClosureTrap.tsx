import React, { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'

export const ClosureTrapDemo: FC = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  function add() {
    setCount(count + 1)
  }

  useEffect(() => {
    countRef.current = count
  }, [count])

  function alertFn() {
    setTimeout(() => {
      alert(countRef.current)
    }, 3000)
  }

  return (
    <>
      <div>闭包陷阱</div>
      <div>
        <span>{count}</span>
        <button onClick={add}>add</button>
        <button onClick={alertFn}>alert</button>
      </div>
    </>
  )
}
