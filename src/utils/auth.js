import { changeStringLength } from "../constants/functions";

const removePort = () => {
  let url = window.origin;
  const startIndex = url.indexOf(':', url.indexOf('https:'));
  const endIndex = url.length - 1;
  const newOrigin = changeStringLength(url, endIndex - startIndex);
  return newOrigin;
};

export const PUBLIC_URL = `${removePort()}:4001`;
export const PRIVATE_URL = `${removePort()}:4004`;

export const register = (password, email) => {
  return fetch(`${PUBLIC_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then((res) => {
      return _handleResponse(res);
    });
};

export const authorize = (password, email) => {
  return fetch(`${PUBLIC_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(((res) => {
      return _handleResponse(res);
    }))
};

export const checkToken = (token) => {
  return fetch(`${PUBLIC_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => _handleResponse(res));
}

const _handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
};
