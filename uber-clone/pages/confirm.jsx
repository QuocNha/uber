import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import Map from './components/Map';
import RideSelector from './components/RideSelector';

function confirm() {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [propOffCoordinates, setDropOffCoordinates] = useState();

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
      <Map pickUpCoordinates={pickUpCoordinates} propOffCoordinates={propOffCoordinates} />
      <RideContainer>
        <RideSelector />
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
export default confirm;
