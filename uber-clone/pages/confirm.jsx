import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Map from './components/Map';
import RideSelector from './components/RideSelector';
import { URL } from '../constants.ts';

const img = 'https://img.icons8.com/ios-filled/50/000000/left.png';
function confirm() {
  const goToSearch = URL.SEARCH;
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickUpCoordinates, setPickUpCoordinates] = useState([0, 0]);
  const [propOffCoordinates, setDropOffCoordinates] = useState([0, 0]);

  const getPickUpCoordinates = (value) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?${
      new URLSearchParams({
        access_token: 'pk.eyJ1IjoibmhhZGFuZyIsImEiOiJjbDM0YWNkdTUwOHltM2NrNzdmbGxxYWdwIn0.b5P79zROMS--ysXXWhzrhA',
        limit: 1,
      })}`).then((response) => response.json()).then((data) => setPickUpCoordinates(data.features[0].center));
  };
  const getDropOffCoordinates = (value) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?${
      new URLSearchParams({
        access_token: 'pk.eyJ1IjoibmhhZGFuZyIsImEiOiJjbDM0YWNkdTUwOHltM2NrNzdmbGxxYWdwIn0.b5P79zROMS--ysXXWhzrhA',
        limit: 1,
      })}`).then((response) => response.json()).then((data) => setDropOffCoordinates(data.features[0].center));
  };
  useEffect(() => {
    getPickUpCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href={goToSearch}>
          <BackButton src={img} />
        </Link>
      </ButtonContainer>
      <Map pickUpCoordinates={pickUpCoordinates} propOffCoordinates={propOffCoordinates} />
      <RideContainer>
        <RideSelector
          pickUpCoordinates={pickUpCoordinates}
          propOffCoordinates={propOffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
}

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;
const Wrapper = tw.div`
flex h-screen flex-col
`;
const RideContainer = tw.div`
flex-1 flex  flex-col
`;
const ConfirmButtonContainer = tw.div``;
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;
const BackButton = tw.img`
h-12 object-contain`;
export default confirm;
