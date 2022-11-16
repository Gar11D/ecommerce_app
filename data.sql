--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: products; Type: TABLE; Schema: ecommerce_app; Owner: -
--

CREATE TABLE products (
    product_id int PRIMARY KEY,
    product_name varchar(50),
    product_price numeric
);

ALTER TABLE products
ADD CONSTRAINT product_id_unique UNIQUE (product_id);

INSERT INTO 
products (product_id, product_name, product_price) 
VALUES (1, 'basic_chair', 10);

INSERT INTO 
products (product_id, product_name, product_price) 
VALUES (2, 'basic_table', 20);

INSERT INTO 
products (product_id, product_name, product_price) 
VALUES (3, 'basic_desk', 30);

INSERT INTO 
products (product_id, product_name, product_price) 
VALUES (4, 'basic_bookcase', 40);

INSERT INTO 
products (product_id, product_name, product_price) 
VALUES (5, 'basic_chandelier', 50);

--
-- Name: user_accounts; Type: TABLE; Schema: ecommerce_app; Owner: -
--

CREATE TABLE user_accounts (
    user_id int PRIMARY KEY,
    user_email varchar(50),
    user_phone varchar(12)
);

ALTER TABLE user_accounts
ADD CONSTRAINT user_id_unique UNIQUE (user_id);

ALTER TABLE user_accounts
ADD CONSTRAINT user_email_unique UNIQUE (user_email);

INSERT INTO 
user_accounts (user_id, user_email)
VALUES (1, abc@email.com);

INSERT INTO 
user_accounts (user_id, user_email)
VALUES (2, bbc@email.com);

INSERT INTO 
user_accounts (user_id, user_email)
VALUES (3, cbc@email.com);

INSERT INTO 
user_accounts (user_id, user_email)
VALUES (4, dbc@email.com);

--
-- Name: orders; Type: TABLE; Schema: ecommerce_app; Owner: -
--

CREATE TABLE orders (
    order_id int PRIMARY KEY,
    order_date date,
    user_id int REFERENCES user_accounts(user_id)
);

ALTER TABLE orders
ADD CONSTRAINT order_id_unique UNIQUE (order_id);

--
-- Name: orders_products; Type: TABLE; Schema: ecommerce_app; Owner: -
--

CREATE TABLE orders_products (
    order_id int REFERENCES orders(order_id),
    product_id int REFERENCES products (product_id),
    PRIMARY KEY (order_id, product_id)
);

--
-- Name: cart; Type: TABLE; Schema: ecommerce_app; Owner: -
--

CREATE TABLE cart (
    cart_id	int	PRIMARY KEY,
    user_id	int REFERENCES user_accounts(user_id)
);

ALTER TABLE cart
ADD CONSTRAINT cart_id_unique UNIQUE (cart_id);

--
-- Name: cart_products; Type: TABLE; Schema: ecommerce_app; Owner: -
--

CREATE TABLE cart_products (
    cart_id int REFERENCES cart (cart_id),
    product_id int REFERENCES products(product_id),
    PRIMARY KEY (cart_id, product_id)
);


