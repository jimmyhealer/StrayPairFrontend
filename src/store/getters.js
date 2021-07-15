export const getSession = state => {return state.session}
export const checkLogin = state => {return state.session !== undefined}
export const getUserName = state => {return state.profile.user.username}