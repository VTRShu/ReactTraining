import axios from 'axios';
import Cookies from 'universal-cookie';

function Authorization() {
  const cookies = new Cookies();
  axios.interceptors.request.use(function (config) {
    let token = cookies.get('token');
    if (token !== null) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  });
  axios.interceptors.response.use(
    (res) => {
      return Promise.resolve(res);
    },
    (err) => {
      if (err.response.status === 401) {
        cookies.remove('token');
        window.location.replace('/#/login');
        window.location.reload();
      }
      return Promise.reject(err);
    }
  );
}

export default Authorization;
