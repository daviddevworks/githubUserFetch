export default async function fetchUser(username) {
  const response: object = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error("failed to fetch the user");
  return await response.json()
}
