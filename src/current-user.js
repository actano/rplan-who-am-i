import cookie from 'component-cookie'

import COOKIE_NAME from './cookie-name'
import decodeToken from './decode-token'

function getPayload() {
  const token = cookie(COOKIE_NAME)
  return decodeToken(token)
}

function status(token) {
  if (token) {
    return token.split(':')[1]
  }
  return null
}

const currentUserProvider = {
  getDisplayName() {
    const token = cookie(COOKIE_NAME)
    const payload = getPayload()
    const displayName = payload && payload.displayName
    return displayName || status(token)
  },
  getId() {
    const payload = getPayload()
    return payload && payload.sub
  },
}

function getDisplayNameOfCurrentUser() {
  return currentUserProvider.getDisplayName()
}

function getIdOfCurrentUser() {
  return currentUserProvider.getId()
}

export {
  getDisplayNameOfCurrentUser,
  getIdOfCurrentUser,
  currentUserProvider,
}
