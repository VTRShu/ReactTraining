import React, { useState, useEffect } from 'react';
import './style.css';
import Cookies from 'universal-cookie';
import { CookiesProvider } from 'react-cookie';
import { ParseJWT } from './Share/Intercreptors/ParseJWT';

import CurrentUserContext from './Share/Context/CurrentUserContext';
import CurrentHeaderContext from './Share/Contexts/CurrentHeaderContext';
import SecondHeaderContext from './Share/Contexts/SecondHeaderContext';

import {
  Route,
  Redirect,
  HashRouter,
  BrowserRoute as Routes,
  Router,
  Route,
} from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
export default function App() {
  const cookies = new Cookies();
  const [currentHeader, setCurrentHeader] = useState('Home');
  const [secondHeader, setSecondHeader] = useState();
  const tokenDecryption = ParseJWT(cookies.get('token'));
  const initialValues = {
    role: tokenDecryption
      ? tokenDecryption[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ]
      : null,
    userName: tokenDecryption
      ? tokenDecryption[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ]
      : null,
    id: tokenDecryption
      ? tokenDecryption[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ]
      : null,
  };
  const [currentUser, setCurrentUser] = useState(initialValues);
  return (
    <HashRouter>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <CookiesProvider>
          <CurrentHeaderContext.Provider
            value={{ currentHeader, setCurrentHeader }}
          >
            <SecondHeaderContext.Provider
              value={{ secondHeader, setSecondHeader }}
            >
              <Layout></Layout>
            </SecondHeaderContext.Provider>
          </CurrentHeaderContext.Provider>
        </CookiesProvider>
      </CurrentUserContext.Provider>
    </HashRouter>
  );
}
