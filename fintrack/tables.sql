CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS transactions (
	id SERIAL PRIMARY KEY,
	amount NUMERIC,
	transaction_date DATE,
	transaction_type INT,
	category_id INT,
	user_id INT,
	details TEXT

);

CREATE TABLE IF NOT EXISTS categories (
	id SERIAL PRIMARY KEY,
	cat_name TEXT
);

CREATE TABLE IF NOT EXISTS transaction_types (
	id SERIAL PRIMARY KEY,
	type TEXT
);

CREATE TABLE IF NOT EXISTS user_accounts (
	id SERIAL PRIMARY KEY,
	user_id INT,
	account_id INT,
	billing_date DATE
);