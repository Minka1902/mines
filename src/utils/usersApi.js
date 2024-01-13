import { PUBLIC_URL } from "./auth";

class usersApi {
  constructor(props) {
    this._authToken = props.auth;
    this._rootUrl = props.rootUrl;
  }

  _fetch = ({ method = "POST", url = '/', data, auth = localStorage.getItem('jwt') }) =>
    fetch(`${this._rootUrl}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Host': '<calculated when request is sent>',
        'api-key': this._authToken,
        'authorization': `Bearer ${auth}`,
      },
      body: JSON.stringify(data),
    }).then(this._handleResponse)

  _handleResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))

  login = ({ email, password }) => this._fetch({ method: "POST", url: "/signin", data: { email, password } })

  getCurrentUser = () => this._fetch({ method: "GET", url: "/users/me" })

  signUp = ({ email, password, username }) => this._fetch({ method: "POST", url: "/signup", data: { email, password, username } })

  newHighScore = ({ email, newHighScore }) => this._fetch({ method: "PUT", url: '/new-high-score', data: { email, newHighScore } })
}
// ! DEBUG API
// const usersApiOBJ = new usersApi({ auth: '4den6CaDRe58L5Jx85R7E38xpVcn8TZcyqznqZVpKFAjeqqG80eZQc1WCtRNM1Aq', rootUrl: 'http://localhost:3001' });
// ! REAL API
const usersApiOBJ = new usersApi({ auth: '4den6CaDRe58L5Jx85R7E38xpVcn8TZcyqznqZVpKFAjeqqG80eZQc1WCtRNM1Aq', rootUrl: PUBLIC_URL });
export default usersApiOBJ;
