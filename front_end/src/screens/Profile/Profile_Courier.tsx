import { IonButton, IonContent, IonIcon, IonPage, IonText, IonTitle } from '@ionic/react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import { getCurrentUser } from '../../services/auth.service';
import { getReceiver, updateReceiver } from '../../services/receiver.service';


import './Profile.css';
import { informationCircle, pencil, save } from 'ionicons/icons';
import { addAddress, getAddress, updateAddress } from '../../services/address.service';
import { getCourier, updateCourier } from '../../services/courier.service';

const Profile_Courier: React.FC = () => {
  const currentUser = getCurrentUser();

  const [userdata, setData] = useState<any>({});

  const [address, setAddress] = useState<any>({});

  // Simple but it works can be moved to cetral control place use a state management lib
  // Redux Saga
  useEffect(() => {

    // Create an scoped async function in the hook
    async function getData() {
      const courier = await getCourier();
      setData(courier.data);

      const address = await getAddress();
      setAddress(address.data);
      console.log(address.data)
    }

    // Execute the created function directly
    if (currentUser.roles) {
      getData();
    }
  }, []);

  {/* ___________________ Display _______________ */ }

  const [edit, setEdit] = useState<Boolean>(false);

  const handleSetEdit = () => {
    setEdit(!edit)
  }

  const initialValues: any = {
    first_name: userdata.first_name ? userdata.first_name : "",
    last_name: userdata.last_name ? userdata.last_name : "",
    number_of_deliveries: userdata.number_of_deliveries ? userdata.number_of_deliveries : 0,
    availability: userdata.availability ? userdata.availability : false,
    address: address.address ? address.address : "",
    address_line_2: address.address_line_2 ? address.address_line_2 : "",
    city: address.city ? address.city : "",
    state: address.state ? address.state : "",
    zip_code: address.zip ? address.zip : "",
    phone: "",
    email: currentUser.email,
  };

  const validationSchema = Yup.object().shape({
  });


  const handleSubmit = (formValue: any) => {
    const courier_post_values = {
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      number_of_deliveries: formValue.number_of_deliveries,
      availability: formValue.availability,
    };

    const address_post_values = {
      address: formValue.address,
      address_line_2: formValue.address_line_2,
      city: formValue.city,
      state: formValue.state,
      zip: formValue.zip_code,
      country: "US",
      location_name: "Primary"
    };

    console.log(address_post_values)

    updateAddress(address_post_values)
      .catch((err) => {
        if (err.response.status === 404) {
          console.log(err)
          addAddress(address_post_values)
        }
      }).then(() => {
        updateCourier(courier_post_values).then(() => {

          window.location.reload();
        })
      })





  }

  return (
    <IonPage>

      <Menu></Menu>

      {/* New  */}
      <IonContent>
        <Formik initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          // enableReintialize={true}
          onSubmit={
            values => {
              handleSubmit(values)
            }
          }
        >
          {(formikProps) => {
            const { values, handleChange } = formikProps;
            return (
              <Form>
                {/* ___________________ Profile _______________ */}
                <div className="profile_grid">

                  {/* Banner */}
                  <div className="input_div whole profile_top ">
                    <div className='profile_title_text'>
                      <h1 className="profile_title">Profile</h1>
                    </div>
                    <div className="profile_title">
                      {edit === !true
                        ?
                        <IonButton onClick={handleSetEdit}>
                          Edit
                          <IonIcon slot="start" icon={pencil}></IonIcon>
                        </IonButton>
                        :


                        <IonButton type="submit">
                          <input type="submit" className="x-display" />
                          Save
                          <IonIcon slot="start" icon={save}></IonIcon>
                        </IonButton>

                      }

                    </div>
                  </div>
                  {/* Personal Info */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Personal Information</IonText>
                      </div>
                    </div>

                    {/* First Name */}
                    <div className="input_div one_3rd">

                      <div className="label_div">
                        <label htmlFor="fist_name" className="label">First Name</label>
                      </div>
                      {edit === true ?
                        <Field
                          name="first_name"
                          type="text"
                          autoComplete="off"
                          className="input_field"
                        />
                        :
                        values.first_name
                      }

                    </div>

                    {/* Last Name */}
                    <div className="input_div one_3rd_2">

                      <div className="label_div">
                        <label htmlFor="last_name" className="label">Family Name</label>
                      </div>
                      {edit === true ?
                        <Field
                          name="last_name"
                          type="text"
                          autoComplete="off"
                          className="input_field"
                        />
                        :
                        values.last_name
                      }
                    </div>

                    {/* number_of_deliveries */}
                    <div className="input_div one_3rd_4">

                      <div className="label_div">
                        <label htmlFor="number" className="label"># of Deliverier</label>
                      </div>

                      {values.number_of_deliveries}

                    </div>

                    {/* Availability */}
                    <div className="input_div one_3rd_5">

                      <div className="">
                        <Field type="checkbox" name="availability" id="availability" className="" disabled={edit === !true && "disabled"} />
                        <label htmlFor="availability" className="label_cehckbox">Availability</label>
                      </div>
                    </div>
                  </>

                  {/* Address Info */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Address</IonText>
                      </div>
                    </div>

                    {/* street */}
                    <div className="input_div first_half">

                      <div className="label_div">
                        <label htmlFor="address" className="label">Street Address</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="address"
                          type="text"
                          autoComplete="address-line1"
                          className="input_field"
                          placeholder="Street Address"
                        />
                        :
                        values.address
                      }
                    </div>

                    {/* address line 2 */}
                    <div className="input_div second_half">

                      <div className="label_div">
                        <label htmlFor="address_line_2" className="label">Address Line 2</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="address_line_2"
                          type="text"
                          autoComplete="address-line2"
                          className="input_field"
                          placeholder="Address Line 2"
                        />
                        :
                        values.address_line_2
                      }
                    </div>

                    {/* City */}
                    <div className="input_div one_3rd">

                      <div className="label_div">
                        <label htmlFor="city" className="label">City</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="city"
                          type="text"
                          autoComplete="address-level2"
                          className="input_field"
                          placeholder="City"
                        />
                        :
                        values.city
                      }
                    </div>

                    {/* State */}
                    <div className="input_div one_3rd_2">

                      <div className="label_div">
                        <label htmlFor="state" className="label">State</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="state"
                          type="text"
                          autoComplete="address-level1"
                          className="input_field"
                          placeholder="State"
                        />
                        :
                        values.state
                      }
                    </div>

                    {/* Zip code */}
                    <div className="input_div one_3rd_3">
                      <div className="label_div">
                        <label htmlFor="zip_code" className="label">Zip code</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="zip_code"
                          type="text"
                          autoComplete="postal-code"
                          className="input_field"
                          placeholder="Zip Code"
                        />
                        :
                        values.zip_code
                      }
                    </div>
                  </>

                  {/* Contact Info */}
                  <>
                    <div className="input_div whole">
                      <div className="section_title_div">
                        <IonText className="section_title">Contact Information</IonText>
                      </div>
                    </div>


                    {/* Phone */}
                    <div className="input_div first_half">
                      <div className="label_div">
                        <label htmlFor="zip_code" className="label">Phone Number</label>
                      </div>

                      {edit === true ?
                        <Field
                          name="phone"
                          type="text"
                          autoComplete="on"
                          className="input_field"
                          placeholder="Phone #"
                        />
                        :
                        values.phone
                      }
                    </div>

                    {/* Email */}
                    <div className="input_div second_half">
                      <div className="label_div">
                        <label htmlFor="address" className="label">Email Address</label>
                      </div>
                      {values.email}
                    </div>

                  </>

                </div>
              </Form>
            );
          }}
        </Formik>
      </IonContent>
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};
export default Profile_Courier;