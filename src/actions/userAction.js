import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers(userCount) {
    const url = `https://randomuser.me/api/?results=${userCount}`;
    const request = axios.get(url);
    return {
        type: FETCH_USERS,
        payload: request
    };
}
