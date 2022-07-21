import React, { useState, useEffect } from "react"



export default function ViewData() {

  const [userData, setUserData] = useState(undefined)

  useEffect(() => {
    (async function () {
      let dataRes = await fetch('http://localhost:8000/viewdata', { credentials: 'include' })
      if (dataRes.status === 200) {
        let dataResJSON = dataRes.json()
        setUserData(dataResJSON)
      } else if(dataRes.status === 500) {
        setUserData("internal error")
      }
    })()
  }, [])

  if (userData === undefined) return <p>Loading...</p>
  if (userData === "internal error") return <p>Internal Error</p>

  return (
    <>
      good
    </>
  )
}