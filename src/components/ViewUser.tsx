export default function ViewUser({data}) {
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
