-- --categories seed--
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Food & Drinks', '/assets/food.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Transport', '/assets/transport.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Shopping', '/assets/shopping.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Entertainment', '/assets/entertainment.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Travel', '/assets/travel.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Bills', '/assets/bill.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Medical', '/assets/medical.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Invesments', '/assets/wallet.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Miscellaneous', '/assets/misc.png');


-- --transaction_type seed--
-- INSERT INTO transaction_types (type, type_icon) VALUES ('Cash', '/assets/dollar.png');
-- INSERT INTO transaction_types (type, type_icon) VALUES ('POSB Everyday Card', '/assets/posb-everyday.png');
-- INSERT INTO transaction_types (type, type_icon) VALUES ('OCBC 365 Card', '/assets/ocbc-365.png');
-- INSERT INTO transaction_types (type, type_icon) VALUES ('Citi PremierMiles Card', '/assets/citi-pm.png');
-- INSERT INTO transaction_types (type, type_icon) VALUES ('American Express True Cashback Card', '/assets/amex.png');



-- user_accounts seed--
-- INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 1, 'N.A');
-- INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 2, '20th');
-- INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 3, '25th');

---- transactions seed--
-- --AUG--
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (10.20,'2019-08-01',1,1,2,'food republic',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (22.30,'2019-08-01',2,2,2,'grab ride',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (50.60,'2019-08-02',3,3,2,'clothes',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (16.00,'2019-08-02',1,4,2,'movie',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (120.30,'2019-08-03',2,5,2,'air ticket',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (52.30,'2019-08-03',3,6,2,'phone bill',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (32.40,'2019-08-04',1,7,2,'buy mc',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (80.00,'2019-08-04',2,8,2,'stashAway',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (45.40,'2019-08-05',2,9,2,'animals',null);
-- --JULY
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (13.20,'2019-07-11',1,1,2,'food republic',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (12.30,'2019-07-12',2,2,2,'grab ride',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (30.60,'2019-07-13',3,3,2,'stuff',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (60.00,'2019-07-14',3,4,2,'drinks',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (80.30,'2019-07-15',1,5,2,'hotel accom',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (69.30,'2019-07-16',2,6,2,'utilities bill',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (82.40,'2019-07-17',1,7,2,'hospital',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (50.00,'2019-07-18',3,8,2,'stashAway',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (65.40,'2019-07-19',2,9,2,'pokemon',null);
-- --JUNE
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (73.20,'2019-06-11',1,1,2,'sushi',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (12.30,'2019-06-12',2,2,2,'bus fare',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (50.60,'2019-06-13',3,3,2,'animals',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (30.00,'2019-06-14',1,4,2,'movie',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (10.30,'2019-06-15',3,5,2,'train ride',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (60.30,'2019-06-26',2,6,2,'phone bill',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (18.40,'2019-06-27',2,7,2,'food court',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (110.00,'2019-06-28',1,8,2,'insurance',null);
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details,receipt_url) VALUES (25.40,'2019-06-29',3,8,2,'pokemon',null);