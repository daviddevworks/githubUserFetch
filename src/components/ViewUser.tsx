export interface User {
  login: string
  name?: string
  avatar_url?: string
  bio?: string
  email?: string
  blog?: string
  company?: string
  location?: string
  public_repos?: number
  followers?: number
  following?: number
  html_url?: string
  error?: string
}
export default function ViewUser({data: data}: {data: User}) {
  if (data.error) return (
    <div className="userNotFound"><h1>User Not Found</h1></div>
  )
  return (
  <div className="userCard">
      <div className="user">
      <h2>{data.name || data.login}</h2>
      <img src={data.avatar_url} />
      </div>
      <div className="info">
      <p>Username: {data.login}</p>
      <p>Bio: {data.bio || "none"}</p>
      <p>Email: {data.email || "Not provided"}</p>
      <p>Blog: {data.blog ? <a href={data.blog} target="_blank">{data.blog}</a> : "none"}</p>
      <p>Company: {data.company || "Not provided"}</p>
      <p>Location: {data.location || "Not provided"}</p>
      <p>Public Repos: {data.public_repos || "none"}</p>
      <p>Followers: {data.followers || "none"}</p>
      <p>Following: {data.following || "none"}</p>
      <a href={data.html_url} target="_blank">Github Account</a>
      </div>
    </div>
  )
}
