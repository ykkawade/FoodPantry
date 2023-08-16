import React, { useEffect, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import home from '../../assets/map/home.png';
import person from '../../assets/map/person.png';
import * as AuthService from '../../services/auth.service';
import Geocode from "react-geocode";
import { getAddress } from '../../services/address.service';

const MapReceiver = (props: any) => {

    const [userLat, setUserLat] = useState<number>()
    const [userLong, setUserLong] = useState<number>()

    const [receiversCordVal, setReceiversCordVal] = useState<any>()

    

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

        const arr: any = []

        props.receiversCord.map((add: any) => {
            Geocode.fromAddress(add).then(
                (response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    const out = { lat, lng }
                    return out
                }
            ).then((out) => {arr.push(out)})
        })

        setReceiversCordVal(arr)

        


    }, [props])

    console.log(receiversCordVal)
    // setup map
    const mapRef = useRef();

    const user = AuthService.getCurrentUser();


    const renderMarker = (map: any, maps: any) => {
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

            {userLat !== undefined && userLong !== undefined && receiversCordVal !== undefined && receiversCordVal.length > 0 &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: (process.env.REACT_APPKEY as string) }} // My Google API is stored in the .env file in front-end
                    center={{ lat: userLat, lng: userLong }}

                    defaultZoom={12}
                    zoom={15}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) => {
                        mapRef.current = map;
                        renderMarker(map, maps)
                        { receiversCordVal &&
                            receiversCordVal.map((marker: any, index: any) => {
                                return new maps.Marker({
                                    position: { lat: marker.lat, lng: marker.lng },
                                    map,
                                    icon: home,
                                    title: props.receivers[index].first_name  + " " + props.receivers[index].last_name
                                });
                            })
                        }
                    }}
                >


                </GoogleMapReact>
            }
        </div>
    );
}

export default MapReceiver;