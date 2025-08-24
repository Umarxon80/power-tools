-- Active: 1755252374376@@127.0.0.1@3306@powertools--

CREATE DATABASE powertools

use powertools

CREATE TABLE admin(
    id INT NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL,
    is_creator BOOLEAN NOT NULL
);
ALTER TABLE
    admin ADD PRIMARY KEY(id);
CREATE TABLE tool(
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tool_price DECIMAL(8, 2) NOT NULL
);
ALTER TABLE
    tool ADD PRIMARY KEY(id);
CREATE TABLE shop(
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    ownerId INT NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    district_id INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);
ALTER TABLE
    shop ADD PRIMARY KEY(id);
CREATE TABLE shop_tool(
    id INT NOT NULL,
    shop_id INT NOT NULL,
    tool_id INT NOT NULL,
    rent_price DECIMAL(8, 2) NOT NULL
);
ALTER TABLE
    shop_tool ADD PRIMARY KEY(id);
CREATE TABLE `order`(
    id INT NOT NULL,
    client_id INT NOT NULL,
    shop_tool_id INT NOT NULL,
    order_date DATE NOT NULL,
    period INT NOT NULL,
    total_price DECIMAL(8, 2) NOT NULL
);
ALTER TABLE
    `order` ADD PRIMARY KEY(id);
CREATE TABLE user(
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL,
    role VARCHAR(255) CHECK
        (role IN('client', 'owner')) NOT NULL,
        address VARCHAR(255) NOT NULL
);
ALTER TABLE
    user ADD PRIMARY KEY(id);
CREATE TABLE district(
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL
);
ALTER TABLE
    district ADD PRIMARY KEY(id);
ALTER TABLE
    shop_tool ADD CONSTRAINT shop_tool_tool_id_foreign FOREIGN KEY(tool_id) REFERENCES tool(id);
ALTER TABLE
    shop_tool ADD CONSTRAINT shop_tool_shop_id_foreign FOREIGN KEY(shop_id) REFERENCES shop(id);
ALTER TABLE
    shop ADD CONSTRAINT shop_ownerid_foreign FOREIGN KEY(ownerId) REFERENCES user(id);
ALTER TABLE
    `order` ADD CONSTRAINT order_client_id_foreign FOREIGN KEY(client_id) REFERENCES user(id);
ALTER TABLE
    shop ADD CONSTRAINT shop_district_id_foreign FOREIGN KEY(district_id) REFERENCES district(id);
ALTER TABLE
    `order` ADD CONSTRAINT order_shop_tool_id_foreign FOREIGN KEY(shop_tool_id) REFERENCES shop_tool(id);