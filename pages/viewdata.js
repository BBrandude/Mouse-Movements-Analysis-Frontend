import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function ViewData () {
    const { data, error } = useSWR('http://localhost:8000/viewdata', fetcher)

    if (error) {
        return <div>Failed to load</div>
    } 
    if (!data) return <div>Loading...</div>
  
    return (
      <div>
        <h1>{data.status}</h1>
      </div>
    )
}