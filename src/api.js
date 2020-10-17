export default (url) => fetch(`${process.env.API_ENDPOINT}/${url}`)
  .then((r) => r.json());
