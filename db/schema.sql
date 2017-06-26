create database burgers_db;

use burgers_db;

create table burger (
    id integer auto_increment not null,
    burger_name varchar(50) not null,
    devoured boolean default false,
    date timestamp not null,
    primary key(id)
)