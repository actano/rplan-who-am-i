import cookie from 'component-cookie'
import jwt from 'jsonwebtoken'

import { privateKey } from './insecure-test-key'
import * as Payload from './payload'
import COOKIE_NAME from './cookie-name'

export function generateToken(payload, expiresIn) {
  const options = {
    algorithm: 'RS512',
    expiresIn,
  }

  return jwt.sign(
    payload,
    privateKey,
    options,
  )
}

function stubCookie(id, displayName) {
  const token = generateToken(
    Payload.create(id, displayName),
    '30 days',
  )
  cookie(COOKIE_NAME, token)

  return {
    restore() {
      cookie(COOKIE_NAME, '')
    },
  }
}

export { stubCookie }
