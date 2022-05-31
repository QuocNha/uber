import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import Map from './components/Map';
import { URL } from '../constants.ts';
import { auth, provider } from '../firebase.ts';

export default function Home() {
  const img = 'https://i.ibb.co/5RjchBg/ubershedule.png';
  const goToSearch = URL.SEARCH;
  const goToLogin = URL.LOGIN;

  const router = useRouter();
  const [userFireBase, setUserFireBase] = useState(null);
  const handlerLogOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const valueAuth = auth;
    return onAuthStateChanged(valueAuth, (user) => {
      if (user) {
        setUserFireBase({ name: user?.displayName, photoUrl: user.photoURL });
      } else {
        setUserFireBase(null);
        router.push(goToLogin);
      }
    });
  }, []);
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src={img} />
          <Profile>
            <Name>{userFireBase && userFireBase?.name}</Name>
            <UserImage onClick={handlerLogOut} src={userFireBase && userFireBase?.photoUrl} />
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <Link href={goToSearch}>
            <ActionButton>
              <ActionButtonImg src={img} />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImg src={img} />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImg src={img} />
            Reserve
          </ActionButton>
        </ActionButtons>
        {/* InputButton */}
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}
const Wrapper = tw.div`
flex flex-col h-screen
`;
const ActionItems = tw.div`
flex-1 p-4
`;
const Header = tw.div`
flex justify-between items-center
`;
const UberLogo = tw.img`
h-28
`;
const Profile = tw.div`
flex items-center`;
const Name = tw.div`
mr-4 w-20 text-sm`;
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer`;
const ActionButtons = tw.div`
flex`;
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg flex-col transform hover:scale-105 transition text-xl`;
const ActionButtonImg = tw.img`
bg-gray-200 h-3/5
`;
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
