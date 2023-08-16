// imports external libs
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonAvatar,
  IonText,
} from '@ionic/react';
import { useState } from 'react';

// my components
import FoodItem from '../food_item/FoodItem';

// interfaces
import Food_Package_Interface from './FoodPackageinterface';

// css import
import './FoodPackage.css';
import makeDateNice from '../../common/DataFormat';
import { Link } from 'react-router-dom';

const FoodPackage: React.FC<Food_Package_Interface> = (props) => {
  const {
    donor_name,
    image,
    backgroundImage,
    items,
    comment,
    status,
    package_type,
    package_id,
    package_description,
    location,
    date_for_pickup
  } = props;
  const [seeMoreItems, setseeMoreItems] = useState(false);

  const foodPackage = {
    donor_name,
    image,
    backgroundImage,
    items,
    comment,
    status,
    package_type,
    package_id,
    package_description,
    location,
    date_for_pickup
  }

  //fucntion used to hide item details
  function toggleSeeMoreButton() {
    setseeMoreItems(!seeMoreItems);
  }

  return (
    <IonCard className="packageCard">
      <IonCardHeader
        className="cardHeader"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.3)) ,url(${backgroundImage})` }}
      >
        <IonAvatar>
          <img src={image} alt={donor_name}></img>
        </IonAvatar>

        <IonCardTitle className="restaurantName text-md-minus text-heavy text-light">
          <div className="section_title_div" id="packageDescription">
            <IonText className="section_title" style={{ fontSize: "1.5rem" }}>{donor_name}</IonText>
          </div>
        </IonCardTitle>

      </IonCardHeader>

      <IonCardContent id="packageContent">
        <div className="section_title_div" id="packageDescription">
          <IonText className="section_title" style={{ fontSize: "1rem" }}>{package_description}</IonText>
        </div>
        <div className="section_title_div">

          Pick Up Date and Time: {makeDateNice(date_for_pickup)}
          <br />
          Location: {location}
        </div>
        <div id="allergensDiv">
          <IonButton
            className="pantry-btton"
            id="seeMoreButton"
            expand="block"
            onClick={toggleSeeMoreButton}
            hidden={seeMoreItems}
          >
            Show Items
          </IonButton>
        </div>
      </IonCardContent>

      <IonCardContent id="itemContent" hidden={!seeMoreItems}>
        {items.map((item, index) => {
          return <FoodItem {...item} key={index}></FoodItem>;
        })}

        <div className="itemButtonGrid">

          <Link
            style={{ width: 'max-content', height: 'min-content', padding: 0, margin: "auto 0" }}
            className="pantry-btton"
            to={{
              pathname: `/offer/${package_id}`,
              state: {
                foodPackage: foodPackage,
              },
            }}
          >
            <IonButton
              className="pantry-btton"
              id="selectButton"
              style={{
                width: 'max-content', padding: 0, margin: "auto"
              }}>
              Select
            </IonButton>
          </Link>

          <IonButton
            id="seeItemsButton"
            className="openSeeItemsModal pantry-btton"
            onClick={toggleSeeMoreButton}
            style={{ width: 'max-content', padding: 0, margin: "0 0 0 auto" }}
          >
            Close
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default FoodPackage;
