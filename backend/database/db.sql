CREATE DATABASE developer_ideas;

USE developer_ideas;

/**Usuarios página**/
CREATE TABLE users(
    id INT(11) NOT NULL,
    correo VARCHAR (100) NOT NULL,
    nro_telefono VARCHAR (100) NOT NULL,
    password VARCHAR (60) NOT NULL,
    usuario VARCHAR (100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY(id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

/**Tipo Proyecto **/
CREATE TABLE tipo_proyecto(
    id INT(11) NOT NULL,
    nombre VARCHAR (100) NOT NULL,
    descripcion VARCHAR (500) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp 
);

ALTER TABLE tipo_proyecto
    ADD PRIMARY KEY(id);

ALTER TABLE tipo_proyecto
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE tipo_proyecto;

/**Proyectos **/
CREATE TABLE proyectos(
    id INT(11) NOT NULL,
    tipo_proyecto VARCHAR (100) NOT NULL,
    nombre_proyecto VARCHAR (100) NOT NULL,
    cliente VARCHAR (100) NOT NULL,
    descripcion VARCHAR (500) NOT NULL,
    url_imagen VARCHAR (100) NOT NULL,
    url_contenido VARCHAR (100) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp 
);

ALTER TABLE proyectos
    ADD PRIMARY KEY(id);

ALTER TABLE proyectos
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE proyectos;

/**Clientes página**/
CREATE TABLE clientes(
    id INT(11) NOT NULL,
    correo VARCHAR (100) NOT NULL,
    nro_telefono VARCHAR (100) NOT NULL,
    password VARCHAR (60) NOT NULL,
    usuario VARCHAR (100) NOT NULL
);

ALTER TABLE clientes
    ADD PRIMARY KEY(id);

ALTER TABLE clientes
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE clientes;

/**Info cliente página**/
CREATE TABLE info_clientes(
    id INT(11) NOT NULL,
    nombres VARCHAR (100) NOT NULL,
    apellidos VARCHAR (100) NOT NULL,
    correo VARCHAR (100) NOT NULL,
    nro_telefono VARCHAR (100) NOT NULL,
    usuario VARCHAR (100) NOT NULL
);

ALTER TABLE info_clientes
    ADD PRIMARY KEY(id);

ALTER TABLE info_clientes
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE info_clientes;