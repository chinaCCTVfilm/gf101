export async function GET() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`,
      {
        next: { revalidate: 3600 } // 缓存1小时
      }
    )

    const data = await res.json()

    return Response.json(data)
  } catch (e) {
    return Response.json({
      results: [
        { id: 1, title: "Fallback Movie 1" },
        { id: 2, title: "Fallback Movie 2" }
      ]
    })
  }
}