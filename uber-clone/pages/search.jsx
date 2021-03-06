import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useState } from 'react';
import { URL } from '../constants.ts';

function search() {
  const img = 'https://img.icons8.com/ios-filled/50/000000/left.png';
  const circle = 'https://img.icons8.com/ios/50/9CA3AF/filled-circle.png';
  const line = 'https://img.icons8.com/ios/50/9CA3AF/vertical-line.png';
  const plusIcon = 'https://img.icons8.com/ios-filled/50/000000/plus-math.png';
  const starIcon = 'https://img.icons8.com/ios-filled/50/ffffff/star--v1.png';
  const goToHome = URL.HOME;
  const goToConfirm = URL.CONFIRM;
  const [pickUp, setPickUp] = useState('');
  const [dropOff, setDropOff] = useState('');
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href={goToHome}>
          <BackButton src={img} />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FormToIcon>
          <Circle src={circle} />
          <Line src={line} />
          <Circle src={circle} />
        </FormToIcon>
        <InputBox>
          <Input
            placeholder="Enter pickup location"
            value={pickUp}
            onChange={(e) => { setPickUp(e.target.value); }}
          />
          <Input
            placeholder="Where to?"
            value={dropOff}
            onChange={(e) => { setDropOff(e.target.value); }}
          />
        </InputBox>
        <PlusIcon src={plusIcon} />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src={starIcon} />
        Saved Places
      </SavedPlaces>
      <Link href={{
        pathname: goToConfirm,
        query: {
          pickup: pickUp,
          dropoff: dropOff,
        },
      }}
      >
        <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
      </Link>
    </Wrapper>
  );
}
const Wrapper = tw.div`
h-screen bg-gray-200 
`;
const ButtonContainer = tw.div`
bg-white px-4`;
const BackButton = tw.img`
h-12 cursor-pointer`;
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`;
const FormToIcon = tw.div`
w-10 flex flex-col items-center mr-2`;
const Line = tw.img`
h-10`;
const Circle = tw.img`
h-2.5`;
const InputBox = tw.div`
flex flex-col flex-1 
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`;
const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3`;
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2`;
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;
const ConfirmButtonContainer = tw.div`
bg-black text-white flex items-center justify-center mt-2 mx-4 px-4 py-3`;
export default search;
