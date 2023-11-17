import { useEffect, useState } from 'react'

function getUserInfo(): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Date.now())
    }, 2000)
  })
}

function useGetInfo() {
  const [loading, setLoading] = useState(true)
  const [info, setUserInfo] = useState(0)
  useEffect(() => {
    setLoading(true)
    getUserInfo().then(res => {
      setLoading(false)
      setUserInfo(res)
    })
  }, [])

  return [loading, info]
}

export { useGetInfo }
