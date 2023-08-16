import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import makeDateNice from '../../common/DataFormat';
import FoodItem from '../../components/food_item/FoodItem';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import UserMap from '../MapNav/Map';
import Geocode from "react-geocode";

import './Offer.css'
import { getAddress } from '../../services/address.service';

type OfferParams = {
  id: string;
};

interface LocationState {
  foodPackage: any;
}

interface PlacesProps {
  city: string;
  state: string;
  postCode: string
}

const Offer: React.FC = () => {

  const { id } = useParams<OfferParams>();
  const location = useLocation<LocationState>()
  const { foodPackage } = location.state || {};

  console.log(foodPackage)

  const [seeMoreItems, setseeMoreItems] = useState(false);
  //fucntion used to hide item details

  return (
    <IonPage>
      <Menu></Menu>

      {foodPackage &&
        <IonContent >

          <IonGrid className='w_100_h_100'>

            <IonRow className='w_100_h_100'>

              <IonCol size="12" size-md="5" size-lg="4" className='w_100_h_100'>

                <div
                  className=' offer_package'
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: 0
                  }}
                >
                  <div
                    style={{
                      // height: "15%"
                    }}>
                    <IonCardHeader
                      className="cardHeader"
                      style={{
                        padding: 8,
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.3)) ,url(${foodPackage.backgroundImage})`
                      }}
                    >
                      <IonAvatar>
                        <img src={foodPackage.image} alt={foodPackage.donor_name}></img>
                      </IonAvatar>
                      <IonCardTitle className="restaurantName text-md-minus text-heavy text-light">
                        <div className="section_title_div" id="packageDescription">
                          <IonText className="section_title" style={{ fontSize: "1.5rem" }}>{foodPackage.donor_name}</IonText>
                        </div>
                      </IonCardTitle>
                    </IonCardHeader>
                  </div>

                  <div
                    style={{
                      // height: "0%",
                      overflow: 'auto'
                    }}
                  >
                    <IonCardContent id="packageContent">
                      <div className="section_title_div" id="packageDescription">
                        <IonText className="section_title" style={{ fontSize: "1rem" }}>{foodPackage.package_description}</IonText>
                      </div>
                      <div className="section_title_div">
                        Pick Up Date and Time: {makeDateNice(foodPackage.date_for_pickup)}
                        <br />
                        Location: {foodPackage.location}
                      </div>
                    </IonCardContent>



                    {foodPackage.items.map((item: any, index: any) => {
                      return <FoodItem {...item} key={index}></FoodItem>;
                    })}

                  </div>
                  <div style={{
                    margin: "auto",
                    padding: 4
                  }}>
                    <IonButton
                      href="/ReceiverList"
                      className="pantry-btton"
                      id="selectButton"
                      
                    >
                      Select
                    </IonButton>
                  </div>
                </div>
              </IonCol>


              <IonCol size="12" size-md="7" size-lg="8" className='w_100_h_100'>
                <div className='w_100_h_100'>

                    <UserMap foodPackage={foodPackage} title={`${foodPackage.donor_name}: ${foodPackage.location}`}></UserMap>


                </div>
              </IonCol>

            </IonRow>
          </IonGrid>
        </IonContent>
      }

      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage >
  );
};

export default Offer;
