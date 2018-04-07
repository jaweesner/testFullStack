CREATE DATABASE todos;
USE todos;
CREATE TABLE items(
  id INTEGER NOT NULL AUTO_INCREMENT,
  event VARCHAR (255),
  due DATE, 
  priority VARCHAR(255),
  done BOOLEAN,
  created_at TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);