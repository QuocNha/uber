import tw from 'tailwind-styled-components';

function RideSelector() {
  const carImg = 'https://i.ibb.co/cyvcpfF/uberx.png';
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
          <Price> $24.00</Price>
        </Car>
        <Car>
          <CarImage src={carImg} />
          <CarDetails>
            <Service> Uber-X</Service>
            <Time> 5 min away</Time>
          </CarDetails>
          <Price> $24.00</Price>
        </Car>
        <Car>
          <CarImage src={carImg} />
          <CarDetails>
            <Service> Uber-X</Service>
            <Time> 5 min away</Time>
          </CarDetails>
          <Price> $24.00</Price>
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
