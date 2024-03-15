export default function userReducer(userState, action) {
    switch (action.type) {
      case 'UPDATE_AGE':
        return {
          ...userState,
          age: action.payload
        }
      case 'UPDATE_NAME':
        return {
          ...userState,
          name: action.payload
        }
      default:
        return userState
    }
  }
  