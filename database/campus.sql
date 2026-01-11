CREATE DATABASE smart_campus;
\c smart_campus;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(100),
  role VARCHAR(20)
);

CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  course VARCHAR(100)
);

CREATE TABLE faculty(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  department VARCHAR(100)
);

CREATE TABLE attendance(
  id SERIAL PRIMARY KEY,
  student_id INT,
  status VARCHAR(10),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
