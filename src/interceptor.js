function getMaxAge (res) {
  return res.expires_in * 1000
}

function headerFormatter (res) {
  return 'Bearer ' + res.access_token
}

export function interceptor (tokenProvider, authenticate) {
  const getToken = tokenProvider.tokenCache(authenticate, { getMaxAge })
  return tokenProvider({ getToken, headerFormatter })
}
