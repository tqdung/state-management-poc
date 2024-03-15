import userReducer from './reducers/user'
import Store from './store'

const reducers = {
  user: userReducer,
}

const initialState = {
  user: {
    name: 'Peter',
    age: 18,
  },
}

export const store = new Store(reducers, initialState)

export default store
