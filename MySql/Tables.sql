create database PymeWave;
use PymeWave;
 
create table usuario(
	id_usuario int NOT NULL AUTO_INCREMENT,
	correo varchar(40) not NULL,
    nombre varchar(20) not NULL,
    apellidos varchar(20) not NULL,
    telefono varchar(14) not NULL,
    contraseña varchar (64) NOT NULL,
    CONSTRAINT usuario_PK PRIMARY KEY (id_usuario),
    CONSTRAINT usuario_UQ UNIQUE (correo, telefono)
);


create table empresa(
	nombre_empresa varchar(30) not NULL,
    correo varchar(40) not NULL,
    dir_fisica varchar (50) not NULL,
    id_empresa int not null AUTO_INCREMENT,
    estado_suscripcion boolean not NULL,
    calificacion double NULL,
    telefono varchar(14) not NULL,
    contraseña varchar(64) not null,
    rut varchar(9) not null,
    CONSTRAINT empresa_PK PRIMARY KEY (id_empresa),
    CONSTRAINT empresa_UQ UNIQUE (nombre_empresa, correo, rut, telefono)
);


create table dominios_red(
	dominio_red varchar(250) NULL,
    id_empresa int NOT NULL,
    constraint dominio_red_FK foreign key (id_empresa) references empresa(id_empresa),
    CONSTRAINT dominio_red_UQ UNIQUE (dominio_red)
);

create table catalogo(
	id_empresa_catalogo int NOT NULL AUTO_INCREMENT,
    descripcion_empresa varchar(500) NULL,
    CONSTRAINT catalogo_PK PRIMARY KEY (id_empresa_catalogo),
    CONSTRAINT empresa_catalogo_FK FOREIGN KEY (id_empresa_catalogo) REFERENCES empresa(id_empresa)
);

create table producto(
	descripcion varchar(500) not NULL,
    id_catalogo int NOT NULL,
    nombre varchar(50) not NULL,
    id_producto int AUTO_INCREMENT,
    CONSTRAINT producto_PK PRIMARY KEY (id_producto),
    CONSTRAINT producto_FK foreign key (id_catalogo) REFERENCES catalogo(id_empresa_catalogo)
);

create table calificaciones(
	num_estrellas int NOT NULL,
    reseña varchar(500) NULL,
    id_calificacion int AUTO_INCREMENT,
    id_empresa int NOT NULL, -- FK empresa - id_empresa
    id_usuario int not null, -- FK usuario - id_usuario
    id_producto int not null, -- FK producto - id_producto
    CONSTRAINT calificaciones_PK PRIMARY KEY (id_calificacion),
    constraint empresa_calificaciones_FK FOREIGN KEY (id_empresa) REFERENCES empresa(id_empresa),
    CONSTRAINT usuario_calificaciones_FK FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    CONSTRAINT producto_calificaciones_FK foreign key (id_producto) REFERENCES producto(id_producto)
);

create table categoria(
	nombre varchar(30) not NULL,
    id_categoria int AUTO_INCREMENT,
    CONSTRAINT categoria_PK PRIMARY KEY (id_categoria),
    CONSTRAINT categoria_UQ UNIQUE (nombre)
);

create table categoria_empresa(
	id_empresa int NOT NULL,
    id_categoria int NOT NULL,
    CONSTRAINT categoria_categoria_empresa_FK FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
    CONSTRAINT empresa_categoria_empresa_FK FOREIGN KEY (id_empresa) REFERENCES empresa(id_empresa)
);
