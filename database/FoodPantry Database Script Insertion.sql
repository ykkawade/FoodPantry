SHOW DATABASES;
USE FOODPANTRY;
SHOW TABLES;

#USER DATA
insert into  USERS values
('us32102627','steak@keens.com','helloworld','Keens Steakhouse is a steakhouse restaurant located at 72 West 36th Street in the Garment District in Manhattan, New York City. ',1,	'2021/5/5 12:23:45'),
  ('us17493908','customerservice@dunkinbrands.com','password1234','Dunkin'' and by the initials DD, is an American multinational coffee and doughnut company,',1,'2020/4/11 5:21:20'),
  ('us66479066','pizza@joes.com','33442255','Established in 1975 by Joe Pozzuoli, who is originally from Naples','1','2021/5/29 3:42:43'),
  ('us41155006','sandwich@subway.com','rustysandwich','Subway is an American multi-national fast food restaurant franchise that primarily sells submarine sandwiches, wraps, salads and beverages.',1,'2021/8/19 11:25:32'),
  ('us90323876','burger@mcdonald.com','ilovenewyork','McDonald''s is an American multinational fast food corporation, founded in 1940 as a restaurant operated by Richard and Maurice McDonald',1,'2021/11/17 7:00:21'),
  ('us85964498','info@starr-restaurants.com','987654321','High-end American fare in a posh, clubby setting with dining rooms & a lounge with a pool table',0,'2020/10/13 4:03:10'),
  ('us67413640','johnwick@gmail.com','kingkong69?','Exceptionally hardworking and reliable Volunteer with an excellent work ethic and strong customer and community service record.',1,'2020/7/15 8:34:06'),
  ('us35356031','jackreacher@yahoo.com','finedinewine','Hardworking and reliable licensed Phlebotomist proficient in all phlebotomy techniques, universal precautions, and sterilization protocols.',1,'2021/8/7 2:30:20'),
  ('us68926720','susanbones@gmail.com','33fishpeople','I come from a poor family and recently lost my house to a natural disaster',1,'2020/10/12 6:00:00'),
  ('us81781770','davidharris@gmail.com','erdo574ad!$','Lost job due to covid-19 and landed on the streets with my kid',1,'2021/4/13 9:59:30'),
  ('us76918477','tonystark@starkindustries.com','takemymoney','Genius, Billionaire, Philanthropist. Owner of Stark Industries',0,'2021/11/17 7:00:21'),
  ('us95505203','brucewayne@wayneenterprises.com','bigpocket24!','The American diversified multinational conglomerate is owned and chaired by Bruce Wayne, the son of Thomas and Martha Wayne. ',1,'2021/5/29 3:42:43');


#ROLES DATA
insert into ROLES values
  ('ro23749468','Donor','us32102627'),
  ('ro17701124','Donor','us17493908'),
  ('ro97424740','Donor','us66479066'),
  ('ro95149842','Donor','us41155006'),
  ('ro81005682','Donor','us90323876'),
  ('ro08243110','Donor','us85964498'),
  ('ro93159635','Courier','us67413640'),
  ('ro72294236','Courier','us35356031'),
  ('ro30926699','Receiver','us68926720'),
  ('ro84033180','Receiver','us81781770'),
  ('ro62225711','Money Donor','us76918477'),
  ('ro10016117','Money Donor','us95505203');
  
  
#ADDRESS DATA
insert into ADDRESS values
  ('add0266232','40 Journal Square','Jersey','New Jersey',07306,'USA','Dunkins Donut',1,'us17493908'),
  ('add8195531','1435 Broadway','New York','New York',10018,'USA','Joe''s Pizza',1,'us66479066'),
  ('add0962947',' 1 Exchange Pl','Jersey','New Jersey',07302,'USA','Subway',1,'us41155006'),
  ('add3626132','197 12th St','Jersey','New Jersey',07310,'USA','Mc Donalds',1,'us90323876'),
  ('add3052654','5 Madison Ave','New York','New York',10010,'USA','The Clocktower',1,'us85964498'),
  ('add4310537','121 Town Square Pl','Jersey','New Jersey',07310,'USA','Newport Apartments',0,'us67413640'),
  ('add3503041','800 6th Ave','New York','New York',10001,'USA','',1,'us35356031'),
  ('add7258431','W 34th St Outside','New York','New York',10119,'USA','',0,'us68926720'),
  ('add5739507','Outside 15 Journal','Jersey','New Jersey',07306,'USA','',0,'us81781770'),
  ('add5541917','1200 Industrial Ave','Long Beach','California',90803,'USA','Stark Industries',1,'us76918477'),
  ('add5125422','4901 Maspeth Ave','Queens','New York',11378,'USA','Wayne Enterprises',1,'us95505203');

#CONTACT DATA
insert into CONTACT values  
  ('co37098025',1,5514604457,1,'us17493908'),
  ('co56837547',1,9298337708,1,'us66479066'),
  ('co19162514',1,5512252036,1,'us41155006'),
  ('co18425479',1,5517672493,1,'us90323876'),
  ('co67118771',1,9293590227,1,'us85964498'),
  ('co95583163',1,5513263073,0,'us67413640'),
  ('co07798780',1,9293494436,1,'us35356031'),
  ('co93322044',1,9297067103,0,'us68926720'),
  ('co70259701',1,9294377785,1,'us81781770'),
  ('co88921001',1,8883332222,1,'us76918477'),
  ('co57238388',1,9999988888,1,'us95505203');

#DONOR DATA
insert into DONOR values  
  ('do78748651','Keens Steakhouse','Restaurant',4,'us32102627'),
  ('do90724851','Dunkins Donut','Restaurant',7,'us17493908'),
  ('do85589948','Joe''s Pizza','Restaurant',12,'us66479066'),
  ('do21955528','Subway','Restaurant',32,'us41155006'),
  ('do95723858','Mc Donalds','Restaurant',4,'us90323876'),
  ('do26032792','The Clocktower','Restaurant',56,'us85964498');

#COURIER DATA
insert into COURIER values  
  ('co62886155','John','Wick',1,50,'us67413640'),
  ('co77258028','Jack','Reacher',1,34,'us35356031');

#RECEIVER DATA
insert into RECEIVER values  
  ('re69577853','Susan','Bones',21,0,0,0,1,20,0,1,0,0,'9:00:00','6:00:00','us68926720'),
  ('re17085364','David','Harris',34,0,1,0,0,47,0,0,1,0,'10:00:00','21:00:00','us81781770');
  
  #MONEY_DONATION DATA
insert into MONEY_DONATION values 
  ('mo24846014','DEBIT','1000','2021/11/17 7:00:21','2021/11/19 7:00:21','us76918477'),
  ('mo99997205','CHEQUE','40000','2021/5/29 3:42:43','2021/5/31 3:42:43','us95505203');
  
  #PACKAGE DATA
insert into PACKAGE values
('pa75394533','6 Donuts from Dunkins Donut','Savoury','2021/5/3 12:23:45','DELIVERED','W 34th St Outside 12 Penn Plaza, New York','','do90724851','co62886155','re69577853'),
  ('pa53892085','BMT Sub + Subway Club from Subway','Fast Food','2020/11/2 5:21:20','DELIVERED','Outside 15 Journal Square Plaza, Jersey','','do21955528','co77258028','re17085364'),
  ('pa40889757','Alfredo Pasta from Clocktower','Dish','2021/5/27 3:42:43','DELIVERED','W 34th St Outside 12 Penn Plaza, New York','','do26032792','co62886155','re69577853'),
  ('pa18625193','Cheese Burger from McDonalds','Fast Food','2021/8/17 11:25:32','DELIVERED','W 34th St Outside 12 Penn Plaza, New York','','do95723858','co77258028','re69577853'),
  ('pa34914651','Chicken Pizza from Joe''s Pizza','Fast Food','2021/11/15 7:00:21','DELIVERED','Outside 15 Journal Square Plaza, Jersey','','do85589948','co62886155','re17085364'),
  ('pa35356318','Salad from Subway','Healthy','2020/10/11 4:03:10','PREPARING',' 1 Exchange Pl, Jersey','Fish Free','do21955528','co62886155','re17085364'),
  ('pa34075996','Steak from Keens Steakhouse','Dish','2020/7/13 8:34:06','DELIVERING','33rd Street, New York','Dairy Free','do78748651','co77258028','re69577853'),
  ('pa84722853','Sushi from Clocktower','Dish','2020/12/9 6:00:00','DELIVERING','W 33th St, New York','','do26032792','co62886155','re69577853'),
  ('pa52435210','Veg Pizza from Joe''s Pizza','Fast Food','2021/4/11 9:59:30','PREPARING','1435 Broadway, New York','','do85589948','co77258028','re17085364');

  
   #ITEM DATA
insert into ITEM values 
  ('it64574659','Donuts',0,0,0,0,'2021/5/5 12:23:45',6,1,200,'pa75394533'),
  ('it58554663','BMT Sub',0,0,0,0,'2020/11/4 5:21:20',2,1,600,'pa53892085'),
  ('it60700257','Alfredo Pasta',0,0,0,0,'2021/5/29 3:42:43',1,1,250,'pa40889757'),
  ('it65066470','Cheese Burger',0,0,0,0,'2021/8/19 11:25:32',4,1,600,'pa18625193'),
  ('it52980513','Chicken Pizza',0,0,0,0,'2021/11/17 7:00:21',1,1,400,'pa34914651'),
  ('it25362399','Salad',0,0,1,0,'2020/10/13 4:03:10',2,1,180,'pa35356318'),
  ('it36969285','Steak',0,1,0,0,'2020/7/15 8:34:06',1,1,400,'pa34075996'),
  ('it59306374','Subway Club',0,0,0,0,'2021/7/8 2:30:20',2,1,400,'pa53892085'),
  ('it73430305','Sushi',0,0,0,0,'2020/12/10 6:00:00',2,1,300,'pa84722853'),
  ('it29467998','Veg Pizza',0,0,0,0,'2021/4/13 9:59:30',1,1,240,'pa52435210');
