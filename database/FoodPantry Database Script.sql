SHOW DATABASES;
CREATE DATABASE FOODPANTRY;
USE FOODPANTRY;
SHOW TABLES;

#DROP DATABASE FOODPANTRY;

#CREATION OF TABLES

#USERS TABLE
create table USERS(
User_ID varchar(10) NOT NULL,
email varchar(32) NOT NULL,
password varchar(15) NOT NULL,
bio varchar(150),
activity_status boolean NOT NULL,
date_created timestamp NOT NULL
);

#ROLE TABLE
create table ROLES(
Role_ID varchar(10) NOT NULL,
user_type varchar(20) NOT NULL,
User_ID varchar(10) NOT NULL
);


#ADDRESS TABLE
create table ADDRESS(
Address_ID varchar(10) NOT NULL,
address varchar(60) NOT NULL,
city varchar(20) NOT NULL,
state varchar(20) NOT NULL,
zip INTEGER NOT NULL,
country varchar(20) NOT NULL,
location_name varchar(30) NOT NULL,
primary_address boolean NOT NULL,
User_ID varchar(10) NOT NULL
);

#CONTACT TABLE
create table CONTACT(
Contact_ID varchar(10) NOT NULL,
country_code INTEGER NOT NULL,
phone_number varchar(10) NOT NULL,
primary_number boolean NOT NULL,
User_ID varchar(10) NOT NULL
);

#MONEY_DONATION TABLE
create table MONEY_DONATION(
Money_Order_ID varchar(15) NOT NULL,
payment_type varchar(10) NOT NULL,
amount FLOAT NOT NULL,
date_of_donation DATETIME NOT NULL,
date_processed_by DATETIME NOT NULL,
User_ID varchar(10) NOT NULL
);

#RECEIVER TABLE
create table RECEIVER(
Receiver_ID varchar(10) NOT NULL,
firstname varchar(15) NOT NULL,
lastname varchar(15) NOT NULL,
number_of_requests INTEGER NOT NULL,
vegan BOOLEAN NOT NULL,
vegetarian BOOLEAN NOT NULL,
kosher BOOLEAN NOT NULL,
celiac_disease BOOLEAN NOT NULL,
number_of_receivered_deliveries INTEGER NOT NULL,
peanut_allergy BOOLEAN NOT NULL,
diary_allergy BOOLEAN NOT NULL,
fish_allergy BOOLEAN NOT NULL,
egg_allergy BOOLEAN NOT NULL,
TimeFrameReceiving_start TIME NOT NULL,
TimeFrameReceiving_end TIME NOT NULL,
User_ID varchar(10) NOT NULL
);

#COURIER TABLE
create table COURIER(
Courier_ID varchar(10) NOT NULL,
firstname varchar(15) NOT NULL,
lastname varchar(15) NOT NULL,
availability BOOLEAN NOT NULL,
number_of_deliveries INTEGER NOT NULL,
User_ID varchar(10) NOT NULL
);

#DONOR TABLE
create table DONOR(
Donor_ID varchar(10) NOT NULL,
company_name varchar(30) NOT NULL,
business_type varchar(20) NOT NULL,
number_of_donation INTEGER NOT NULL,
User_ID varchar(10) NOT NULL
);

#ITEM TABLE
create table ITEM(
Item_ID varchar(20) NOT NULL,
item_name varchar(25) NOT NULL,
peanut_preferences BOOLEAN NOT NULL,
diary_preferences BOOLEAN NOT NULL,
fish_preferences BOOLEAN NOT NULL,
egg_preferences BOOLEAN NOT NULL,
best_before_date DATETIME NOT NULL,
quantity INTEGER NOT NULL,
perishable_status BOOLEAN NOT NULL,
weight FLOAT NOT NULL,
Package_ID varchar(20) NOT NULL
);

#PACKAGE TABLE
create table PACKAGE(
Package_ID varchar(20) NOT NULL,
package_description varchar(150) NOT NULL,
package_type varchar(10) NOT NULL,
date_for_pickup DATETIME NOT NULL,
status varchar(15) NOT NULL,
location varchar(45) NOT NULL,
Comment varchar(150),
donor_ID varchar(10) NOT NULL,
courier_ID varchar(10) NOT NULL,
receiver_ID varchar(10) NOT NULL
);

#FEEDBACK TABLE
create table FEEDBACK(
Feedback_ID varchar(10) NOT NULL,
rating INTEGER NOT NULL,
comment varchar(150),
timestamp DATETIME NOT NULL,
Package_ID varchar(20) NOT NULL,
User_ID varchar(10) NOT NULL
);


#-------------PRIMARY KEY--------
#PRIMARY KEY (USERS)
ALTER TABLE USERS
ADD CONSTRAINT PK_USERS PRIMARY KEY (User_id);
#PRIMARY KEY (ADDRESS)
ALTER TABLE ADDRESS
ADD CONSTRAINT PK_ADDRESS PRIMARY KEY (Address_id);
#PRIMARY KEY (ROLES)
ALTER TABLE ROLES
ADD CONSTRAINT PK_ROLES PRIMARY KEY (Role_id);
#PRIMARY KEY (CONTACT)
ALTER TABLE CONTACT
ADD CONSTRAINT PK_CONTACT PRIMARY KEY (Contact_id);
#PRIMARY KEY (MONEY_DONATION)
ALTER TABLE MONEY_DONATION
ADD CONSTRAINT PK_MONEY_DONATION PRIMARY KEY (Money_Order_id);
#PRIMARY KEY (RECEIVER)
ALTER TABLE RECEIVER
ADD CONSTRAINT PK_RECEIVER PRIMARY KEY (Receiver_id);
#PRIMARY KEY (COURIER)
ALTER TABLE COURIER
ADD CONSTRAINT PK_COURIER PRIMARY KEY (Courier_id);
#PRIMARY KEY (DONOR)
ALTER TABLE DONOR
ADD CONSTRAINT PK_DONOR PRIMARY KEY (Donor_id);
#PRIMARY KEY (ITEM)
ALTER TABLE ITEM
ADD CONSTRAINT PK_ITEM PRIMARY KEY (Item_id);
#PRIMARY KEY (PACKAGE)
ALTER TABLE PACKAGE
ADD CONSTRAINT PK_PACKAGE PRIMARY KEY (Package_id);
#PRIMARY KEY (FEEDBACK)
ALTER TABLE FEEDBACK
ADD CONSTRAINT PK_FEEDBACK PRIMARY KEY (Feedback_id);


#-------------FOREIGN KEY---------
#FOREIGN KEY (ADDRESS(User_ID))
ALTER TABLE ADDRESS
     ADD CONSTRAINT fk_ADDRESS
     FOREIGN KEY (User_ID)
     REFERENCES USERS(User_ID);
     
#FOREIGN KEY (ROLES(User_ID))
ALTER TABLE ROLES
     ADD CONSTRAINT fk_ROLES
     FOREIGN KEY (User_ID)
     REFERENCES USERS(User_ID);
     
#FOREIGN KEY (CONTACT(User_ID))
ALTER TABLE CONTACT
     ADD CONSTRAINT fk_CONTACT
     FOREIGN KEY (User_ID)
     REFERENCES USERS(User_ID);

#FOREIGN KEY (MONEY_DONATION(User_ID))
ALTER TABLE MONEY_DONATION
     ADD CONSTRAINT fk_MONEY_DONATION
     FOREIGN KEY (User_ID)
     REFERENCES USERS(User_ID);

#FOREIGN KEY (COURIER(User_ID))
ALTER TABLE COURIER
     ADD CONSTRAINT fk_COURIER
     FOREIGN KEY (User_ID)
     REFERENCES USERS(User_ID);
     
#FOREIGN KEY (RECEIVER(User_ID))
ALTER TABLE RECEIVER
     ADD CONSTRAINT fk_RECEIVER
     FOREIGN KEY (User_ID)
     REFERENCES USERS(User_ID);

#FOREIGN KEY (DONOR(User_ID))
ALTER TABLE DONOR
     ADD CONSTRAINT fk_DONOR
     FOREIGN KEY (User_ID)
     REFERENCES USERS(User_ID);

#FOREIGN KEY (ITEM(Package_ID))
ALTER TABLE ITEM
     ADD CONSTRAINT fk_ITEM
     FOREIGN KEY (Package_ID)
     REFERENCES PACKAGE(Package_ID);
     
#FOREIGN KEY (PACKAGE(Donor_ID))
ALTER TABLE PACKAGE
     ADD CONSTRAINT fk_PACKAGE_DONOR
     FOREIGN KEY (Donor_ID)
     REFERENCES DONOR(Donor_ID);

#FOREIGN KEY (PACKAGE(Courier_ID))
ALTER TABLE PACKAGE
     ADD CONSTRAINT fk_PACKAGE_COURIER
     FOREIGN KEY (Courier_ID)
     REFERENCES COURIER(Courier_ID);
     
#FOREIGN KEY (PACKAGE(Receiver_ID))
ALTER TABLE PACKAGE
     ADD CONSTRAINT fk_PACKAGE_RECEIVER
     FOREIGN KEY (Receiver_ID)
     REFERENCES RECEIVER(Receiver_ID);
     
#FOREIGN KEY (FEEDBACK(User_ID))
ALTER TABLE FEEDBACK
     ADD CONSTRAINT fk_FEEDBACK
     FOREIGN KEY (User_ID)
     REFERENCES USERS(User_ID);
     
#--------DESCRIBE TABLES----------
describe USERS; 
describe ADDRESS;
describe CONTACT;
describe MONEY_DONATION;
describe COURIER;
describe RECEIVER;
describe DONOR;
describe ITEM;
describe PACKAGE;
describe FEEDBACK;

