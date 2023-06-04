create table region (
    id int primary key,
    name varchar(50)
);

create table district(
    id int primary key auto_increment,
    name varchar(50),
    region_id int
);

describe district;--  Table haqida malumot chiqarib beradi
show tables;

create table pharmacies(
    id int primary key auto_increment,
    adress varchar(50),
    location varchar(50),
    phone varchar(50),
    email varchar(50),
    region_id bigint,
    district_id bigint
);

create table stock(
    id int primary key auto_increment,
    pharmacy_id bigint,
    medicine_id bigint,
    quantity bigint
);

create table medicine(
    id int primary key auto_increment,
    name varchar(50),
    manufakture varchar(50),
    medicine_type_id bigint,
    price float,
    expiry_date date,
       text
);

create table medicine_type(
    id int primary key auto_increment,
    name varchar(50)
);


