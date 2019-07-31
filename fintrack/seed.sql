-- --categories seed--
-- INSERT INTO categories (cat_name) VALUES ('Food & Drinks');
-- INSERT INTO categories (cat_name) VALUES ('Transport');
-- INSERT INTO categories (cat_name) VALUES ('Shopping');
-- INSERT INTO categories (cat_name) VALUES ('Entertainment');
-- INSERT INTO categories (cat_name) VALUES ('Bills');
-- INSERT INTO categories (cat_name) VALUES ('Medical');
-- INSERT INTO categories (cat_name) VALUES ('Miscellaneous');
-- INSERT INTO categories (cat_name) VALUES ('Invesments');

-- --transaction_type seed--
-- INSERT INTO transaction_types (type) VALUES ('Cash');
-- INSERT INTO transaction_types (type) VALUES ('UOB PRVI Card');
-- INSERT INTO transaction_types (type) VALUES ('POSB Everyday Card');


--user_accounts seed--
-- INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 1, null);
-- INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 2, null);

--transactions seed--
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details) VALUES (23.50,'2019-05-30',1,2,2,'Cash Transaction 1');
-- INSERT INTO transactions (amount,transaction_date,transaction_type,category_id,user_id,details) VALUES (40.89,'2019-06-15',2,3,2,'Card Transaction');