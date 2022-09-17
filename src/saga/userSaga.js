import { put, takeEvery, call } from 'redux-saga/effects'
import { setUsers, FETCH_USERS } from './../store/usersReducer'

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchWorker() {
  const response = yield call(fetchUsersFromApi)
  const data = yield call(() => new Promise(res => res(response.json())))
  yield put(setUsers(data))
}
export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchWorker)
}
