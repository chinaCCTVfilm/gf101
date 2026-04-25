import { getDetail } from "@/lib/api";export default async function Page({params}){const realId = params.id.split("-")[0]
const m = await getDetail(realId);return(<div><h1>{m.title}</h1><p>{m.overview}</p></div>)}
