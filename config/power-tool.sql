-- Active: 1755252374376@@127.0.0.1@3306@powertools

CREATE DATABASE powertools

use powertools

SELECT * FROM district

CREATE TABLE admin(
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL,
    is_creator BOOLEAN NOT NULL
);

CREATE TABLE tool(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tool_price DECIMAL(8, 2) NOT NULL
);


CREATE TABLE shop(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ownerId INT NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    district_id INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);



CREATE TABLE shop_tool(
    id INT AUTO_INCREMENT PRIMARY KEY,
    shop_id INT NOT NULL,
    tool_id INT NOT NULL,
    rent_price DECIMAL(8, 2) NOT NULL
);


CREATE TABLE `order`(
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    shop_tool_id INT NOT NULL,
    order_date DATE NOT NULL,
    period INT NOT NULL,
    total_price DECIMAL(8, 2) NOT NULL
);


CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL,
    role VARCHAR(255) CHECK
        (role IN('client', 'owner')) NOT NULL,
    address VARCHAR(255) NOT NULL
);


CREATE TABLE district(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


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

SELECT shop.name,shop.location FROM tool RIGHT JOIN shop_tool on tool.id=shop_tool.tool_id
LEFT JOIN shop on shop.id=shop_tool.shop_id

SELECT *
FROM tool RIGHT JOIN shop_tool on tool.id=shop_tool.tool_id
LEFT JOIN `order` on `order`.shop_tool_id=shop_tool.id
LEFT JOIN `user` on `user`.id=`order`.client_id
LEFT JOIN shop on shop_tool.shop_id=shop.id
LEFT JOIN district on district.id=shop.district_id
