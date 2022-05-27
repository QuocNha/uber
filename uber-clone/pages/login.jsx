import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import firebase, { signInWithPopup } from 'firebase/auth';

import { auth, provider } from '../firebase.ts';
import { URL } from '../constants.ts';

const uberLogo = 'https://i.ibb.co/ZMhy8ws/uber-logo.png';
const headerImg = 'https://i.ibb.co/CsV9RYZ/login-imgage.png';

function login() {
  const homeLink = URL.HOME;
  const router = useRouter();
  const handlerButton = () => {
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    firebase?.onAuthStateChanged((user) => {
      if (user) {
        router.push(homeLink);
      } else {
        // No user is signed in.
      }
    });
  });
  return (
    <Wrapper>
      <UberLogo src={uberLogo} />
      <Title>Log in to access your account</Title>
      <HeaderImg src={headerImg} />
      <SignInButton onClick={handlerButton}> Sign In Google</SignInButton>
    </Wrapper>
  );
}

const HeaderImg = tw.img`
object-contain w-full h-20  
`;
const Title = tw.div`text-5xl pt-4 text-gray-500`;
const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`;
const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4`;
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer`;
export default login;
