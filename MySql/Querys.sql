select * from empresa;

select * from catalogo;

insert into empresa (nombre_empresa, correo, dir_fisica, rut, telefono, estado_suscripcion, contraseña) 
values ('Testing #1', 'albert@gmail.com', 'bucaramanga', '1' , '3178297584', false, '141a00f3bab5c4f5bcb0b9c0dd48d253bfab6e344f4bc202c255c29039b99b2d');

insert into catalogo (descripcion_empresa, id_empresa_catalogo) values('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 1);
