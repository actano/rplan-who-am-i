const create = (userId, displayName) => ({
  sub: userId,
  displayName,
})

const getUserId = payload => payload.sub
const getDisplayName = payload => payload.displayName

export {
  create,
  getDisplayName,
  getUserId,
}
