import qs from 'qs'

export function client (axios, { url, ...credentials }) {
  const config = {
    url,
    method: 'post',
    data: qs.stringify(credentials)
  }

  return () => axios(config).then(res => res.data)
}
