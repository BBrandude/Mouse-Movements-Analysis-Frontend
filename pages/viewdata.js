import React, { useState, useEffect } from "react"

function sleep(ms){
  return new Promise( resolver => setTimeout(resolver, ms));
 };

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
      } else {
        setUserData("untrusted")
        await sleep(5000)
        window.location.replace("http://localhost:3000/");
      }
    })()
  }, [])

  if (userData === undefined) return <p>Loading...</p>
  if (userData === "internal error") return <p>Internal Error</p>
  if (userData === "untrusted") return <p>untrusted</p>
  

  return (
    <>
      good
    </>
  )
}