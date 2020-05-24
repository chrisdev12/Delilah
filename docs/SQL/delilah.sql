-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-05-2020 a las 00:04:41
-- Versión del servidor: 5.6.47-cll-lve
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delilah`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `payMethod` enum('creditCard','cash') NOT NULL DEFAULT 'cash',
  `status` enum('new','confirmed','preparing','sending','cancel','delivered') NOT NULL DEFAULT 'new',
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `payMethod`, `status`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'creditCard', 'new', 1, '2020-05-22 16:35:59', '2020-05-22 16:35:59'),
(2, 'cash', 'sending', 1, '2020-05-22 16:40:17', '2020-05-22 16:40:17'),
(3, 'cash', 'new', 1, '2020-05-22 16:40:34', '2020-05-22 16:40:34'),
(4, 'cash', 'new', 1, '2020-05-22 16:41:50', '2020-05-22 16:41:50'),
(5, 'cash', 'new', 1, '2020-05-22 16:42:16', '2020-05-22 16:42:16'),
(6, 'creditCard', 'new', 1, '2020-05-22 16:43:20', '2020-05-22 16:43:20'),
(7, 'creditCard', 'new', 3, '2020-05-22 17:26:58', '2020-05-22 17:26:58'),
(8, 'creditCard', 'new', 2, '2020-05-22 18:38:50', '2020-05-22 18:38:50'),
(9, 'creditCard', 'new', 2, '2020-05-22 19:25:00', '2020-05-22 19:25:00'),
(10, 'creditCard', 'new', 4, '2020-05-22 22:38:02', '2020-05-22 22:38:02'),
(11, 'creditCard', 'new', 5, '2020-05-22 22:42:17', '2020-05-22 22:42:17'),
(12, 'creditCard', 'confirmed', 5, '2020-05-22 22:42:33', '2020-05-22 22:42:33'),
(13, 'creditCard', 'confirmed', 4, '2020-05-22 23:02:52', '2020-05-22 23:02:52'),
(14, 'creditCard', 'new', 5, '2020-05-23 16:07:09', '2020-05-23 16:07:09'),
(15, 'cash', 'new', 23, '2020-05-23 23:50:18', '2020-05-23 23:50:18'),
(16, 'creditCard', 'new', 17, '2020-05-23 23:51:19', '2020-05-23 23:51:19'),
(17, 'creditCard', 'new', 19, '2020-05-23 23:55:36', '2020-05-23 23:55:36'),
(18, 'creditCard', 'new', 15, '2020-05-23 23:56:33', '2020-05-23 23:56:33'),
(19, 'creditCard', 'new', 15, '2020-05-23 23:57:20', '2020-05-23 23:57:20'),
(20, 'cash', 'new', 15, '2020-05-23 23:57:36', '2020-05-23 23:57:36'),
(21, 'cash', 'new', 13, '2020-05-23 23:58:27', '2020-05-23 23:58:27'),
(22, 'cash', 'new', 13, '2020-05-23 23:58:47', '2020-05-23 23:58:47'),
(23, 'cash', 'new', 16, '2020-05-23 23:59:31', '2020-05-23 23:59:31'),
(24, 'cash', 'new', 16, '2020-05-23 23:59:57', '2020-05-23 23:59:57'),
(25, 'cash', 'new', 20, '2020-05-24 00:00:42', '2020-05-24 00:00:42'),
(26, 'cash', 'new', 18, '2020-05-24 00:01:32', '2020-05-24 00:01:32'),
(27, 'creditCard', 'new', 18, '2020-05-24 00:01:55', '2020-05-24 00:01:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders_products`
--

CREATE TABLE `orders_products` (
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `orders_products`
--

INSERT INTO `orders_products` (`orderId`, `productId`, `quantity`) VALUES
(1, 1, 3),
(1, 3, 1),
(2, 1, 3),
(2, 3, 1),
(3, 1, 3),
(3, 3, 1),
(4, 1, 2),
(4, 3, 2),
(5, 1, 3),
(5, 3, 3),
(6, 1, 3),
(6, 3, 3),
(7, 1, 2),
(8, 1, 5),
(8, 2, 4),
(9, 1, 5),
(9, 3, 2),
(10, 1, 5),
(10, 3, 1),
(10, 4, 2),
(11, 2, 3),
(11, 3, 2),
(11, 4, 2),
(12, 1, 1),
(12, 4, 2),
(13, 1, 3),
(13, 3, 1),
(13, 4, 2),
(14, 1, 1),
(14, 2, 2),
(14, 3, 4),
(14, 4, 2),
(15, 3, 4),
(15, 10, 2),
(15, 20, 1),
(15, 22, 2),
(16, 2, 8),
(16, 7, 3),
(16, 17, 5),
(16, 19, 4),
(17, 6, 6),
(17, 12, 5),
(17, 15, 7),
(17, 21, 2),
(18, 7, 2),
(18, 11, 3),
(18, 19, 4),
(18, 23, 1),
(19, 5, 5),
(19, 11, 4),
(19, 13, 10),
(20, 9, 10),
(20, 10, 5),
(20, 18, 4),
(21, 6, 1),
(21, 9, 4),
(21, 11, 3),
(21, 20, 6),
(22, 3, 4),
(22, 9, 5),
(22, 16, 3),
(22, 21, 2),
(23, 10, 7),
(23, 17, 6),
(24, 8, 4),
(24, 18, 5),
(24, 19, 6),
(25, 7, 4),
(25, 13, 5),
(25, 16, 2),
(25, 20, 3),
(26, 6, 2),
(26, 14, 6),
(26, 19, 4),
(26, 23, 5),
(27, 7, 3),
(27, 13, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `price` double NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `urlImage` varchar(130) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `desc`, `price`, `status`, `urlImage`) VALUES
(1, 'Lassagna', 35000, 1, NULL),
(2, 'Salmon a la parilla', 35000, 1, NULL),
(3, 'Malteada de chocolate', 13000, 1, NULL),
(4, 'Mojarra Salteada', 11000, 0, NULL),
(5, 'Baby beef', 25000, 1, 'https://res.cloudinary.com/dircdfylu/image/upload/v1590262243/fczsrkoe1nixkytmycos.jpg'),
(6, 'mburguesa', 20000, 0, NULL),
(7, 'Langosta', 96000, 0, NULL),
(8, 'Helado de almendras', 8900, 0, NULL),
(9, 'Rissoto', 19000, 0, NULL),
(10, 'Flan de Maracuya', 6000, 0, NULL),
(11, 'Durznos al almibar', 4500, 0, NULL),
(12, 'Costillas BBQ', 23000, 0, NULL),
(13, 'Chunks de pollo', 17000, 0, NULL),
(14, 'Pizza napolitana', 27000, 0, NULL),
(15, 'Pizza de peperoni', 25000, 0, NULL),
(16, 'Atún', 10000, 0, NULL),
(17, 'Ensalada Cesar', 15000, 0, NULL),
(18, 'Cerveza', 6000, 0, NULL),
(19, 'Vodka', 89000, 0, NULL),
(20, 'Whisky', 100000, 0, NULL),
(21, 'Postre tres leches', 10000, 0, NULL),
(22, 'Paella', 25000, 0, NULL),
(23, 'Pechuga gratinada', 22000, 0, NULL),
(24, 'Churrasco', 25000, 0, NULL),
(25, 'Limonada de coco', 15000, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(70) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `rol` enum('user','admin') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `address`, `password`, `status`, `rol`) VALUES
(1, 'admin', 'nubia@admin.com', 1232345, 'New York, 5 Avenue', '$2b$10$6ttp/HXCjIvKRtHaekwkBeCK0Uxs.Lsq/TVPB/j7iME21WgNbdFBm', 1, 'admin'),
(2, 'Christian Salamanca', 'chris@test.com', 1232345, 'New York, 5 Avenue', '$2b$10$ukdn3QOxoojv0svZjRuKqePtDF5iPMKIT26PgqBuV8V.bPsR3z2YS', 1, 'user'),
(3, 'Andres Carne de Res', 'andres@test.com', 1232345, 'Unicentro, Bogota', '$2b$10$aziS.1W.s6C.wCBJyP1OJ.8mrd4dCq//dgCI8MGSEiCTClNurv/LC', 1, 'user'),
(4, 'Jaime Gonzales', 'jaime@test.com', 1232345, 'El poblado #34, Medellin', '$2b$10$3rSdB3KKpSZDaNbqbxcY/.xZcTiVtrdBI1psJkD1IxiMeEeBPGYDi', 1, 'user'),
(5, 'Andres Iniesta', 'crack@test.com', 1232345, 'Barcelona, La Masia', '$2b$10$1JimGPlR6Lk1TkaflMYCHOCkVihluB.f9uKuAUfpGGX27dpciEGAK', 1, 'admin'),
(6, 'lionel Messi', 'messi@test.com', 1232345, 'Argentina, Newells', '$2b$10$Ec8mH1yuq4v0coa2hwH0Pu1opt5DA/6fI7s4yt01kKeufPcV/efke', 1, 'user'),
(7, 'Jordan', 'Jordan@test.com', 12345, 'Cll 80 #34-56', '$2b$10$lGrN1IRsQOyBmS9KgGzmLu2YSMMCOGz83XDhC4EAatPH0CdBwU.8C', 1, 'user'),
(8, 'Mario Andres', 'Mario@test.com', 12345, 'Cll 80 #34-57', '$2b$10$U0NpIWB4VUC1276aQv/HfOpYbAfHXparTc8M3H3nbtVaDeWmkktDq', 1, 'user'),
(9, 'Jonas', 'Jonas@test.com', 12345, 'Cll 80 #34-58', '$2b$10$stkyLPBfmWZ/KUXCl68tOOmrDNN0HzA7JJ/jLXth5dEB4ZBQGEbrK', 1, 'user'),
(10, 'Michael Bay', 'Michael@test.com', 12345, 'Cll 80 #34-59', '$2b$10$akRJYiZs366sKYnSeHi2U.6mRaflZmfP1a0mGurknrNyuhFSaTfmK', 1, 'user'),
(11, 'James Gotze', 'gotze@test.com', 12345, 'Cll 80 #34-60', '$2b$10$OqkPAyi.mjZesNSIybUd2.fqYLwcCGvXvpvS34hUU.T9T40NVI3Cq', 1, 'user'),
(13, 'Neymar Junior', 'neymar@test.com', 12345, 'Cll 80 #34-56', '$2b$10$hETao6Ec6c7uC97MgHL.r.butuAXB/2AeHuxRMEwkhvMcPpAP5pFu', 1, 'user'),
(14, 'Cristiano Ronaldo', 'cr7@test.com', 12345, 'Cll 80 #34-57', '$2b$10$aZWK.Ec3lGfjN7GAixPsl.8nOZHv31zNuri4CnJZ9k.3e9K/fgIiW', 1, 'user'),
(15, 'Javier Mascherano', 'masche@test.com', 12345, 'Cll 80 #34-58', '$2b$10$Fpj6g9k.fTLB.auCYMHBYuoZWvPNp6IJ41IYsLWRHMEfVEOOz.qFW', 1, 'user'),
(16, 'Radamel Falcao', 'elfalca@test.com', 12345, 'Cll 80 #34-59', '$2b$10$pjweD.eZ34EvOHW9MHZ7gujcGmkd27poPmK8tDLvBZsAwKIcR4c1i', 1, 'user'),
(17, 'James Rodriguez', 'jamesr10@test.com', 12345, 'Cll 80 #34-60', '$2b$10$6WF9fbtUtg.Ql5chFrZtu.uNwEUpR9eqZg4qzofsxXQLQA90EG7lC', 1, 'user'),
(18, 'Arjen Robben', 'robben@test.com', 12345, 'Cll 80 #34-61', '$2b$10$lpTqKSj00rMyO3w39SMudOhfyx3k8kzdqWUn3AYjNyyH10eweSnai', 1, 'user'),
(19, 'Paul Pogba', 'pogba@test.com', 12345, 'Cll 80 #34-62', '$2b$10$x//I3dQNUed8Cied9P1Rbu6rucSNBVxxy7f0kEv3NFVFIPcL9ImXq', 1, 'user'),
(20, 'Andrea Pirlo', 'pirlo@test.com', 12345, 'Cll 80 #34-63', '$2b$10$ljhF0FnB3AKFaZ5jHK0QsOmiqqj6AwzoBz0V6GGm2tANTIOUnom2i', 1, 'user'),
(21, 'Juanfer Quintero', 'quintero@test.com', 12345, 'Cll 80 #34-64', '$2b$10$Acv6BzuKCk6RSXEzHgYccOnpr8idVOHPwFxrhTUCIAYJP4oYzwbk2', 1, 'user'),
(22, 'Robert Lewandowski', 'lewa@test.com', 12345, 'Cll 80 #34-65', '$2b$10$UYAojX93l/.SwSw13DhVxu547jk38ZERbZY2scuYDZPFNZdma14YG', 1, 'user'),
(23, 'Zlatan Ibrahimovic', 'zlatan@test.com', 12345, 'Cll 80 #34-66', '$2b$10$zJLkHQLA49uogSlj7EAdT.rBuonDisBJXEenTNCjleEZ1tPtHKZMG', 1, 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `orders_products`
--
ALTER TABLE `orders_products`
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
