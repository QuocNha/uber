import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
// eslint-disable-next-line
import mapBoxGL from '!mapbox-gl';

function Map(props) {
  const { pickUpCoordinates, propOffCoordinates } = props;
  mapBoxGL.accessToken = 'pk.eyJ1IjoibmhhZGFuZyIsImEiOiJjbDM0YWNkdTUwOHltM2NrNzdmbGxxYWdwIn0.b5P79zROMS--ysXXWhzrhA';
  const addToMap = (map, coordinates) => {
    const marker1 = new mapBoxGL.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  };
  useEffect(() => {
    const map = new mapBoxGL.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
    if (pickUpCoordinates) {
      addToMap(map, pickUpCoordinates);
    }
    if (propOffCoordinates) {
      addToMap(map, propOffCoordinates);
    }
    if (pickUpCoordinates && propOffCoordinates) {
      map.fitBounds([
        ...pickUpCoordinates, // southwestern corner of the bounds
        ...propOffCoordinates, // northeastern corner of the bounds
      ], { padding: 60 });
    }

    // Create a default Marker and add it to the map.
  }, [pickUpCoordinates, propOffCoordinates]);

  return (
    <Wrapper id="map"> </Wrapper>
  );
}
export default Map;

const Wrapper = tw.div`
bg-red-300 flex-1
`;
