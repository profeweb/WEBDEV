-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-11-2018 a las 19:39:00
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `concesionari`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carroceria`
--

CREATE TABLE IF NOT EXISTS `carroceria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `carroceria`
--

INSERT INTO `carroceria` (`id`, `nom`) VALUES
(5, '4X4'),
(3, 'BERLINA'),
(2, 'COMPACTE'),
(4, 'SUB'),
(1, 'UTILITARI');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE IF NOT EXISTS `marca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id`, `nom`) VALUES
(5, 'AUDI'),
(3, 'BMW'),
(6, 'CITROEN'),
(2, 'FORD'),
(7, 'HONDA'),
(8, 'JEEP'),
(9, 'MINI'),
(10, 'OPEL'),
(1, 'SEAT'),
(4, 'TOYOTA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model`
--

CREATE TABLE IF NOT EXISTS `model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) CHARACTER SET utf8 NOT NULL,
  `portes` int(11) NOT NULL DEFAULT '5',
  `potencia` int(11) NOT NULL COMMENT 'cv',
  `preu` int(11) NOT NULL,
  `maleter` int(11) NOT NULL,
  `places` int(11) NOT NULL DEFAULT '5',
  `marca` int(11) NOT NULL,
  `carroceria` int(11) NOT NULL,
  `foto` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`),
  KEY `marca` (`marca`),
  KEY `carroceria` (`carroceria`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `model`
--

INSERT INTO `model` (`id`, `nom`, `portes`, `potencia`, `preu`, `maleter`, `places`, `marca`, `carroceria`, `foto`) VALUES
(1, 'IBIZA SX', 5, 75, 9900, 355, 5, 1, 1, 'ibiza.jpg'),
(2, 'LEON ', 5, 180, 13990, 380, 5, 1, 2, 'leon.jpg'),
(3, 'TOLEDO STYLE S', 5, 125, 14990, 550, 5, 1, 3, 'toledo.jpg'),
(4, 'FIESTA SPORT EDITION', 5, 80, 8400, 220, 5, 2, 2, 'fiesta.jpg');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `model`
--
ALTER TABLE `model`
  ADD CONSTRAINT `model_ibfk_1` FOREIGN KEY (`marca`) REFERENCES `marca` (`id`),
  ADD CONSTRAINT `model_ibfk_2` FOREIGN KEY (`carroceria`) REFERENCES `carroceria` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
