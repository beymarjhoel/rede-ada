CREATE TABLE `Postagem` (
	`postagem_id` bigint NOT NULL,
	`usuario` bigint NOT NULL,
	`tema` bigint NOT NULL,
	`descricaoPostagem` varchar(2000) NOT NULL,
	`dataHora` DATETIME(8) NOT NULL,
	`link` varchar(2000) NOT NULL,
	PRIMARY KEY (`postagem_id`)
);

CREATE TABLE `Usuário` (
	`id` bigint NOT NULL,
	`nomeCompleto` varchar(900) NOT NULL,
	`cargo` varchar(50) NOT NULL,
	`usuario` varchar(100) NOT NULL,
	`senha` varchar(100) NOT NULL,
	`link` varchar(2000) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Tema` (
	`id` bigint NOT NULL,
	`descricaoTema` varchar(50) NOT NULL,
	`tipoTema` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk0` FOREIGN KEY (`usuario`) REFERENCES `Usuário`(`id`);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk1` FOREIGN KEY (`tema`) REFERENCES `Tema`(`id`);

