export function UPDATE_AUTH(token, isAthenticated) {
  return {
    type: 'UPDATE_AUTH',
    isLoggedIn: isAthenticated,
    accessToken: token,
    refreshToken: null
  }
}

export function UPDATE_USER(user) {
  const {
    name,
    email,
    _id
  } = user
  return {
    type: 'UPDATE_USER',
      id: _id,
      name: name,
      email: email,
      options: [],
      modules: [],
  }
}