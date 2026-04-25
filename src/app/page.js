export default async function Home(){
  const res = await fetch("http://localhost:3000/api/trending", {
    cache: "no-store"
  })
  const data = await res.json()

  return (
    <div>
      <h1>热门电影</h1>
      {data.results.map(m=>(
        <div key={m.id}>
          <a href={`/movie/${m.id}-${m.title.replace(/\s+/g,'-')}`}>
            {m.title}
          </a>
        </div>
      ))}
    </div>
  )
}