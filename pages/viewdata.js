import React, { useState, useEffect } from "react"

function sleep(ms) {
  return new Promise(resolver => setTimeout(resolver, ms));
};

export default function ViewData() {

  const [userData, setUserData] = useState(undefined)

  useEffect(() => {
    (async function () {
      let dataRes = await fetch('http://localhost:8000/api/viewdata', { credentials: 'include' })
      if (dataRes.status === 200) {
        let dataResJSON = await dataRes.json()
        setUserData(dataResJSON)
        console.log(userData)
      } else if (dataRes.status === 500) {
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
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Statistic</th>
            <th>You</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Deviation From Linear Line (from point a to b)</td>
            <td>{userData.standardDeviation}</td>
            <td>Coming Soon...</td>
          </tr>
          <tr>
            <td>Average Distance Per Movement (pixels)</td>
            <td>{userData.averagMovementDistance}</td>
            <td>Coming Soon...</td>
          </tr>
          <tr>
            <td>Average Time In Between Movements (microseconds)</td>
            <td>{userData.averageMovementTime}</td>
            <td>Coming Soon...</td>
          </tr>
          <tr>
            <td>Average Movement Distance(pixels) Per Microsecond</td>
            <td>{userData.AverageMovementDistanceOverTime}</td>
            <td>Coming Soon...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}