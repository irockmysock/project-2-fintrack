CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS transactions (
	txnid SERIAL PRIMARY KEY,
	amount NUMERIC,
	transaction_date DATE,
	transaction_type INT,
	category_id INT,
	user_id INT,
	details TEXT,
	receipt_url TEXT

);

CREATE TABLE IF NOT EXISTS categories (
	id SERIAL PRIMARY KEY,
	cat_name TEXT,
	cat_icon TEXT
);

CREATE TABLE IF NOT EXISTS transaction_types (
	id SERIAL PRIMARY KEY,
	type TEXT,
	type_icon TEXT
);

CREATE TABLE IF NOT EXISTS user_accounts (
	id SERIAL PRIMARY KEY,
	user_id INT,
	account_id INT,
	billing_date TEXT
);