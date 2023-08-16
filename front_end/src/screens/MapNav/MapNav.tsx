import React, { useEffect, useState } from 'react';

import { IonPage, IonTitle } from '@ionic/react';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import UserMap from './Map';
import Map_Simple from './Map_Simple';

interface PlacesProps {
  city: string;
  state: string;
  postCode: string
}

const MapNav: React.FC = (props: any) => {

  // Get Location geoData
  /*********************************************************************************/
  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // };
  // function success(pos: any) {
  //   const crd = pos.coords;
  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  // }
  // function error(err: any) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }
  // navigator.geolocation.getCurrentPosition(success, error, options);
  /*********************************************************************************/

  const [lat, setLat] = useState<number>()
  const [long, setLong] = useState<number>()

  const [placesObj, setPlacesObj] = useState<PlacesProps>({ city: "", state: "", postCode: "" })

  const handleSrState = (name: string, value: string, setState: Function) => {
    setState((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

  /*********************************************************************************/

  return (
    <IonPage>
      <Menu></Menu>
      {/* <IonTitle>Map</IonTitle> */}
      <div style={{ width: "100%", height: "100%" }}>
      <Map_Simple userLat={lat} userLong={long}></Map_Simple> 
      </div>

      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );

};

export default MapNav;



