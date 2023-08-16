import React, { useEffect, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import food from '../../assets/map/food.png';
import person from '../../assets/map/person.png';
import * as AuthService from '.././../services/auth.service';
import Geocode from "react-geocode";
import { getAddress } from '../../services/address.service';
interface UserMapProps {
  center: {
    lat: number,
    lng: number
  },
  zoom: number
}


const UserMap = (props: any) => {

  const [donorLat, setDonorLat] = useState<number>()
  const [donorLong, setDonorLong] = useState<number>()

  const [userLat, setUserLat] = useState<number>()
  const [userLong, setUserLong] = useState<number>()

  const [address, setAddress] = useState<any>()

  useEffect(() => {

    Geocode.setApiKey(process.env.REACT_APIKEY);
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();


    getAddress().then((res) => {
      const data = res.data
      const addressConstruct = data.address + ", " + data.city + ", " + data.state


      Geocode.fromAddress(props.foodPackage.location).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          const v = [lat, lng]
          return v
        },
        (error) => {
          // console.error(error);
        }
      ).then((v: any) => {
        setDonorLat(v[0])
        setDonorLong(v[1])
      });

      Geocode.fromAddress(addressConstruct).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          const v = [lat, lng]
          return v
        },
        (error) => {
          // console.error(error);
        }
      ).then((v: any) => {
        setUserLat(v[0])
        setUserLong(v[1])
      });

    })

  }, [props])

  console.log(props)
  // setup map
  const mapRef = useRef();

  const user = AuthService.getCurrentUser();


  const renderMarker = (map: any, maps: any) => {
    const image = '/static/media/food.png'
    let marker = new maps.Marker({
      position: { lat: userLat, lng: userLong },
      map,
      title: user.email,
      icon: person,
    });
    return marker;
  };

  const renderPerson = (map: any, maps: any) => {
    const image = '/static/media/food.png'
    let marker = new maps.Marker({
      position: { lat: donorLat, lng: donorLong },
      map,
      title: props.title,
      icon: food,
    });
    return marker;
  };

  return (
    <div className="user-map" style={{ height: '100%', width: '100%' }}>

      {userLat !== undefined && userLong !== undefined && donorLat !== undefined && donorLong !== undefined &&
        <GoogleMapReact
          bootstrapURLKeys={{ key: (process.env.REACT_APPKEY as string) }} // My Google API is stored in the .env file in front-end
          center={{ lat: userLat, lng: userLong }}

          defaultZoom={10}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => {
            mapRef.current = map;
            renderMarker(map, maps)
            renderPerson(map, maps)
          }}
        >

        </GoogleMapReact>
      }
    </div>
  );
}

export default UserMap;