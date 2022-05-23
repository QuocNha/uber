import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';

function confirm() {
  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [propOffCoordinates, setDropOffCoordinates] = useState();

  const getPickUpCoordinates = () => {
    const pickUp = 'Santa Monica';
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?${
      new URLSearchParams({
        access_token: 'pk.eyJ1IjoibmhhZGFuZyIsImEiOiJjbDM0YWNkdTUwOHltM2NrNzdmbGxxYWdwIn0.b5P79zROMS--ysXXWhzrhA',
        limit: 1,
      })}`).then((response) => response.json()).then((data) => setPickUpCoordinates(data.features[0].center));
  };
  const getDropOffCoordinates = () => {
    const dropOff = 'Los Angeles';
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?${
      new URLSearchParams({
        access_token: 'pk.eyJ1IjoibmhhZGFuZyIsImEiOiJjbDM0YWNkdTUwOHltM2NrNzdmbGxxYWdwIn0.b5P79zROMS--ysXXWhzrhA',
        limit: 1,
      })}`).then((response) => response.json()).then((data) => setDropOffCoordinates(data.features[0].center));
  };
  useEffect(() => {
    getPickUpCoordinates();
    getDropOffCoordinates();
  }, []);
  return (
    <Wrapper>
      <Map pickUpCoordinates={pickUpCoordinates} propOffCoordinates={propOffCoordinates} />
      <RideContainer>
        Ride Selector
        Confirm Button
      </RideContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex h-screen flex-col
`;
const RideContainer = tw.div`
flex-1 
`;
export default confirm;
