export const getJsonData = (url) => {
  return fetch(`${process.env.API_ENDPOINT}/${url}`)
    .then(r => r.json())
}