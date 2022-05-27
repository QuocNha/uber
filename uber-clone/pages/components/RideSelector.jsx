import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

function RideSelector(props) {
  const { pickUpCoordinates, propOffCoordinates } = props;
  const carImg = 'https://i.ibb.co/cyvcpfF/uberx.png';
  const [rideDuration, setRideDuration] = useState();

  // get ride duration from MAP BOX API
  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${propOffCoordinates[0]},${propOffCoordinates[1]};${pickUpCoordinates[0]},${pickUpCoordinates[1]}?access_token=pk.eyJ1IjoibmhhZGFuZyIsImEiOiJjbDM0YWNkdTUwOHltM2NrNzdmbGxxYWdwIn0.b5P79zROMS--ysXXWhzrhA`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data?.routes?.[0]) {
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  }, [pickUpCoordinates, propOffCoordinates]);
  return (
    <Wrapper>
      <Title> Choose a ride , or swipe up for more</Title>
      <CarList>
        <Car>
          <CarImage src={carImg} />
          <CarDetails>
            <Service> Uber-X</Service>
            <Time> 5 min away</Time>
          </CarDetails>
          <Price>
            {' '}
            {`$ ${(rideDuration * 2.4).toFixed(2)}`}
          </Price>
        </Car>
        <Car>
          <CarImage src={carImg} />
          <CarDetails>
            <Service> Uber-X</Service>
            <Time> 5 min away</Time>
          </CarDetails>
          <Price>
            {' '}
            {`$ ${(rideDuration * 2.4).toFixed(2)}`}
          </Price>
        </Car>
        <Car>
          <CarImage src={carImg} />
          <CarDetails>
            <Service> Uber-X</Service>
            <Time> 5 min away</Time>
          </CarDetails>
          <Price>
            {' '}
            {`$ ${(rideDuration * 2.4).toFixed(2)}`}
          </Price>
        </Car>
      </CarList>
    </Wrapper>
  );
}

const Price = tw.div`
text-md`;
const Time = tw.div`
text-xs text-blue-500`;
const Service = tw.div`
font-medium`;
const CarDetails = tw.div`
flex-1
`;
const CarImage = tw.img`h-14 mr-2`;

const Car = tw.div`flex p-4 items-center`;

const Wrapper = tw.div`
flex-1
`;
const Title = tw.div`
`;
const CarList = tw.div``;
export default RideSelector;
