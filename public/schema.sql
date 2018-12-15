--DROP DATABASE IF EXISTS project3_db;

CREATE DATABASE project3_db;

USE project3_db;

CREATE TABLE NEIGHBORHOOD   
(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    HOODNAME VARCHAR(20) NOT NULL,
    ZIPCODE INT NOT NULL,
    BOUNDARYDESC VARCHAR(500),
    BOUNDARY_PHOTO VARCHAR(100),
    HOOD_VIBE VARCHAR(100),
    TRENDING_TOWARDS VARCHAR(500),
    COMING_SOON VARCHAR(500),
    ZID INT,
    BANNER_PHOTO VARCHAR(100)
);

CREATE TABLE USER ( 
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    USERNAME VARCHAR(20) NOT NULL, 
    PASSWORD CHAR(60) NOT NULL 
    );

CREATE TABLE FORUM_HEADER
(
    POST_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    POST_TITLE VARCHAR(50),
    USER_ID INT NOT NULL,
    FOREIGN KEY (USER_ID) REFERENCES USER(ID)
);

CREATE TABLE FORUM_DETAIL
(
    POST_ID INT NOT NULL,
    POST_BODY VARCHAR(500),
    FOREIGN KEY (POST_ID) REFERENCES FORUM_HEADER(POST_ID)
);

CREATE TABLE LOCATIONS
(
    LOCATION_NAME VARCHAR(50) NOT NULL,
    LOCATION_TYPE INT NOT NULL,
    DESCIRPTION VARCHAR(500),
    LOCAL_NOTE VARCHAR(500),
    WEBSITE VARCHAR(200),
    LOCATION_ADDRESS VARCHAR(100),
    PHONE VARCHAR(12),
    EARLY INT,
    MID INT,
    LATE INT,
    NEIGHBORHOOD_ID INT NOT NULL,
    FOREIGN KEY (NEIGHBORHOOD_ID) REFERENCES NEIGHBORHOOD(ID) ,
    NATSTAMP INT
)