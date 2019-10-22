import sinon from 'sinon'
import { currentUserProvider } from '../lib/current-user'

function stubCurrentUser(id, displayName) {
  const getIdOfCurrentUserStub = sinon.stub(currentUserProvider, 'getId')
  getIdOfCurrentUserStub.returns(id)

  const getDisplayNameOfCurrentUserStub = sinon.stub(currentUserProvider, 'getDisplayName')
  getDisplayNameOfCurrentUserStub.returns(displayName)

  return {
    restore() {
      getIdOfCurrentUserStub.restore()
      getDisplayNameOfCurrentUserStub.restore()
    },
  }
}

export {
  stubCurrentUser,
}
