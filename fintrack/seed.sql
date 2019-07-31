--categories seed--
INSERT INTO categories (cat_name) VALUES ("Food & Drinks");
INSERT INTO categories (cat_name) VALUES ("Transport");
INSERT INTO categories (cat_name) VALUES ("Shopping");
INSERT INTO categories (cat_name) VALUES ("Entertainment");
INSERT INTO categories (cat_name) VALUES ("Bills");
INSERT INTO categories (cat_name) VALUES ("Medical");
INSERT INTO categories (cat_name) VALUES ("Miscellaneous");
INSERT INTO categories (cat_name) VALUES ("Invesments");

--transaction_type seed--
INSERT INTO transaction_types (type) VALUES ("Cash");
INSERT INTO transaction_types (type) VALUES ("UOB PRVI Card");
INSERT INTO transaction_types (type) VALUES ("POSB Everyday Card");


--user_accounts seed--
INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 1, null);
INSERT INTO user_accounts (user_id, account_id, billing_date) VALUES (2, 2, null);