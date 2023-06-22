async function getData() {
  const res = await fetch('localhost:3000/api/spotify', {cache: 'no-store'})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function Spotify(){
    const data = await getData()
    return (
        <div>Now playing: {data.isPlaying} </div>
    )
}