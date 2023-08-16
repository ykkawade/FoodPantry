import React, { useEffect, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import food from '../../assets/map/food.png';
import person from '../../assets/map/person.png';
import * as AuthService from '../../services/auth.service';
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
// setup map
const mapRef = useRef();
    const [userLat, setUserLat] = useState<number>()
    const [userLong, setUserLong] = useState<number>()

    useEffect(() => {

        Geocode.setApiKey(process.env.REACT_APIKEY);
        Geocode.setLanguage("en");
        Geocode.setRegion("us");
        Geocode.setLocationType("ROOFTOP");
        Geocode.enableDebug();
    
    
        getAddress().then(async (res) => {
          const data = res.data
          const addressConstruct = data.address + ", " + data.city + ", " + data.state
    
          await Geocode.fromAddress(addressConstruct).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              setUserLat(lat)
            setUserLong(lng)
            }
          )
    
        })
    
      }, [mapRef])
    

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

    return (
        <div className="user-map" style={{ height: '100%', width: '100%' }}>

            {(userLat !== undefined && userLong !== undefined) &&
            
                <GoogleMapReact
                    bootstrapURLKeys={{ key: (process.env.REACT_APPKEY as string) }} // My Google API is stored in the .env file in front-end
                    center = {{ lat: userLat, lng: userLong }}

                    defaultZoom={10}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) => {
                      console.log(userLat)
                      console.log(userLong)
                        renderMarker(map, maps)
                        mapRef.current = map;
                    }}
                >
                  
                </GoogleMapReact>
            }
        </div>
    );
}

export default UserMap;