import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonPage, IonRow, IonText, IonTitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import makeDateNice from '../../common/DataFormat';
import FoodItem from '../../components/food_item/FoodItem';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import UserMap from '../MapNav/Map';
import Geocode from "react-geocode";

import './ReceiverList.css'
import MapReceiver from './MapReceiver';
import { getAllReceiver } from '../../services/receiver.service';

const ReceiverList: React.FC = () => {

  const [receivers, setReceivers] = useState([])
  const [receiversCord, setReceiversCors] = useState([])

  useEffect(() => {
    getAllReceiver().then(async (res: any) => {
      const cordArray: any = []
      const data = res.data
      setReceivers(data)
      console.log(data)
      data.map((receiver: any) => {
        const easy = receiver.User.Addresses[0]
        let addressConstruct
        addressConstruct = easy.address + ", " + easy.city + ", " + easy.state
        

        // console.log(addressConstruct)
        cordArray.push(addressConstruct)
      })

      setReceiversCors(cordArray)
    })
  }, [])

  // console.log(receiversCord)
  console.log(receivers)

  return (
    <IonPage>
      <Menu></Menu>

      <IonContent >

        <IonGrid className='w_100_h_100'>

          <IonRow className='w_100_h_100'>

            <IonCol size="12" size-md="5" size-lg="4" className='w_100_h_100'>
              <div className='w_100_h_100' style={{ overflow: 'auto' }}>
                {receivers.map((receiver: any, index) => {
                  return (
                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>{receiver.first_name}</IonCardTitle>
                        <IonCardSubtitle>{receiver.last_name}</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>
                        {receiversCord[index]}
                      </IonCardContent>
                    </IonCard>
                  );
                })}

              </div>

            </IonCol>


            <IonCol size="12" size-md="7" size-lg="8" className='w_100_h_100'>
              <div className='w_100_h_100'>
                {(receivers !== undefined) 
                && (receiversCord !== undefined) 
                && (receiversCord.length > 0) 
                && (receivers.length > 0) 
                && <MapReceiver receivers={receivers} receiversCord={receiversCord}></MapReceiver>
                }

              </div>
            </IonCol>

          </IonRow>
        </IonGrid>
      </IonContent>


      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage >
  );
};

export default ReceiverList;
