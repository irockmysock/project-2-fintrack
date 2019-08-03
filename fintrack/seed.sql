-- --categories seed--
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Food & Drinks', '../assets/food.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Transport', '../assets/transport.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Shopping', '../assets/shopping.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Entertainment', '../assets/entertainment.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Travel', '../assets/travel.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Bills', '../assets/bill.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Medical', '../assets/medical.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Invesments', '../assets/wallet.png');
-- INSERT INTO categories (cat_name, cat_icon) VALUES ('Miscellaneous', '../assets/misc.png');


-- --transaction_type seed--
-- INSERT INTO transaction_types (type, type_icon) VALUES ('Cash', '../../assets/dollar.png');
-- INSERT INTO transaction_types (type, type_icon) VALUES ('POSB Everyday Card', '../../assets/posb-everyday.png');
-- INSERT INTO transaction_types (type, type_icon) VALUES ('OCBC 365 Card', '../../assets/ocbc-365.png');
-- INSERT INTO transaction_types (type, type_icon) VALUES ('Citi PremierMiles Card', '../../assets/citi-pm.png');
-- INSERT INTO transaction_types (type, type_icon) VALUES ('American Express True Cashback Card', '../../assets/amex.png');



--user_accounts seed--
-- INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 1, null);
-- INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 2, null);

--transactions seed--
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details) VALUES (23.50,'2019-05-30',1,2,2,'Cash Transaction 1');
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details) VALUES (40.89,'2019-06-15',2,3,2,'Card Transaction');