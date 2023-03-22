const dropData = async (db) => {
  await db.query("DROP TABLE IF EXISTS Manhwa");
  await db.query("DROP TABLE IF EXISTS orders");
  await db.query("DROP TABLE IF EXISTS payments");
  await db.query("DROP TABLE IF EXISTS User");
};

const seedData = async (db) => {
  // manhwa list route
  await db.query(
    "CREATE TABLE Manhwa (id int(11) NOT NULL,name varchar(535) NOT NULL,img varchar(150) NOT NULL, author varchar(535) NOT NULL,artist varchar(535) DEFAULT NULL, genre varchar(535) NOT NULL,resume text NOT NULL, price int(255) NOT NULL DEFAULT 23) ENGINE=InnoDB DEFAULT CHARSET=utf8"
  );

  await db.query(
    `INSERT INTO Manhwa (id, name, img, author, artist, genre, resume, price) VALUES (1,'Tower of God','https://res.cloudinary.com/dps4zteie/image/upload/v1674902077/Manhwashop/towerofgod_ak84zt.webp', 'SIU', 'SIU', 'Action', "Tower of God est un webtoon sud-coréen, écrit et dessiné par SIU, de son vrai nom Lee Jong-hui. Il fait partie d'un univers créé par SIU appelé Talse User Story, qui regroupe plusieurs œuvres du même auteur. Il est édité par Naver, et publié gratuitement sur sa plateforme Naver Webtoon.", 45)`
  );

  //user route
  // NOT NULL AUTO_INCREMENT
  await db.query(
    "CREATE TABLE `User` (`id` int(11) NOT NULL AUTO_INCREMENT,`firstname` varchar(150) NOT NULL,`name` varchar(50) NOT NULL,`email` varchar(150) NOT NULL,`password` varchar(150) NOT NULL,`salt` varchar(150) NOT NULL,`visited` varchar(535) DEFAULT NULL,`orders` json DEFAULT NULL,`cart` json DEFAULT NULL, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8"
  );

  await db.query(
    "INSERT INTO `User` (`id`, `firstname`, `name`, `email`, `password`, `salt`, `visited`, `orders`, `cart`) VALUES(10, 'Yiyi', 'Chen', 'loveloveyy@hotmail.com', 'CGy6O/PEoZOEZ9HxqbCcxTy3HaahSqfLEwqEbOGquiI=', '40HLBfjHo5pSUkLY', NULL, NULL, NULL),(11, 'Lou', 'Paul', 'lou@mail.com', 'pEdGhdFvup6KLmPcRkOf8ZMNRFURnJ5FCwpaECYOqXA=', 'o76KoV3IPCmsu5Cq', NULL, NULL, NULL),(12, 'paul', 'dupont', 'paul@gmail.com', 'ChSZIhd8ftPggE9QEd2dbqHEGVIrV0eZj2DqVNoGXOA=', 'BVIVo7CkIaBoYxK6', NULL, NULL, NULL)"
  );

  await db.query(
    "CREATE TABLE `orders` (`orderId` int(11) NOT NULL AUTO_INCREMENT,`orderNumberStripe` varchar(150) NOT NULL,`manhwaId` varchar(10) NOT NULL,`quantity` int(50) NOT NULL,`unitPrice` int(150) NOT NULL,`userId` varchar(10) NOT NULL,`orderedDate` date NOT NULL, PRIMARY KEY (orderId)) ENGINE=InnoDB DEFAULT CHARSET=utf8"
  );

  await db.query(
    "INSERT INTO `orders` (`orderId`, `orderNumberStripe`, `manhwaId`, `quantity`, `unitPrice`, `userId`, `orderedDate`) VALUES (3, 'tok_1MUzX5FRyAqwsrmB3Zs5xjUw', '1', 1, 23, '11', '2023-01-27'),(4, 'tok_1MUzX5FRyAqwsrmB3Zs5xjUw', '2', 1, 23, '11', '2023-01-27')"
  );
};

module.exports = { dropData, seedData }; // es5
