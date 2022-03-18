import rols from '../data/role_grants';

const SET_USER_AUTH = 'SET_USER_AUTH';
const userAuthStorage = localStorage.getItem('userAuthShoppingCart');
const initState = userAuthStorage ? JSON.parse(userAuthStorage) : null;

export default function userAuth(state = initState, action = {}) {
  switch (action.type) {
    case SET_USER_AUTH:
      return handleSetUserAuth(action.payload);
    default:
      return state;
  }
}

function handleSetUserAuth(payload) {
  if(payload) {
    const rol = rols.find(r => r.role === payload.role);

    payload = {...payload, ...rol};

    localStorage.setItem('userAuthShoppingCart', JSON.stringify(payload));
  } else {
    localStorage.removeItem('userAuthShoppingCart');
  }


  return payload ;
}

export function getUserAuth(state) {
  return state.userAuth;
}

export function setUserAuth(payload) {
  return {
    type: SET_USER_AUTH,
    payload
  };
}