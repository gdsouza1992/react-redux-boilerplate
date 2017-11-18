import { FETCH_USERS } from '../actions/userAction';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data.results;
        default:
            return state;
    }
}
