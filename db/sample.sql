-- -- phpMyAdmin SQL Dump
-- -- version 5.1.1
-- -- https://www.phpmyadmin.net/
-- --
-- -- Hôte : localhost:8889
-- -- Généré le : mer. 22 mars 2023 à 13:52
-- -- Version du serveur : 5.7.34
-- -- Version de PHP : 7.4.21

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";


-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;

-- --
-- -- Base de données : `Manhwa_Shop`
-- --

-- -- --------------------------------------------------------

-- --
-- -- Structure de la table `Manhwa`
-- --

-- CREATE TABLE `Manhwa` (
--   `id` int(11) NOT NULL,
--   `name` varchar(535) NOT NULL,
--   `img` varchar(150) NOT NULL,
--   `author` varchar(535) NOT NULL,
--   `artist` varchar(535) DEFAULT NULL,
--   `genre` varchar(535) NOT NULL,
--   `resume` text NOT NULL,
--   `price` int(255) NOT NULL DEFAULT '23'
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Déchargement des données de la table `Manhwa`
-- --

-- INSERT INTO `Manhwa` (`id`, `name`, `img`, `author`, `artist`, `genre`, `resume`, `price`) VALUES
-- (1, 'Tower of God', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902077/Manhwashop/towerofgod_ak84zt.webp', ' SIU', ' SIU', 'Action', 'Tower of God est un webtoon sud-coréen, écrit et dessiné par SIU, de son vrai nom Lee Jong-hui. Il fait partie d\'un univers créé par SIU appelé Talse User Story, qui regroupe plusieurs œuvres du même auteur. Il est édité par Naver, et publié gratuitement sur sa plateforme Naver Webtoon.', 45),
-- (2, 'The God of High School', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902263/Manhwashop/thegodofhighschool_sdjs2y.webp', 'Park Yong-Je', '', 'Action', 'The God Of High School ou GOH est un manhwa écrit par Park Yong-je. Publié depuis le 8 avril 2011 par Naver et paraissant tous les mardis et samedis à 16h. Le manhwa a été l\'un des premiers webtoons à recevoir une traduction anglaise lors du lancement du site web et application Naver Webtoon en juillet 2014.', 35),
-- (3, 'True Beauty', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902552/Manhwashop/True-Beauty_ed9ohc.jpg', 'Yaongyi ', NULL, 'Romance', 'Complexée par son apparence, Im Joo-Kyung a pris l\'habitude de se cacher derrière une épaisse couche de maquillage. Dans sa nouvelle école, elle rencontre Lee Soo-Ho, un camarade de classe qui devient rapidement le seul à connaître son vrai visage.', 23),
-- (4, 'Love Alarm', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902885/Manhwashop/Love_Alarm_kqo34e.webp', 'Chon Kye-young', NULL, 'Romance', 'A young woman called Jojo revisits her high school days when a revolutionary new app was sweeping the masses - Love Alarm: the app that tells you when someone in a 10-meter radius has a crush on you! Sparks fly and rumours run wild as people wonder if this could be the real deal - but what will it mean for Jojo, her beautiful but evil cousin, and the mysterious heartthrob in their year?', 19),
-- (5, 'Nano Machine', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/nano-machine_kvhl0d.png', 'Hanjung Moonnight', NULL, 'Action', 'After being held in disdain and having his life put in danger, an orphan from the Demonic Cult, Cheon Yeo-Woon, has an unexpected visit from his descendant from the future who inserts a nano machine into Cheon Yeo-Woon’s body, which drastically changes Cheon Yeo-Woon’s life after its activation. The story of Cheon Yeo-Woon’s journey of bypassing the Demonic Cult and rising to become the best martial artist has just begun.', 23),
-- (6, 'The Gamer', 'https://res.cloudinary.com/dps4zteie/image/upload/v1675028165/Manhwashop/the_gamer_hxaigk.jpg', 'Seong Sang Yeong', 'Sang Ah', 'Fantasy ', 'L\'histoire se déroule en Corée du Sud. On suit les aventures de Han Jee Han qui a mystérieusement obtenu un pouvoir qui transforme sa vie en jeu vidéo. En effet, il peut voir les niveaux des gens ou augmenter ses compétences... Mais quel secret se cache derrière ce pouvoir incroyable nouvellement acquis ?', 29),
-- (8, 'The Beginning After the End', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/the-beginning-after-the-end_fpd4tn.png', 'TurtleMe', 'Fuyuki23', 'Adventure', 'King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will.\r\n\r\nReincarnated into a new world filled with magic and monsters, the king has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.', 27),
-- (9, 'The Chronicles of Heavenly Demon', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/chronicles-of-heavenly-demon_pdfvgx.jpg', 'Ilhwang', 'Gom-guk', 'Martial Arts', 'In an ancient world where martial artists reign supreme, Unseong can only watch as his master is brutally beaten to death after a false accusation of practicing forbidden demonic arts. Even after a valiant fight, he fails to kill those responsible and faces his own end. But fate has other plans… Instead of taking his last breath, he awakens as a child, training to be an elite soldier of a demonic sect. Now Unseong must embrace the demonic arts and harness power in his ultimate quest for revenge.', 23),
-- (10, 'Second Life Ranker', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/second-life-ranker_uanr9s.png', 'Sadoyeon', NULL, 'Martial Arts', 'Yeon-woo had a twin brother who disappeared five years ago. One day, a pocket watch left by his brother returned to his possession. Inside, he found a hidden diary in which was recorded “By the time you hear this, I guess I will be already dead….”\r\nObelisk, the Tower of the Sun God, a world where several universes and dimensions intersect. In this world, his brother had fallen victim to betrayal while climbing up the tower. After learning the truth, Yeon-woo decided to climb the tower along with his brother’s diary.\r\nYeon-woo then proceeds to go through the same trials and fights as his younger brother did as an anonymous player. His goal? Defeating the Obelisk Tower and get revenge for his brother.', 23),
-- (11, 'The Deadbeat Noble', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/reformation-of-the-deadbeat-noble_bkgehv.jpg', 'Second Star', 'Dodomoon', 'Fantasy', 'After witnessing the shocking death of his mother, young Airen Farreira uses sleep to escape his painful reality, earning him the nickname, “the lazy lord”. Yet, in spite of others’ jeers and whispers, Airen has no intention of changing his ways. But when he awakens one day from a dream about a mysterious swordsman, his life’s trajectory takes a complete turn…', 32),
-- (12, 'The Promised Neverland', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674929662/Manhwashop/thepromiseofneverland_dgbjeq.jpg', 'Kaiu Shirai', '', 'Fantasy', 'The Promised Neverland est une série japonaise de mangas écrits par Kaiu Shirai et dessinés par Posuka Demizu. Il est prépublié entre août 2016 et juin 2020 dans le magazine Weekly Shōnen Jump de l\'éditeur Shūeisha.', 23),
-- (13, 'Sweet Home', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674905988/Manhwashop/sweet-home_zoz2o1.jpg', 'Kim Carnby', 'Youngchan Hwang', 'Action', 'Après une tragédie familiale inattendue, un lycéen solitaire est obligé de quitter son domicile - seulement pour faire face à quelque chose de beaucoup plus effrayant: une réalité où des monstres tentent d’éliminer l’humanité. Il doit maintenant se battre aux côtés des héros pour tenter de sauver le monde avant qu’il ne soit trop tard.\r\n\r\n', 20),
-- (15, 'Noblesse', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674906474/Manhwashop/noblesse_jypsoz.webp', 'Son Jae Ho', 'Lee Gwang Su', 'Comedy', 'Après un sommeil de plus de 800 ans, Cadis Etrama Di Raizel, alias Rai, n\'a pas connaissance des derniers progrès et avancées scientifiques de l\'Humanité. Tout en cherchant à apprendre à se familiariser avec l\'époque dans laquelle il se réveille, il décide d\'aller dans une école sans savoir qu\'un de ses fidèles serviteurs, Frankenstein, est devenu directeur d\'une école sud-coréenne, et décide de l\'inscrire dans son école afin que son maître puisse apprendre d\'avantage sur le nouveau monde. Il devient alors rapidement ami avec Shin Woo, un adolescent sportif, Ik Han, un passionné d\'informatique et Yu Na.', 34),
-- (16, 'Solo Leveling', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674907273/Manhwashop/sololeveling_oq6zmk.jpg', 'Chu Gong', 'Jang Seong Rak', 'Action', 'Dix ans auparavant, des portails ont commencé à apparaître un peu partout dans le monde. Ces portails ont la particularité de connecter le monde à d\'autres dimensions, donjons ou mondes parallèles. En même temps, certaines personnes ont développé des capacités afin de pouvoir chasser ces portails. On appelle ceux qui reçoivent un Éveil, des Chasseurs.', 29),
-- (17, 'Cheese in the Trap', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674908253/Manhwashop/cheese_in_the_trap_tc7gk2.jpg', 'Soonkki', 'Soonkki', 'Comedy', 'Hong Seol, jeune étudiante coréenne, revient à l\'université après un an de pause. Elle y fait la rencontre de Yoo Jung, un aîné connu comme étant « M. Parfait ». Mais aux yeux de Seol, le jeune homme a un comportement équivoque.', 30),
-- (18, 'Peerless Dad', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/peerless_dad_v1f11q.jpg', 'NO Kyoungchan', 'Lee Hyunseok', 'Martial Arts', 'Noh Gajang is a strong, dedicated, and humble man, with much respect for the martial arts. After the death of his lovely wife, this muscle-for-hire just wants an easy job that allows him to be a good father to his three little babies. He’s even happy to pull guard duty and fend off amateur fighters if it means he can return home safely each night. But when a creepy cult starts stealing children from the city, Gajang must step up to the challenge and discover his true warrior potential.', 23),
-- (19, 'Cultivation Chat Group', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/cultivation-chat-group_kbc09l.jpg', 'Legend of the Paladin', NULL, 'Adventure', 'One day, Song Shuhang was suddenly added to a chat group with many seniors that suffered from chuuni disease. The people inside the group would call each other ‘Fellow Daoist’ and had all different kinds of titles: Palace Master, Cave Lord, True Monarch, Immortal Master, etc. Even the pet of the founder of the group that had run away from home was called ‘monster dog’. They would talk all day about pill refining, exploring ancient ruins, or share their experience on techniques.\r\nHowever, after lurking inside the group for a while, he discovered that not all was what it seemed...', 29),
-- (20, 'Martial God Asura', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/martial-god-asura_yc4qp4.jpg', 'Pikapi et Shan Liang De Mi Feng', 'Pikapi et Shan Liang De Mi Feng', 'Adventure', 'The young Chu Feng was always seen as an insult to the Chu family due to his weak physique. One day he decides he’s had enough of it, and in order to reclaim his father’s name and save his mother, he decides to get stronger no matter what.\r\n\r\nXiuluo Wushen\r\n修罗武神', 29),
-- (21, 'The Gamer', 'https://res.cloudinary.com/dps4zteie/image/upload/v1675028165/Manhwashop/the_gamer_hxaigk.jpg', 'Seong Sang Yeong', 'Sang Ah', 'Fantasy ', 'L\'histoire se déroule en Corée du Sud. On suit les aventures de Han Jee Han qui a mystérieusement obtenu un pouvoir qui transforme sa vie en jeu vidéo. En effet, il peut voir les niveaux des gens ou augmenter ses compétences... Mais quel secret se cache derrière ce pouvoir incroyable nouvellement acquis ?', 29);

-- -- --------------------------------------------------------

-- --
-- -- Structure de la table `orders`
-- --

-- CREATE TABLE `orders` (
--   `orderId` int(11) NOT NULL,
--   `orderNumberStripe` varchar(150) NOT NULL,
--   `manhwaId` varchar(10) NOT NULL,
--   `quantity` int(50) NOT NULL,
--   `unitPrice` int(150) NOT NULL,
--   `userId` varchar(10) NOT NULL,
--   `orderedDate` date NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Déchargement des données de la table `orders`
-- --

-- INSERT INTO `orders` (`orderId`, `orderNumberStripe`, `manhwaId`, `quantity`, `unitPrice`, `userId`, `orderedDate`) VALUES
-- (3, 'tok_1MUzX5FRyAqwsrmB3Zs5xjUw', '1', 1, 23, '11', '2023-01-27'),
-- (4, 'tok_1MUzX5FRyAqwsrmB3Zs5xjUw', '2', 1, 23, '11', '2023-01-27'),
-- (5, 'tok_1MUzb7FRyAqwsrmBAeyoIB6Y', '6', 1, 23, '11', '2023-01-27'),
-- (6, 'tok_1MUzb7FRyAqwsrmBAeyoIB6Y', '8', 1, 23, '11', '2023-01-27'),
-- (7, 'tok_1MUzf0FRyAqwsrmBIjrabdFq', '9', 1, 23, '11', '2023-01-27'),
-- (8, 'tok_1MUzf0FRyAqwsrmBIjrabdFq', '8', 5, 23, '11', '2023-01-27'),
-- (9, 'tok_1MVMJLFRyAqwsrmB172zDajI', '3', 4, 23, '11', '2023-01-28'),
-- (10, 'tok_1MVMLyFRyAqwsrmBcOvyMQVH', '1', 1, 45, '11', '2023-01-28'),
-- (11, 'tok_1MVMLyFRyAqwsrmBcOvyMQVH', '2', 1, 35, '11', '2023-01-28'),
-- (12, 'tok_1MVOeYFRyAqwsrmB2iR4cm5j', '1', 6, 45, '11', '2023-01-29'),
-- (13, 'tok_1MVOeYFRyAqwsrmB2iR4cm5j', '2', 1, 35, '11', '2023-01-29'),
-- (14, 'tok_1MVdxwFRyAqwsrmBKUlWWPeV', '3', 2, 23, '11', '2023-01-29'),
-- (15, 'tok_1MVdxwFRyAqwsrmBKUlWWPeV', '4', 1, 19, '11', '2023-01-29'),
-- (16, 'tok_1MVdzWFRyAqwsrmBEzagxHrM', '1', 1, 45, '11', '2023-01-29'),
-- (17, 'tok_1MVdzWFRyAqwsrmBEzagxHrM', '2', 1, 35, '11', '2023-01-29'),
-- (18, 'tok_1MViExFRyAqwsrmBCmghK9Z2', '1', 1, 45, '11', '2023-01-29'),
-- (19, 'tok_1MViIRFRyAqwsrmBbc1g3kcU', '1', 1, 45, '11', '2023-01-29'),
-- (20, 'tok_1MViL2FRyAqwsrmB4vcLASoY', '6', 1, 29, '11', '2023-01-29'),
-- (21, 'tok_1MViM6FRyAqwsrmBbdPMsSJW', '9', 1, 23, '11', '2023-01-29'),
-- (22, 'tok_1MVsqPFRyAqwsrmBXcc9I6Ek', '1', 1, 45, '10', '2023-01-30'),
-- (23, 'tok_1MVsqPFRyAqwsrmBXcc9I6Ek', '2', 1, 35, '10', '2023-01-30'),
-- (24, 'tok_1MVsqUFRyAqwsrmBjMDnxLEt', '1', 1, 45, '10', '2023-01-30'),
-- (25, 'tok_1MVsqUFRyAqwsrmBjMDnxLEt', '2', 1, 35, '10', '2023-01-30'),
-- (26, 'tok_1MVul1FRyAqwsrmBc2TIpBWl', '8', 1, 27, '11', '2023-01-30'),
-- (27, 'tok_1MVul1FRyAqwsrmBc2TIpBWl', '10', 1, 23, '11', '2023-01-30'),
-- (28, 'tok_1MWHfaFRyAqwsrmB3pDgnVIL', '1', 2, 45, '11', '2023-01-31'),
-- (29, 'tok_1MWHfaFRyAqwsrmB3pDgnVIL', '2', 10, 35, '11', '2023-01-31'),
-- (30, 'tok_1MWHfaFRyAqwsrmB3pDgnVIL', '3', 2, 23, '11', '2023-01-31'),
-- (31, 'tok_1MWHgjFRyAqwsrmBs7CYq2lS', '15', 1, 34, '11', '2023-01-31'),
-- (32, 'tok_1MWHgjFRyAqwsrmBs7CYq2lS', '16', 1, 29, '11', '2023-01-31'),
-- (33, 'tok_1MWJQtFRyAqwsrmBuVcqOxWh', '20', 4, 29, '11', '2023-01-31'),
-- (34, 'tok_1MWJc0FRyAqwsrmBsuuqUTM8', '5', 1, 23, '11', '2023-01-31'),
-- (35, 'tok_1MWJiYFRyAqwsrmBagr2DeB2', '2', 4, 35, '11', '2023-01-31'),
-- (36, 'tok_1MegVEFRyAqwsrmBvkepKn8e', '3', 1, 23, '11', '2023-02-23'),
-- (37, 'tok_1MegVEFRyAqwsrmBvkepKn8e', '4', 1, 19, '11', '2023-02-23'),
-- (38, 'tok_1MegVEFRyAqwsrmBvkepKn8e', '9', 1, 23, '11', '2023-02-23'),
-- (39, 'tok_1Mf3KvFRyAqwsrmBMJ0CeXeu', '2', 1, 35, '11', '2023-02-24'),
-- (40, 'tok_1Mf3KvFRyAqwsrmBMJ0CeXeu', '3', 1, 23, '11', '2023-02-24'),
-- (41, 'tok_1Mf3KwFRyAqwsrmBBWUCP6A0', '2', 1, 35, '11', '2023-02-24'),
-- (42, 'tok_1Mf3KwFRyAqwsrmBBWUCP6A0', '3', 1, 23, '11', '2023-02-24'),
-- (43, 'tok_1Mf3KxFRyAqwsrmBQt34MKfK', '2', 1, 35, '11', '2023-02-24'),
-- (44, 'tok_1Mf3KxFRyAqwsrmBQt34MKfK', '3', 1, 23, '11', '2023-02-24');

-- -- --------------------------------------------------------

-- --
-- -- Structure de la table `payments`
-- --

-- CREATE TABLE `payments` (
--   `id` int(50) NOT NULL,
--   `userId` varchar(50) NOT NULL,
--   `orderNumberStripe` varchar(50) NOT NULL,
--   `amount` int(50) NOT NULL,
--   `paymentDate` datetime NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Déchargement des données de la table `payments`
-- --

-- INSERT INTO `payments` (`id`, `userId`, `orderNumberStripe`, `amount`, `paymentDate`) VALUES
-- (1, '11', 'tok_1MUulhFRyAqwsrmBrXXrWlol', 23, '2023-01-27 00:00:00'),
-- (2, '11', 'tok_1MUzRNFRyAqwsrmBVE87tkbZ', 46, '2023-01-27 00:00:00'),
-- (3, '11', 'tok_1MUzVQFRyAqwsrmBvDiQpDpq', 69, '2023-01-27 00:00:00'),
-- (4, '11', 'tok_1MUzX5FRyAqwsrmB3Zs5xjUw', 46, '2023-01-27 00:00:00'),
-- (5, '11', 'tok_1MUzb7FRyAqwsrmBAeyoIB6Y', 46, '2023-01-27 00:00:00'),
-- (6, '11', 'tok_1MUzf0FRyAqwsrmBIjrabdFq', 138, '2023-01-27 00:00:00'),
-- (7, '11', 'tok_1MVMJLFRyAqwsrmB172zDajI', 92, '2023-01-28 00:00:00'),
-- (8, '11', 'tok_1MVMLyFRyAqwsrmBcOvyMQVH', 80, '2023-01-28 00:00:00'),
-- (9, '11', 'tok_1MVOeYFRyAqwsrmB2iR4cm5j', 305, '2023-01-29 00:00:00'),
-- (10, '11', 'tok_1MVdxwFRyAqwsrmBKUlWWPeV', 65, '2023-01-29 00:00:00'),
-- (11, '11', 'tok_1MVdzWFRyAqwsrmBEzagxHrM', 80, '2023-01-29 00:00:00'),
-- (12, '11', 'tok_1MViExFRyAqwsrmBCmghK9Z2', 45, '2023-01-29 00:00:00'),
-- (13, '11', 'tok_1MViIRFRyAqwsrmBbc1g3kcU', 45, '2023-01-29 00:00:00'),
-- (14, '11', 'tok_1MViL2FRyAqwsrmB4vcLASoY', 29, '2023-01-29 00:00:00'),
-- (15, '11', 'tok_1MViM6FRyAqwsrmBbdPMsSJW', 23, '2023-01-29 00:00:00'),
-- (16, '10', 'tok_1MVsqPFRyAqwsrmBXcc9I6Ek', 80, '2023-01-30 00:00:00'),
-- (17, '10', 'tok_1MVsqUFRyAqwsrmBjMDnxLEt', 80, '2023-01-30 00:00:00'),
-- (18, '11', 'tok_1MVul1FRyAqwsrmBc2TIpBWl', 50, '2023-01-30 00:00:00'),
-- (19, '11', 'tok_1MWHfaFRyAqwsrmB3pDgnVIL', 486, '2023-01-31 00:00:00'),
-- (20, '11', 'tok_1MWHgjFRyAqwsrmBs7CYq2lS', 63, '2023-01-31 00:00:00'),
-- (21, '11', 'tok_1MWJQtFRyAqwsrmBuVcqOxWh', 117, '2023-01-31 00:00:00'),
-- (22, '11', 'tok_1MWJc0FRyAqwsrmBsuuqUTM8', 23, '2023-01-31 00:00:00'),
-- (23, '11', 'tok_1MWJiYFRyAqwsrmBagr2DeB2', 140, '2023-01-31 00:00:00'),
-- (24, '11', 'tok_1MegVEFRyAqwsrmBvkepKn8e', 65, '2023-02-23 00:00:00'),
-- (25, '11', 'tok_1Mf3KvFRyAqwsrmBMJ0CeXeu', 58, '2023-02-24 00:00:00'),
-- (26, '11', 'tok_1Mf3KwFRyAqwsrmBBWUCP6A0', 58, '2023-02-24 00:00:00'),
-- (27, '11', 'tok_1Mf3KxFRyAqwsrmBQt34MKfK', 58, '2023-02-24 00:00:00');

-- -- --------------------------------------------------------

-- --
-- -- Structure de la table `User`
-- --

-- CREATE TABLE `User` (
--   `id` int(11) NOT NULL,
--   `firstname` varchar(150) NOT NULL,
--   `name` varchar(50) NOT NULL,
--   `email` varchar(150) NOT NULL,
--   `password` varchar(150) NOT NULL,
--   `salt` varchar(150) NOT NULL,
--   `visited` varchar(535) DEFAULT NULL,
--   `orders` json DEFAULT NULL,
--   `cart` json DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Déchargement des données de la table `User`
-- --

-- INSERT INTO `User` (`id`, `firstname`, `name`, `email`, `password`, `salt`, `visited`, `orders`, `cart`) VALUES
-- (10, 'Yiyi', 'Chen', 'loveloveyy@hotmail.com', 'CGy6O/PEoZOEZ9HxqbCcxTy3HaahSqfLEwqEbOGquiI=', '40HLBfjHo5pSUkLY', NULL, NULL, NULL),
-- (11, 'Lou', 'Paul', 'lou@mail.com', 'pEdGhdFvup6KLmPcRkOf8ZMNRFURnJ5FCwpaECYOqXA=', 'o76KoV3IPCmsu5Cq', NULL, NULL, NULL),
-- (12, 'paul', 'dupont', 'paul@gmail.com', 'ChSZIhd8ftPggE9QEd2dbqHEGVIrV0eZj2DqVNoGXOA=', 'BVIVo7CkIaBoYxK6', NULL, NULL, NULL);

-- --
-- -- Index pour les tables déchargées
-- --

-- --
-- -- Index pour la table `Manhwa`
-- --
-- ALTER TABLE `Manhwa`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Index pour la table `orders`
-- --
-- ALTER TABLE `orders`
--   ADD PRIMARY KEY (`orderId`);

-- --
-- -- Index pour la table `payments`
-- --
-- ALTER TABLE `payments`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Index pour la table `User`
-- --
-- ALTER TABLE `User`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT pour les tables déchargées
-- --

-- --
-- -- AUTO_INCREMENT pour la table `Manhwa`
-- --
-- ALTER TABLE `Manhwa`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

-- --
-- -- AUTO_INCREMENT pour la table `orders`
-- --
-- ALTER TABLE `orders`
--   MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

-- --
-- -- AUTO_INCREMENT pour la table `payments`
-- --
-- ALTER TABLE `payments`
--   MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

-- --
-- -- AUTO_INCREMENT pour la table `User`
-- --
-- ALTER TABLE `User`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
-- COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

________________________________________________________________________________________________

-- -- phpMyAdmin SQL Dump
-- -- version 5.2.0
-- -- https://www.phpmyadmin.net/
-- --
-- -- Hôte : localhost:8889
-- -- Généré le : mer. 03 jan. 2024 à 11:28
-- -- Version du serveur : 5.7.39
-- -- Version de PHP : 7.4.33

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";


-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;

-- --
-- -- Base de données : `Manhwa_Shop`
-- --

-- -- --------------------------------------------------------

-- --
-- -- Structure de la table `Manhwa`
-- --

-- CREATE TABLE `Manhwa` (
--   `id` int(11) NOT NULL,
--   `name` varchar(535) NOT NULL,
--   `img` varchar(150) NOT NULL,
--   `author` varchar(535) NOT NULL,
--   `artist` varchar(535) DEFAULT NULL,
--   `genre` varchar(535) NOT NULL,
--   `resume` text NOT NULL,
--   `price` int(255) NOT NULL DEFAULT '23'
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Déchargement des données de la table `Manhwa`
-- --

-- INSERT INTO `Manhwa` (`id`, `name`, `img`, `author`, `artist`, `genre`, `resume`, `price`) VALUES
-- (1, 'Tower of God', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902077/Manhwashop/towerofgod_ak84zt.webp', ' SIU', ' SIU', 'Action', 'Tower of God est un webtoon sud-coréen, écrit et dessiné par SIU, de son vrai nom Lee Jong-hui. Il fait partie d\'un univers créé par SIU appelé Talse User Story, qui regroupe plusieurs œuvres du même auteur. Il est édité par Naver, et publié gratuitement sur sa plateforme Naver Webtoon.', 45),
-- (2, 'The God of High School', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902263/Manhwashop/thegodofhighschool_sdjs2y.webp', 'Park Yong-Je', '', 'Action', 'The God Of High School ou GOH est un manhwa écrit par Park Yong-je. Publié depuis le 8 avril 2011 par Naver et paraissant tous les mardis et samedis à 16h. Le manhwa a été l\'un des premiers webtoons à recevoir une traduction anglaise lors du lancement du site web et application Naver Webtoon en juillet 2014.', 35),
-- (3, 'True Beauty', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902552/Manhwashop/True-Beauty_ed9ohc.jpg', 'Yaongyi ', NULL, 'Romance', 'Complexée par son apparence, Im Joo-Kyung a pris l\'habitude de se cacher derrière une épaisse couche de maquillage. Dans sa nouvelle école, elle rencontre Lee Soo-Ho, un camarade de classe qui devient rapidement le seul à connaître son vrai visage.', 23),
-- (4, 'Love Alarm', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902885/Manhwashop/Love_Alarm_kqo34e.webp', 'Chon Kye-young', NULL, 'Romance', 'A young woman called Jojo revisits her high school days when a revolutionary new app was sweeping the masses - Love Alarm: the app that tells you when someone in a 10-meter radius has a crush on you! Sparks fly and rumours run wild as people wonder if this could be the real deal - but what will it mean for Jojo, her beautiful but evil cousin, and the mysterious heartthrob in their year?', 19),
-- (5, 'Nano Machine', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/nano-machine_kvhl0d.png', 'Hanjung Moonnight', NULL, 'Action', 'After being held in disdain and having his life put in danger, an orphan from the Demonic Cult, Cheon Yeo-Woon, has an unexpected visit from his descendant from the future who inserts a nano machine into Cheon Yeo-Woon’s body, which drastically changes Cheon Yeo-Woon’s life after its activation. The story of Cheon Yeo-Woon’s journey of bypassing the Demonic Cult and rising to become the best martial artist has just begun.', 23),
-- (6, 'The Gamer', 'https://res.cloudinary.com/dps4zteie/image/upload/v1675028165/Manhwashop/the_gamer_hxaigk.jpg', 'Seong Sang Yeong', 'Sang Ah', 'Fantasy ', 'L\'histoire se déroule en Corée du Sud. On suit les aventures de Han Jee Han qui a mystérieusement obtenu un pouvoir qui transforme sa vie en jeu vidéo. En effet, il peut voir les niveaux des gens ou augmenter ses compétences... Mais quel secret se cache derrière ce pouvoir incroyable nouvellement acquis ?', 29),
-- (8, 'The Beginning After the End', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/the-beginning-after-the-end_fpd4tn.png', 'TurtleMe', 'Fuyuki23', 'Adventure', 'King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will.\r\n\r\nReincarnated into a new world filled with magic and monsters, the king has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.', 27),
-- (9, 'The Chronicles of Heavenly Demon', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/chronicles-of-heavenly-demon_pdfvgx.jpg', 'Ilhwang', 'Gom-guk', 'Martial Arts', 'In an ancient world where martial artists reign supreme, Unseong can only watch as his master is brutally beaten to death after a false accusation of practicing forbidden demonic arts. Even after a valiant fight, he fails to kill those responsible and faces his own end. But fate has other plans… Instead of taking his last breath, he awakens as a child, training to be an elite soldier of a demonic sect. Now Unseong must embrace the demonic arts and harness power in his ultimate quest for revenge.', 23),
-- (10, 'Second Life Ranker', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/second-life-ranker_uanr9s.png', 'Sadoyeon', NULL, 'Martial Arts', 'Yeon-woo had a twin brother who disappeared five years ago. One day, a pocket watch left by his brother returned to his possession. Inside, he found a hidden diary in which was recorded “By the time you hear this, I guess I will be already dead….”\r\nObelisk, the Tower of the Sun God, a world where several universes and dimensions intersect. In this world, his brother had fallen victim to betrayal while climbing up the tower. After learning the truth, Yeon-woo decided to climb the tower along with his brother’s diary.\r\nYeon-woo then proceeds to go through the same trials and fights as his younger brother did as an anonymous player. His goal? Defeating the Obelisk Tower and get revenge for his brother.', 23),
-- (11, 'The Deadbeat Noble', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/reformation-of-the-deadbeat-noble_bkgehv.jpg', 'Second Star', 'Dodomoon', 'Fantasy', 'After witnessing the shocking death of his mother, young Airen Farreira uses sleep to escape his painful reality, earning him the nickname, “the lazy lord”. Yet, in spite of others’ jeers and whispers, Airen has no intention of changing his ways. But when he awakens one day from a dream about a mysterious swordsman, his life’s trajectory takes a complete turn…', 32),
-- (12, 'The Promised Neverland', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674929662/Manhwashop/thepromiseofneverland_dgbjeq.jpg', 'Kaiu Shirai', '', 'Fantasy', 'The Promised Neverland est une série japonaise de mangas écrits par Kaiu Shirai et dessinés par Posuka Demizu. Il est prépublié entre août 2016 et juin 2020 dans le magazine Weekly Shōnen Jump de l\'éditeur Shūeisha.', 23),
-- (13, 'Sweet Home', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674905988/Manhwashop/sweet-home_zoz2o1.jpg', 'Kim Carnby', 'Youngchan Hwang', 'Action', 'Après une tragédie familiale inattendue, un lycéen solitaire est obligé de quitter son domicile - seulement pour faire face à quelque chose de beaucoup plus effrayant: une réalité où des monstres tentent d’éliminer l’humanité. Il doit maintenant se battre aux côtés des héros pour tenter de sauver le monde avant qu’il ne soit trop tard.\r\n\r\n', 20),
-- (15, 'Noblesse', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674906474/Manhwashop/noblesse_jypsoz.webp', 'Son Jae Ho', 'Lee Gwang Su', 'Comedy', 'Après un sommeil de plus de 800 ans, Cadis Etrama Di Raizel, alias Rai, n\'a pas connaissance des derniers progrès et avancées scientifiques de l\'Humanité. Tout en cherchant à apprendre à se familiariser avec l\'époque dans laquelle il se réveille, il décide d\'aller dans une école sans savoir qu\'un de ses fidèles serviteurs, Frankenstein, est devenu directeur d\'une école sud-coréenne, et décide de l\'inscrire dans son école afin que son maître puisse apprendre d\'avantage sur le nouveau monde. Il devient alors rapidement ami avec Shin Woo, un adolescent sportif, Ik Han, un passionné d\'informatique et Yu Na.', 34),
-- (16, 'Solo Leveling', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674907273/Manhwashop/sololeveling_oq6zmk.jpg', 'Chu Gong', 'Jang Seong Rak', 'Action', 'Dix ans auparavant, des portails ont commencé à apparaître un peu partout dans le monde. Ces portails ont la particularité de connecter le monde à d\'autres dimensions, donjons ou mondes parallèles. En même temps, certaines personnes ont développé des capacités afin de pouvoir chasser ces portails. On appelle ceux qui reçoivent un Éveil, des Chasseurs.', 29),
-- (17, 'Cheese in the Trap', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674908253/Manhwashop/cheese_in_the_trap_tc7gk2.jpg', 'Soonkki', 'Soonkki', 'Comedy', 'Hong Seol, jeune étudiante coréenne, revient à l\'université après un an de pause. Elle y fait la rencontre de Yoo Jung, un aîné connu comme étant « M. Parfait ». Mais aux yeux de Seol, le jeune homme a un comportement équivoque.', 30),
-- (18, 'Peerless Dad', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/peerless_dad_v1f11q.jpg', 'NO Kyoungchan', 'Lee Hyunseok', 'Martial Arts', 'Noh Gajang is a strong, dedicated, and humble man, with much respect for the martial arts. After the death of his lovely wife, this muscle-for-hire just wants an easy job that allows him to be a good father to his three little babies. He’s even happy to pull guard duty and fend off amateur fighters if it means he can return home safely each night. But when a creepy cult starts stealing children from the city, Gajang must step up to the challenge and discover his true warrior potential.', 23),
-- (19, 'Cultivation Chat Group', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/cultivation-chat-group_kbc09l.jpg', 'Legend of the Paladin', NULL, 'Adventure', 'One day, Song Shuhang was suddenly added to a chat group with many seniors that suffered from chuuni disease. The people inside the group would call each other ‘Fellow Daoist’ and had all different kinds of titles: Palace Master, Cave Lord, True Monarch, Immortal Master, etc. Even the pet of the founder of the group that had run away from home was called ‘monster dog’. They would talk all day about pill refining, exploring ancient ruins, or share their experience on techniques.\r\nHowever, after lurking inside the group for a while, he discovered that not all was what it seemed...', 29),
-- (20, 'Martial God Asura', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/martial-god-asura_yc4qp4.jpg', 'Pikapi et Shan Liang De Mi Feng', 'Pikapi et Shan Liang De Mi Feng', 'Adventure', 'The young Chu Feng was always seen as an insult to the Chu family due to his weak physique. One day he decides he’s had enough of it, and in order to reclaim his father’s name and save his mother, he decides to get stronger no matter what.\r\n\r\nXiuluo Wushen\r\n修罗武神', 29),
-- (21, 'The Gamer', 'https://res.cloudinary.com/dps4zteie/image/upload/v1675028165/Manhwashop/the_gamer_hxaigk.jpg', 'Seong Sang Yeong', 'Sang Ah', 'Fantasy ', 'L\'histoire se déroule en Corée du Sud. On suit les aventures de Han Jee Han qui a mystérieusement obtenu un pouvoir qui transforme sa vie en jeu vidéo. En effet, il peut voir les niveaux des gens ou augmenter ses compétences... Mais quel secret se cache derrière ce pouvoir incroyable nouvellement acquis ?', 29);

-- -- --------------------------------------------------------

-- --
-- -- Structure de la table `orders`
-- --

-- CREATE TABLE `orders` (
--   `orderId` int(11) NOT NULL,
--   `orderNumberStripe` varchar(150) NOT NULL,
--   `manhwaId` varchar(10) NOT NULL,
--   `quantity` int(50) NOT NULL,
--   `unitPrice` int(150) NOT NULL,
--   `userId` varchar(10) NOT NULL,
--   `orderedDate` date NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Déchargement des données de la table `orders`
-- --

-- INSERT INTO `orders` (`orderId`, `orderNumberStripe`, `manhwaId`, `quantity`, `unitPrice`, `userId`, `orderedDate`) VALUES
-- (3, 'tok_1MUzX5FRyAqwsrmB3Zs5xjUw', '1', 1, 23, '11', '2023-01-27'),
-- (4, 'tok_1MUzX5FRyAqwsrmB3Zs5xjUw', '2', 1, 23, '11', '2023-01-27'),
-- (5, 'tok_1MUzb7FRyAqwsrmBAeyoIB6Y', '6', 1, 23, '11', '2023-01-27'),
-- (6, 'tok_1MUzb7FRyAqwsrmBAeyoIB6Y', '8', 1, 23, '11', '2023-01-27'),
-- (7, 'tok_1MUzf0FRyAqwsrmBIjrabdFq', '9', 1, 23, '11', '2023-01-27'),
-- (8, 'tok_1MUzf0FRyAqwsrmBIjrabdFq', '8', 5, 23, '11', '2023-01-27'),
-- (9, 'tok_1MVMJLFRyAqwsrmB172zDajI', '3', 4, 23, '11', '2023-01-28'),
-- (10, 'tok_1MVMLyFRyAqwsrmBcOvyMQVH', '1', 1, 45, '11', '2023-01-28'),
-- (11, 'tok_1MVMLyFRyAqwsrmBcOvyMQVH', '2', 1, 35, '11', '2023-01-28'),
-- (12, 'tok_1MVOeYFRyAqwsrmB2iR4cm5j', '1', 6, 45, '11', '2023-01-29'),
-- (13, 'tok_1MVOeYFRyAqwsrmB2iR4cm5j', '2', 1, 35, '11', '2023-01-29'),
-- (14, 'tok_1MVdxwFRyAqwsrmBKUlWWPeV', '3', 2, 23, '11', '2023-01-29'),
-- (15, 'tok_1MVdxwFRyAqwsrmBKUlWWPeV', '4', 1, 19, '11', '2023-01-29'),
-- (16, 'tok_1MVdzWFRyAqwsrmBEzagxHrM', '1', 1, 45, '11', '2023-01-29'),
-- (17, 'tok_1MVdzWFRyAqwsrmBEzagxHrM', '2', 1, 35, '11', '2023-01-29'),
-- (18, 'tok_1MViExFRyAqwsrmBCmghK9Z2', '1', 1, 45, '11', '2023-01-29'),
-- (19, 'tok_1MViIRFRyAqwsrmBbc1g3kcU', '1', 1, 45, '11', '2023-01-29'),
-- (20, 'tok_1MViL2FRyAqwsrmB4vcLASoY', '6', 1, 29, '11', '2023-01-29'),
-- (21, 'tok_1MViM6FRyAqwsrmBbdPMsSJW', '9', 1, 23, '11', '2023-01-29'),
-- (22, 'tok_1MVsqPFRyAqwsrmBXcc9I6Ek', '1', 1, 45, '10', '2023-01-30'),
-- (23, 'tok_1MVsqPFRyAqwsrmBXcc9I6Ek', '2', 1, 35, '10', '2023-01-30'),
-- (24, 'tok_1MVsqUFRyAqwsrmBjMDnxLEt', '1', 1, 45, '10', '2023-01-30'),
-- (25, 'tok_1MVsqUFRyAqwsrmBjMDnxLEt', '2', 1, 35, '10', '2023-01-30'),
-- (26, 'tok_1MVul1FRyAqwsrmBc2TIpBWl', '8', 1, 27, '11', '2023-01-30'),
-- (27, 'tok_1MVul1FRyAqwsrmBc2TIpBWl', '10', 1, 23, '11', '2023-01-30'),
-- (28, 'tok_1MWHfaFRyAqwsrmB3pDgnVIL', '1', 2, 45, '11', '2023-01-31'),
-- (29, 'tok_1MWHfaFRyAqwsrmB3pDgnVIL', '2', 10, 35, '11', '2023-01-31'),
-- (30, 'tok_1MWHfaFRyAqwsrmB3pDgnVIL', '3', 2, 23, '11', '2023-01-31'),
-- (31, 'tok_1MWHgjFRyAqwsrmBs7CYq2lS', '15', 1, 34, '11', '2023-01-31'),
-- (32, 'tok_1MWHgjFRyAqwsrmBs7CYq2lS', '16', 1, 29, '11', '2023-01-31'),
-- (33, 'tok_1MWJQtFRyAqwsrmBuVcqOxWh', '20', 4, 29, '11', '2023-01-31'),
-- (34, 'tok_1MWJc0FRyAqwsrmBsuuqUTM8', '5', 1, 23, '11', '2023-01-31'),
-- (35, 'tok_1MWJiYFRyAqwsrmBagr2DeB2', '2', 4, 35, '11', '2023-01-31'),
-- (36, 'tok_1MegVEFRyAqwsrmBvkepKn8e', '3', 1, 23, '11', '2023-02-23'),
-- (37, 'tok_1MegVEFRyAqwsrmBvkepKn8e', '4', 1, 19, '11', '2023-02-23'),
-- (38, 'tok_1MegVEFRyAqwsrmBvkepKn8e', '9', 1, 23, '11', '2023-02-23'),
-- (39, 'tok_1Mf3KvFRyAqwsrmBMJ0CeXeu', '2', 1, 35, '11', '2023-02-24'),
-- (40, 'tok_1Mf3KvFRyAqwsrmBMJ0CeXeu', '3', 1, 23, '11', '2023-02-24'),
-- (41, 'tok_1Mf3KwFRyAqwsrmBBWUCP6A0', '2', 1, 35, '11', '2023-02-24'),
-- (42, 'tok_1Mf3KwFRyAqwsrmBBWUCP6A0', '3', 1, 23, '11', '2023-02-24'),
-- (43, 'tok_1Mf3KxFRyAqwsrmBQt34MKfK', '2', 1, 35, '11', '2023-02-24'),
-- (44, 'tok_1Mf3KxFRyAqwsrmBQt34MKfK', '3', 1, 23, '11', '2023-02-24'),
-- (45, 'tok_1OUBH3FRyAqwsrmBIrcH9zoP', '3', 1, 23, '20', '2024-01-02'),
-- (46, 'tok_1OUBH3FRyAqwsrmBIrcH9zoP', '4', 1, 19, '20', '2024-01-02'),
-- (47, 'tok_1OUBH5FRyAqwsrmBVWuhekfH', '4', 1, 19, '20', '2024-01-02'),
-- (48, 'tok_1OUBH5FRyAqwsrmBVWuhekfH', '3', 1, 23, '20', '2024-01-02'),
-- (49, 'tok_1OUCkwFRyAqwsrmBVJghOO7f', '2', 1, 35, '20', '2024-01-02'),
-- (50, 'tok_1OUSQpFRyAqwsrmB0fUsjgty', '19', 1, 29, '20', '2024-01-03'),
-- (51, 'tok_1OUSQpFRyAqwsrmB0fUsjgty', '21', 1, 29, '20', '2024-01-03');

-- -- --------------------------------------------------------

-- --
-- -- Structure de la table `payments`
-- --

-- CREATE TABLE `payments` (
--   `id` int(50) NOT NULL,
--   `userId` varchar(50) NOT NULL,
--   `orderNumberStripe` varchar(50) NOT NULL,
--   `amount` int(50) NOT NULL,
--   `paymentDate` date NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Déchargement des données de la table `payments`
-- --

-- INSERT INTO `payments` (`id`, `userId`, `orderNumberStripe`, `amount`, `paymentDate`) VALUES
-- (1, '11', 'tok_1MUulhFRyAqwsrmBrXXrWlol', 23, '2023-01-27'),
-- (2, '11', 'tok_1MUzRNFRyAqwsrmBVE87tkbZ', 46, '2023-01-27'),
-- (3, '11', 'tok_1MUzVQFRyAqwsrmBvDiQpDpq', 69, '2023-01-27'),
-- (4, '11', 'tok_1MUzX5FRyAqwsrmB3Zs5xjUw', 46, '2023-01-27'),
-- (5, '11', 'tok_1MUzb7FRyAqwsrmBAeyoIB6Y', 46, '2023-01-27'),
-- (6, '11', 'tok_1MUzf0FRyAqwsrmBIjrabdFq', 138, '2023-01-27'),
-- (7, '11', 'tok_1MVMJLFRyAqwsrmB172zDajI', 92, '2023-01-28'),
-- (8, '11', 'tok_1MVMLyFRyAqwsrmBcOvyMQVH', 80, '2023-01-28'),
-- (9, '11', 'tok_1MVOeYFRyAqwsrmB2iR4cm5j', 305, '2023-01-29'),
-- (10, '11', 'tok_1MVdxwFRyAqwsrmBKUlWWPeV', 65, '2023-01-29'),
-- (11, '11', 'tok_1MVdzWFRyAqwsrmBEzagxHrM', 80, '2023-01-29'),
-- (12, '11', 'tok_1MViExFRyAqwsrmBCmghK9Z2', 45, '2023-01-29'),
-- (13, '11', 'tok_1MViIRFRyAqwsrmBbc1g3kcU', 45, '2023-01-29'),
-- (14, '11', 'tok_1MViL2FRyAqwsrmB4vcLASoY', 29, '2023-01-29'),
-- (15, '11', 'tok_1MViM6FRyAqwsrmBbdPMsSJW', 23, '2023-01-29'),
-- (16, '10', 'tok_1MVsqPFRyAqwsrmBXcc9I6Ek', 80, '2023-01-30'),
-- (17, '10', 'tok_1MVsqUFRyAqwsrmBjMDnxLEt', 80, '2023-01-30'),
-- (18, '11', 'tok_1MVul1FRyAqwsrmBc2TIpBWl', 50, '2023-01-30'),
-- (19, '11', 'tok_1MWHfaFRyAqwsrmB3pDgnVIL', 486, '2023-01-31'),
-- (20, '11', 'tok_1MWHgjFRyAqwsrmBs7CYq2lS', 63, '2023-01-31'),
-- (21, '11', 'tok_1MWJQtFRyAqwsrmBuVcqOxWh', 117, '2023-01-31'),
-- (22, '11', 'tok_1MWJc0FRyAqwsrmBsuuqUTM8', 23, '2023-01-31'),
-- (23, '11', 'tok_1MWJiYFRyAqwsrmBagr2DeB2', 140, '2023-01-31'),
-- (24, '11', 'tok_1MegVEFRyAqwsrmBvkepKn8e', 65, '2023-02-23'),
-- (25, '11', 'tok_1Mf3KvFRyAqwsrmBMJ0CeXeu', 58, '2023-02-24'),
-- (26, '11', 'tok_1Mf3KwFRyAqwsrmBBWUCP6A0', 58, '2023-02-24'),
-- (27, '11', 'tok_1Mf3KxFRyAqwsrmBQt34MKfK', 58, '2023-02-24'),
-- (28, '20', 'tok_1OUBH3FRyAqwsrmBIrcH9zoP', 42, '2024-01-02'),
-- (29, '20', 'tok_1OUBH5FRyAqwsrmBVWuhekfH', 42, '2024-01-02'),
-- (30, '20', 'tok_1OUCkwFRyAqwsrmBVJghOO7f', 35, '2024-01-02'),
-- (31, '20', 'tok_1OUSQpFRyAqwsrmB0fUsjgty', 58, '2024-01-03');

-- -- --------------------------------------------------------

-- --
-- -- Structure de la table `User`
-- --

-- CREATE TABLE `User` (
--   `id` int(11) NOT NULL,
--   `firstname` varchar(150) NOT NULL,
--   `name` varchar(50) NOT NULL,
--   `email` varchar(150) NOT NULL,
--   `password` varchar(150) NOT NULL,
--   `salt` varchar(150) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Déchargement des données de la table `User`
-- --

-- INSERT INTO `User` (`id`, `firstname`, `name`, `email`, `password`, `salt`) VALUES
-- (11, 'Lou', 'Paul', 'lou@mail.com', 'pEdGhdFvup6KLmPcRkOf8ZMNRFURnJ5FCwpaECYOqXA=', 'o76KoV3IPCmsu5Cq'),
-- (12, 'paul', 'dupont', 'paul@gmail.com', 'ChSZIhd8ftPggE9QEd2dbqHEGVIrV0eZj2DqVNoGXOA=', 'BVIVo7CkIaBoYxK6'),
-- (14, 'paul', 'Gauguin', 'gauguin@gmail.com', 'OnJDoaUXPlSt8VkwRGzYQSBdXSMudzGmWZs0kDfNKLQ=', '2arM__MGQwm563LX'),
-- (15, 'Vincent', 'Chen', 'chen@mail.com', 'Him3thl29xdKIxW3RsFZMdt3+mzBElLuQijkq94hKEA=', '1a6HgDYfmDbdVSzZ'),
-- (16, 'Long', 'Long', 'long@gmail.com', 'aoQClMFGpm9YgaYDEJ96u2BYucfvmchyaht40ZVdeuc=', 'yTtIY9YOuAap2Eru'),
-- (17, 'Fou', 'Diu', 'foudiu@gmail.com', 'Id0/TmI4UkU8+bWfwPqdXQiTnql7972pqJe8Tagfl4A=', 'vCOl_-Hf-1qzSWQh'),
-- (18, 'Hong', 'Feng', 'fenghong@gmail.com', 'BgW8EJoSliaMr2tlxkfaTVuLpO1qWXqWkWHivLYpYyc=', 'ddOkK52DvYLEtdpP'),
-- (19, 'Hai', 'Chen', 'chenhai@mail.com', 'jHZdcuxsNqTzwCmjCh5OHOFRK89a0jEej1bXBJ6/hvY=', 'R0sdMYDbVINN9p3-'),
-- (20, 'Yiyi', 'Chen', 'loveloveyy@hotmail.com', 'HF0hhlZU71ijfEHCg0g1Wk/lDc6TQx00TSwPq/D0Ijs=', '65X0sSQ-BZUJzumF');

-- --
-- -- Index pour les tables déchargées
-- --

-- --
-- -- Index pour la table `Manhwa`
-- --
-- ALTER TABLE `Manhwa`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Index pour la table `orders`
-- --
-- ALTER TABLE `orders`
--   ADD PRIMARY KEY (`orderId`);

-- --
-- -- Index pour la table `payments`
-- --
-- ALTER TABLE `payments`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Index pour la table `User`
-- --
-- ALTER TABLE `User`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT pour les tables déchargées
-- --

-- --
-- -- AUTO_INCREMENT pour la table `Manhwa`
-- --
-- ALTER TABLE `Manhwa`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

-- --
-- -- AUTO_INCREMENT pour la table `orders`
-- --
-- ALTER TABLE `orders`
--   MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

-- --
-- -- AUTO_INCREMENT pour la table `payments`
-- --
-- ALTER TABLE `payments`
--   MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

-- --
-- -- AUTO_INCREMENT pour la table `User`
-- --
-- ALTER TABLE `User`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
-- COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mar. 09 jan. 2024 à 16:12
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Manhwa_Shop`
--

-- --------------------------------------------------------

--
-- Structure de la table `Manhwa`
--

CREATE TABLE `Manhwa` (
  `id` int(11) NOT NULL,
  `name` varchar(535) NOT NULL,
  `img` varchar(150) NOT NULL,
  `author` varchar(535) NOT NULL,
  `artist` varchar(535) DEFAULT NULL,
  `genre` varchar(535) NOT NULL,
  `resume` text NOT NULL,
  `price` int(255) NOT NULL DEFAULT '23'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Manhwa`
--

INSERT INTO `Manhwa` (`id`, `name`, `img`, `author`, `artist`, `genre`, `resume`, `price`) VALUES
(1, 'Tower of God', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902077/Manhwashop/towerofgod_ak84zt.webp', ' SIU', ' SIU', 'Action', 'Tower of God est un webtoon sud-coréen, écrit et dessiné par SIU, de son vrai nom Lee Jong-hui. Il fait partie d\'un univers créé par SIU appelé Talse User Story, qui regroupe plusieurs œuvres du même auteur. Il est édité par Naver, et publié gratuitement sur sa plateforme Naver Webtoon.', 45),
(2, 'The God of High School', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902263/Manhwashop/thegodofhighschool_sdjs2y.webp', 'Park Yong-Je', '', 'Action', 'The God Of High School ou GOH est un manhwa écrit par Park Yong-je. Publié depuis le 8 avril 2011 par Naver et paraissant tous les mardis et samedis à 16h. Le manhwa a été l\'un des premiers webtoons à recevoir une traduction anglaise lors du lancement du site web et application Naver Webtoon en juillet 2014.', 35),
(3, 'True Beauty', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902552/Manhwashop/True-Beauty_ed9ohc.jpg', 'Yaongyi ', NULL, 'Romance', 'Complexée par son apparence, Im Joo-Kyung a pris l\'habitude de se cacher derrière une épaisse couche de maquillage. Dans sa nouvelle école, elle rencontre Lee Soo-Ho, un camarade de classe qui devient rapidement le seul à connaître son vrai visage.', 23),
(4, 'Love Alarm', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674902885/Manhwashop/Love_Alarm_kqo34e.webp', 'Chon Kye-young', NULL, 'Romance', 'A young woman called Jojo revisits her high school days when a revolutionary new app was sweeping the masses - Love Alarm: the app that tells you when someone in a 10-meter radius has a crush on you! Sparks fly and rumours run wild as people wonder if this could be the real deal - but what will it mean for Jojo, her beautiful but evil cousin, and the mysterious heartthrob in their year?', 19),
(5, 'Nano Machine', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/nano-machine_kvhl0d.png', 'Hanjung Moonnight', NULL, 'Action', 'After being held in disdain and having his life put in danger, an orphan from the Demonic Cult, Cheon Yeo-Woon, has an unexpected visit from his descendant from the future who inserts a nano machine into Cheon Yeo-Woon’s body, which drastically changes Cheon Yeo-Woon’s life after its activation. The story of Cheon Yeo-Woon’s journey of bypassing the Demonic Cult and rising to become the best martial artist has just begun.', 23),
(6, 'The Gamer', 'https://res.cloudinary.com/dps4zteie/image/upload/v1675028165/Manhwashop/the_gamer_hxaigk.jpg', 'Seong Sang Yeong', 'Sang Ah', 'Fantasy ', 'L\'histoire se déroule en Corée du Sud. On suit les aventures de Han Jee Han qui a mystérieusement obtenu un pouvoir qui transforme sa vie en jeu vidéo. En effet, il peut voir les niveaux des gens ou augmenter ses compétences... Mais quel secret se cache derrière ce pouvoir incroyable nouvellement acquis ?', 29),
(8, 'The Beginning After the End', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/the-beginning-after-the-end_fpd4tn.png', 'TurtleMe', 'Fuyuki23', 'Adventure', 'King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will.\r\n\r\nReincarnated into a new world filled with magic and monsters, the king has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.', 27),
(9, 'The Chronicles of Heavenly Demon', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/chronicles-of-heavenly-demon_pdfvgx.jpg', 'Ilhwang', 'Gom-guk', 'Martial Arts', 'In an ancient world where martial artists reign supreme, Unseong can only watch as his master is brutally beaten to death after a false accusation of practicing forbidden demonic arts. Even after a valiant fight, he fails to kill those responsible and faces his own end. But fate has other plans… Instead of taking his last breath, he awakens as a child, training to be an elite soldier of a demonic sect. Now Unseong must embrace the demonic arts and harness power in his ultimate quest for revenge.', 23),
(10, 'Second Life Ranker', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/second-life-ranker_uanr9s.png', 'Sadoyeon', NULL, 'Martial Arts', 'Yeon-woo had a twin brother who disappeared five years ago. One day, a pocket watch left by his brother returned to his possession. Inside, he found a hidden diary in which was recorded “By the time you hear this, I guess I will be already dead….”\r\nObelisk, the Tower of the Sun God, a world where several universes and dimensions intersect. In this world, his brother had fallen victim to betrayal while climbing up the tower. After learning the truth, Yeon-woo decided to climb the tower along with his brother’s diary.\r\nYeon-woo then proceeds to go through the same trials and fights as his younger brother did as an anonymous player. His goal? Defeating the Obelisk Tower and get revenge for his brother.', 23),
(11, 'The Deadbeat Noble', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/reformation-of-the-deadbeat-noble_bkgehv.jpg', 'Second Star', 'Dodomoon', 'Fantasy', 'After witnessing the shocking death of his mother, young Airen Farreira uses sleep to escape his painful reality, earning him the nickname, “the lazy lord”. Yet, in spite of others’ jeers and whispers, Airen has no intention of changing his ways. But when he awakens one day from a dream about a mysterious swordsman, his life’s trajectory takes a complete turn…', 32),
(12, 'The Promised Neverland', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674929662/Manhwashop/thepromiseofneverland_dgbjeq.jpg', 'Kaiu Shirai', '', 'Fantasy', 'The Promised Neverland est une série japonaise de mangas écrits par Kaiu Shirai et dessinés par Posuka Demizu. Il est prépublié entre août 2016 et juin 2020 dans le magazine Weekly Shōnen Jump de l\'éditeur Shūeisha.', 23),
(13, 'Sweet Home', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674905988/Manhwashop/sweet-home_zoz2o1.jpg', 'Kim Carnby', 'Youngchan Hwang', 'Action', 'Après une tragédie familiale inattendue, un lycéen solitaire est obligé de quitter son domicile - seulement pour faire face à quelque chose de beaucoup plus effrayant: une réalité où des monstres tentent d’éliminer l’humanité. Il doit maintenant se battre aux côtés des héros pour tenter de sauver le monde avant qu’il ne soit trop tard.\r\n\r\n', 20),
(15, 'Noblesse', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674906474/Manhwashop/noblesse_jypsoz.webp', 'Son Jae Ho', 'Lee Gwang Su', 'Comedy', 'Après un sommeil de plus de 800 ans, Cadis Etrama Di Raizel, alias Rai, n\'a pas connaissance des derniers progrès et avancées scientifiques de l\'Humanité. Tout en cherchant à apprendre à se familiariser avec l\'époque dans laquelle il se réveille, il décide d\'aller dans une école sans savoir qu\'un de ses fidèles serviteurs, Frankenstein, est devenu directeur d\'une école sud-coréenne, et décide de l\'inscrire dans son école afin que son maître puisse apprendre d\'avantage sur le nouveau monde. Il devient alors rapidement ami avec Shin Woo, un adolescent sportif, Ik Han, un passionné d\'informatique et Yu Na.', 34),
(16, 'Solo Leveling', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674907273/Manhwashop/sololeveling_oq6zmk.jpg', 'Chu Gong', 'Jang Seong Rak', 'Action', 'Dix ans auparavant, des portails ont commencé à apparaître un peu partout dans le monde. Ces portails ont la particularité de connecter le monde à d\'autres dimensions, donjons ou mondes parallèles. En même temps, certaines personnes ont développé des capacités afin de pouvoir chasser ces portails. On appelle ceux qui reçoivent un Éveil, des Chasseurs.', 29),
(17, 'Cheese in the Trap', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674908253/Manhwashop/cheese_in_the_trap_tc7gk2.jpg', 'Soonkki', 'Soonkki', 'Comedy', 'Hong Seol, jeune étudiante coréenne, revient à l\'université après un an de pause. Elle y fait la rencontre de Yoo Jung, un aîné connu comme étant « M. Parfait ». Mais aux yeux de Seol, le jeune homme a un comportement équivoque.', 30),
(18, 'Peerless Dad', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/peerless_dad_v1f11q.jpg', 'NO Kyoungchan', 'Lee Hyunseok', 'Martial Arts', 'Noh Gajang is a strong, dedicated, and humble man, with much respect for the martial arts. After the death of his lovely wife, this muscle-for-hire just wants an easy job that allows him to be a good father to his three little babies. He’s even happy to pull guard duty and fend off amateur fighters if it means he can return home safely each night. But when a creepy cult starts stealing children from the city, Gajang must step up to the challenge and discover his true warrior potential.', 23),
(19, 'Cultivation Chat Group', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/cultivation-chat-group_kbc09l.jpg', 'Legend of the Paladin', NULL, 'Adventure', 'One day, Song Shuhang was suddenly added to a chat group with many seniors that suffered from chuuni disease. The people inside the group would call each other ‘Fellow Daoist’ and had all different kinds of titles: Palace Master, Cave Lord, True Monarch, Immortal Master, etc. Even the pet of the founder of the group that had run away from home was called ‘monster dog’. They would talk all day about pill refining, exploring ancient ruins, or share their experience on techniques.\r\nHowever, after lurking inside the group for a while, he discovered that not all was what it seemed...', 29),
(20, 'Martial God Asura', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/martial-god-asura_yc4qp4.jpg', 'Pikapi et Shan Liang De Mi Feng', 'Pikapi et Shan Liang De Mi Feng', 'Adventure', 'The young Chu Feng was always seen as an insult to the Chu family due to his weak physique. One day he decides he’s had enough of it, and in order to reclaim his father’s name and save his mother, he decides to get stronger no matter what.\r\n\r\nXiuluo Wushen\r\n修罗武神', 29),
(21, 'The Gamer', 'https://res.cloudinary.com/dps4zteie/image/upload/v1675028165/Manhwashop/the_gamer_hxaigk.jpg', 'Seong Sang Yeong', 'Sang Ah', 'Fantasy ', 'L\'histoire se déroule en Corée du Sud. On suit les aventures de Han Jee Han qui a mystérieusement obtenu un pouvoir qui transforme sa vie en jeu vidéo. En effet, il peut voir les niveaux des gens ou augmenter ses compétences... Mais quel secret se cache derrière ce pouvoir incroyable nouvellement acquis ?', 29);

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `orderNumberStripe` varchar(150) NOT NULL,
  `manhwaId` varchar(10) NOT NULL,
  `quantity` int(50) NOT NULL,
  `unitPrice` int(150) NOT NULL,
  `userId` varchar(10) NOT NULL,
  `orderedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `payments`
--

CREATE TABLE `payments` (
  `id` int(50) NOT NULL,
  `userId` varchar(50) NOT NULL,
  `orderNumberStripe` varchar(50) NOT NULL,
  `amount` int(50) NOT NULL,
  `paymentDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `firstname` varchar(150) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `salt` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Manhwa`
--
ALTER TABLE `Manhwa`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Index pour la table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Manhwa`
--
ALTER TABLE `Manhwa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
