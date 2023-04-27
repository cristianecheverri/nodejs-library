CREATE TABLE books(
	id_book SERIAL PRIMARY KEY,
	book_name VARCHAR NOT NULL,
	book_status BOOLEAN DEFAULT TRUE,
	book_creation_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
	id_user SERIAL PRIMARY KEY,
	user_first_name VARCHAR NOT NULL,
	user_last_name VARCHAR NOT NULL,
	user_birth_date TIMESTAMP NOT NULL,
	user_age SMALLINT NOT NULL,
	user_creation_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE loans (
	id_loan SERIAL PRIMARY KEY,
	fk_book_loan BIGINT NOT NULL,
	FOREIGN KEY (fk_book_loan) REFERENCES books (id_book),
	fk_user_loan BIGINT NOT NULL,
	FOREIGN KEY (fk_user_loan) REFERENCES users (id_user),
	loan_date TIMESTAMP DEFAULT NOW(),
	loan_return_date TIMESTAMP NOT NULL,
	loan_is_returned BOOLEAN DEFAULT FALSE
);