import { all } from 'redux-saga/effects'

import { sagasUser } from './sagas'

export default function* rootSagas () {
    yield all([
            ...sagasUser,
        ]
    )
}
