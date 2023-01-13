CREATE DATABASE memorise_words default CHARACTER SET UTF8; 
use memorise_words;

DROP TABLE `word`;
DROP TABLE `set`;
DROP TABLE `group`;

CREATE TABLE `group` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) NOT NULL,
  `group_name` varchar(30) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `set` (
  `set_id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `set_name` varchar(30) NOT NULL,
  `set_amount` int NOT NULL DEFAULT 0,
  `set_order` json,
  `set_round` int NOT NULL DEFAULT 10,
  `set_rewrite` int NOT NULL DEFAULT 3,
  `set_mode` int NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime,
  PRIMARY KEY (`set_id`),
  FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `word` (
  `word_id` int NOT NULL AUTO_INCREMENT,
  `set_id` int NOT NULL,
  `word_eng` varchar(30) NOT NULL,
  `word_kor` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime,
  PRIMARY KEY (`word_id`),
  FOREIGN KEY (`set_id`) REFERENCES `set` (`set_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3;

insert into `group`(user_id, group_name) values('test1', '그룹1');
insert into `group`(user_id, group_name) values('test1', '그룹2');
insert into `group`(user_id, group_name) values('test1', '그룹3');

insert into `set`(group_id, set_name) values(1, '단어세트1');
insert into `set`(group_id, set_name) values(1, '단어세트3');
insert into `set`(group_id, set_name) values(1, '단어세트3');

insert into `word`(set_id, word_eng, word_kor) values(3, 'apple', '사과');
insert into `word`(set_id, word_eng, word_kor) values(3, 'make', '만들다');
insert into `word`(set_id, word_eng, word_kor) values(3, 'look', '보다');