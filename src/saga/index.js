import { all } from 'redux-saga/effects'

import { userWatcher } from './userSaga'
import { countWorker } from './countSaga'

export function* rootWatcher() {
  yield all([userWatcher(), countWorker()])
}
