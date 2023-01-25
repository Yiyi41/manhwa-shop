-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 25 jan. 2023 à 11:17
-- Version du serveur : 5.7.34
-- Version de PHP : 7.4.21

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
(1, ' Peerless Dad No Kyoungchan', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/peerless_dad_v1f11q.jpg', ' No Kyoungchan ', 'Lee Hyunseok', 'Comedy', 'Noh Ga Jang has led the life of a warrior ever since he remembers, isolated from the world and illiterate to top it all, until he meets a beautiful woman who steals his heart. He marries her and they live a life of bliss, and she gets pregnant with his children. Against all odds, she unexpectedly dies during childbirth, leaving Noh alone with their newborn triplets. Desperate, saddened, but not broken, Noh swears to the heavens that he’ll become an exemplary man to raise the invaluable treasures his wife left him.\r\n\r\nWatch the mighty warrior Noh become a Peerless Dad, and slowly realize in the way just how powerful he is for the sake of his children.', 23),
(2, 'Cultivation Chat Group', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/cultivation-chat-group_kbc09l.jpg', 'Legend of the Paladin', '', 'Comedy', 'One day, Song Shuhang accidentally joined an online chat group filled with Xianxia-obsessed chuunis. They called each other “fellow daoists”, had all sorts of strange usernames, and even referred to one their pets as a “demon dog”. Some time later, however, Shuhang came to a realization. The other members of the group were actually real-life cultivators—the kind that move mountains and can live for thousands of years! Ahhhhh! His worldview was shattered overnight', 23),
(3, 'Martial God Asura', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/martial-god-asura_yc4qp4.jpg', 'Shan Liang De Mi Feng', NULL, 'Romance', 'One night a mysterious and unexplained phenomenon occurs in the nine provinces. Five years later Chu Feng, a regular outer disciple of the Azure Dragon school, awakens one of the mysterious nine lightning beasts and discovers an egg sealed inside him. From there we follow Chu Feng as he crosses continents, beats up strong senior brothers, raids tombs, destroys sects and of course conquers beauties.', 23),
(4, 'Against The Gods', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/against-the-gods_kolc6o.jpg', 'Xiao Qi - Huo Xing Yin Li', NULL, 'Romance', '', 23),
(5, 'Nano Machine', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/nano-machine_kvhl0d.png', 'Hanjung Moonnight', NULL, 'Action', 'After being held in disdain and having his life put in danger, an orphan from the Demonic Cult, Cheon Yeo-Woon, has an unexpected visit from his descendant from the future who inserts a nano machine into Cheon Yeo-Woon’s body, which drastically changes Cheon Yeo-Woon’s life after its activation. The story of Cheon Yeo-Woon’s journey of bypassing the Demonic Cult and rising to become the best martial artist has just begun.', 23),
(6, 'Solo Leveling', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/solo-leveling-manhwa_xtuysa.png', 'Chugong', ' GEE So-Lyung,Redice Studio', 'Action', 'E-class hunter Jinwoo Sung is the weakest of them all. Looked down on by everyone, he has no money, no abilities to speak of, and no other job prospects. So when his party finds a hidden dungeon, he’s determined to use this chance to change his life for the better… but the opportunity he finds is a bit different from what he had in mind!', 23),
(8, 'The Beginning After the End', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/the-beginning-after-the-end_fpd4tn.png', 'TurtleMe', 'Fuyuki23', 'Adventure', 'King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will.\r\n\r\nReincarnated into a new world filled with magic and monsters, the king has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.', 23),
(9, 'The Chronicles of Heavenly Demon', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/chronicles-of-heavenly-demon_pdfvgx.jpg', 'Ilhwang', 'Gom-guk', 'Martial Arts', 'In an ancient world where martial artists reign supreme, Unseong can only watch as his master is brutally beaten to death after a false accusation of practicing forbidden demonic arts. Even after a valiant fight, he fails to kill those responsible and faces his own end. But fate has other plans… Instead of taking his last breath, he awakens as a child, training to be an elite soldier of a demonic sect. Now Unseong must embrace the demonic arts and harness power in his ultimate quest for revenge.', 23),
(10, 'Second Life Ranker', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/second-life-ranker_uanr9s.png', 'Sadoyeon', NULL, 'Martial Arts', 'Yeon-woo had a twin brother who disappeared five years ago. One day, a pocket watch left by his brother returned to his possession. Inside, he found a hidden diary in which was recorded “By the time you hear this, I guess I will be already dead….”\r\nObelisk, the Tower of the Sun God, a world where several universes and dimensions intersect. In this world, his brother had fallen victim to betrayal while climbing up the tower. After learning the truth, Yeon-woo decided to climb the tower along with his brother’s diary.\r\nYeon-woo then proceeds to go through the same trials and fights as his younger brother did as an anonymous player. His goal? Defeating the Obelisk Tower and get revenge for his brother.', 23),
(11, ' Reformation Of The Deadbeat Noble', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123063/Manhwashop/reformation-of-the-deadbeat-noble_bkgehv.jpg', 'Second Star', 'Dodomoon', 'Fantasy', 'After witnessing the shocking death of his mother, young Airen Farreira uses sleep to escape his painful reality, earning him the nickname, “the lazy lord”. Yet, in spite of others’ jeers and whispers, Airen has no intention of changing his ways. But when he awakens one day from a dream about a mysterious swordsman, his life’s trajectory takes a complete turn…', 23),
(12, 'A Returner’s Magic Should Be Special', 'https://res.cloudinary.com/dps4zteie/image/upload/v1674123062/Manhwashop/a-returners-magic-should-be-special_njwjwc.png', ' So-nan YOO', 'Ukjakga', 'Fantasy', 'For 10 years, magical prodigy Desir and his party have been battling inside the mysterious Shadow Labyrinth—and against the end of the world. Much of humanity has already perished and just as Desir is about to be killed, he’s sent back 13 years into the past. Despite knowing the cursed future that lies ahead, Desir steels his resolve as he sees an opportunity to train his friends and better prepare to face Armageddon together, without losing the ones they love!', 23);

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_number` varchar(150) NOT NULL,
  `manhwa_id` varchar(10) NOT NULL,
  `quantity` int(50) NOT NULL,
  `unit_price` int(150) NOT NULL,
  `user_id` varchar(10) NOT NULL,
  `ordered_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`order_id`, `order_number`, `manhwa_id`, `quantity`, `unit_price`, `user_id`, `ordered_date`) VALUES
(2, '2232414', '1', 3, 23, '2', '2023-01-24');

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
  `salt` varchar(150) NOT NULL,
  `visited` varchar(535) DEFAULT NULL,
  `orders` json DEFAULT NULL,
  `cart` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `User`
--

INSERT INTO `User` (`id`, `firstname`, `name`, `email`, `password`, `salt`, `visited`, `orders`, `cart`) VALUES
(10, 'Yiyi', 'Chen', 'loveloveyy@hotmail.com', 'CGy6O/PEoZOEZ9HxqbCcxTy3HaahSqfLEwqEbOGquiI=', '40HLBfjHo5pSUkLY', NULL, NULL, NULL),
(11, 'Lou', 'Paul', 'lou@mail.com', 'pEdGhdFvup6KLmPcRkOf8ZMNRFURnJ5FCwpaECYOqXA=', 'o76KoV3IPCmsu5Cq', NULL, NULL, NULL);

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
  ADD PRIMARY KEY (`order_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
