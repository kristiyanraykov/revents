import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';
import TestMap from './TestMap';
import TestPlaceInput from './TestPlaceInput';
import { decrement, increment } from './testReducer';

function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const [location, setLocation] = useState(defaultProps)

  function handleSetLocation(latLng) {
    setLocation({...location, center: {lat: latLng.lat, lng: latLng.lng}})
  }
  return (
    <div>
      <h1>Testing 1,2,3</h1>
      <h3>The data is : {data}</h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content='increment'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content='decrement'
        color='red'
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
        content='Open Modal'
        color='teal'
      />
      <div style={{marginTop: 15}}>
        <TestPlaceInput setLocation={handleSetLocation}/>
        <TestMap location={location}/>
      </div>
    </div>
  );
}

export default Sandbox;
