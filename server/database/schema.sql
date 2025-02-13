create table career (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null unique,
  logo varchar(255) not null,
  description text NOT NULL
);

create table project(
  id INT unsigned primary key auto_increment not null,
  title varchar(255) not null,
  technos varchar(255) not null,
  main_screen varchar(255) not null,
  screenshot2 varchar(255),
  screenshot3 varchar(255),
  description text not null
);
insert into career(title, logo, description)
values
  ("Wild code School", "/logos/wild.svg", "j'ai été à la wild c'était super j'aime tous mes camarades et ma formatrice aussi bien sûr"),
  ("Wild code School 2", "/logos/wild.svg", "j'ai été à la wild c'était super j'aime tous mes camarades et ma formatrice aussi bien sûr"),
  ("Wild code School 3", "/logos/wild.svg", "j'ai été à la wild c'était super j'aime tous mes camarades et ma formatrice aussi bien sûr"),
  ("Wild code School 4", "/logos/wild.svg", "j'ai été à la wild c'était super j'aime tous mes camarades et ma formatrice aussi bien sûr");

insert into project(title,technos,main_screen,screenshot2,screenshot3, description)
VALUES
  ("Wildex","HTML, CSS, Javascript","/screen/wildex-main.png","/screen/wildex-screen2.png","/screen/wildex-screen3.png","Création d’un trombinoscope qui m’a permis de solidifier mes,acquis en HTML/CSS et m’a appris à travailler sur un projet en,équipe."),
  ("Wild Away","React, Express","/screen/wildaway-main.png","/screen/wildaway-screen2.png","/screen/wildaway-screen3.png","Conception d’un site de réservation d’hôtels/restaurants responsive grâce auquel j’ai développé mes compétences en React notamment par l’utilisation de props, de states, du routeur, de fetch sur une api, d’une bibliothèque pour importer une carte interactive, du contexte pour créer un mode sombre. Ce projet m’a aussi permis de découvrir la méthode agile."),
  ("Nintendream","React, Express, MySQL","/screen/nintendream-main.png","/screen/nintendream-screen2.png","/screen/nintendream-screen3.png","Réalisation d’un site pour un parc d’attraction fictif, qui a renforcé mes acquis en React et m’a appris à gérer une base de données relationnelles SQL et à l’intégrer à un projet.");