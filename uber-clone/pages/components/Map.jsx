import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
// eslint-disable-next-line
import mapBoxGL from '!mapbox-gl';

function Map() {
  mapBoxGL.accessToken = 'pk.eyJ1IjoibmhhZGFuZyIsImEiOiJjbDM0YWNkdTUwOHltM2NrNzdmbGxxYWdwIn0.b5P79zROMS--ysXXWhzrhA';
  useEffect(() => {
    const map = new mapBoxGL.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });
  return (
    <Wrapper id="map"> </Wrapper>
  );
}
export default Map;

const Wrapper = tw.div`
bg-red-300 flex-1
`;
