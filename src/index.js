import cookie from 'component-cookie'

import COOKIE_NAME from './cookie-name'
import decodeToken from './decode-token'

function status(token) {
  if (token) {
    return token.split(':')[1]
  }
  return null
}

function getDisplayNameFromToken(token) {
  const payload = decodeToken(token)
  return payload && payload.displayName
}

export function getDisplayNameOfCurrentUser() {
  const token = cookie(COOKIE_NAME)
  return getDisplayNameFromToken(token) || status(token)
}

export { COOKIE_NAME }
