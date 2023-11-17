import React from 'react'
// import './App1.css'
// import { List2 } from './List2'
// import { ImmerDemo } from './immerDemo'
// import { RefDemo } from './RefDemo'
// import { MemoDemo } from './UseMemoDemo'
// import { CallbackDemo } from './UseCallbackDemo'
// import { useTitle } from './hooks/useTitle'
// import { useMouse } from './hooks/useMouse'
// import { useGetInfo } from './hooks/useGetInfo'
// import { useTitle, useMouse } from 'ahooks'
import { ClosureTrapDemo } from './ClosureTrap'
function App() {
  // useTitle('Hello')
  // const mouse = useMouse()

  return (
    <div className="App">
      {/* <div>
        page: {mouse.clientX}, {mouse.clientY}
      </div> */}
      {/* <div>{loading ? '加载中' : info}</div> */}
      {/* <ImmerDemo /> */}
      {/* <List2 /> */}
      {/* <RefDemo /> */}
      {/* <MemoDemo /> */}
      {/* <CallbackDemo /> */}
      <ClosureTrapDemo />
    </div>
  )
}

export default App
