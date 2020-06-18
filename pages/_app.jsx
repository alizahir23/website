import Head from 'next/head';
import Router from 'next/router';
import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import * as FirebaseAuth from '../src/components/FirebaseAuth';
import '../src/scss/style.scss';
import Spinner from '../src/components/Spinner';
import UserContext from '../src/components/UserContext';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const [User, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('osc-app-token');
    async function updation() {
      setLoading(true);
      const verificationResult = await FirebaseAuth.verifySecuredToken(token);

      if (verificationResult !== null) {
        setUser({
          name: verificationResult.name,
          email: verificationResult.email,
          uid: verificationResult.uid,
          profileImageUrl: verificationResult.profileImageUrl
        });
        if (Router.pathname === '/') {
          Router.replace('/feed');
        }
      } else {
        Router.replace('/');
      }
    }

    if (token) {
      updation();
    } else {
      Router.replace('/');
    }
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 400);

  if (Loading) return <Spinner />;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>OpenSourceCode</title>
      </Head>

      <UserContext.Provider
        value={{
          User,
          setUser
        }}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
