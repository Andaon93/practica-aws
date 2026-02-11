-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 31-01-2026 a las 17:51:39
-- Versión del servidor: 8.0.43
-- Versión de PHP: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Gestion_Hospital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `HOSPITAL`
--

CREATE TABLE `HOSPITAL` (
  `id_hospital` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `presupuesto` decimal(12,2) DEFAULT NULL,
  `publico` tinyint(1) DEFAULT NULL,
  `fecha_fundacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `HOSPITAL`
--

INSERT INTO `HOSPITAL` (`id_hospital`, `nombre`, `direccion`, `presupuesto`, `publico`, `fecha_fundacion`) VALUES
(5, 'Clínica Universitaria', 'Calle Universidad 10', 5000000.00, 1, '2010-05-15'),
(6, 'Hospital San Juan', 'Av. de la Constitución 22', 1200000.00, 1, '1975-11-30'),
(7, 'Centro Médico Privado', 'Paseo de la Castellana 100', 8000000.00, 0, '2020-01-01'),
(8, 'Hospital de la Santa Creu', 'Carrer de Sant Quintí 89, Barcelona', 12500000.00, 1, '1902-01-15'),
(9, 'Clínica Universidad de Navarra', 'Av. de Pío XII 36, Pamplona', 8500000.00, 0, '1962-10-01'),
(10, 'Hospital Reina Sofía', 'Av. Menéndez Pidal s/n, Córdoba', 9200000.00, 1, '1976-02-03'),
(11, 'Hospital Universitario Gregorio Marañón', 'Calle del Dr. Esquerdo 46, Madrid', 14000000.00, 1, '1968-05-12'),
(12, 'Centro Médico Teknon', 'Carrer de Vilana 12, Barcelona', 7200000.00, 0, '1994-02-20'),
(13, 'Hospital Vall d Hebron', 'Passeig de la Vall d Hebron 119, Barcelona', 18000000.00, 1, '1955-10-05'),
(14, 'Hospital Universitario Puerta de Hierro', 'Manuel de Falla 1, Majadahonda', 11000000.00, 1, '1964-07-01'),
(15, 'Clínica Ruber Internacional', 'Calle de Juan Bravo 39, Madrid', 6800000.00, 0, '1980-03-15'),
(16, 'Hospital Clínico San Carlos', 'Calle del Prof Martín Lagos s/n, Madrid', 13000000.00, 1, '1787-11-20'),
(17, 'Hospital Civil de Málaga', 'Plaza del Hospital Civil s/n, Málaga', 5500000.00, 1, '1862-09-10'),
(18, 'Centro de Salud San Lázaro', 'Calle Real s/n, Sevilla', 2000000.00, 1, '2005-04-22'),
(19, 'Hospital Quirónsalud Madrid', 'Calle Diego de Velázquez 1, Pozuelo', 9500000.00, 0, '2006-11-11'),
(20, 'Hospital General de Valencia', 'Av. de les Tres Creus 2, Valencia', 10500000.00, 1, '1512-05-01'),
(21, 'Clínica IMQ Zorrotzaurre', 'Ballets Olaeta Kalea 4, Bilbao', 8000000.00, 0, '2012-05-16'),
(22, 'Hospital de Cruces', 'Plaza de Cruces s/n, Barakaldo', 12000000.00, 1, '1955-07-20'),
(23, 'Hospital San Roque', 'Calle Dolores de la Rocha 5, Las Palmas', 4500000.00, 0, '1920-12-01'),
(24, 'Hospital Miguel Servet', 'Paseo de Isabel la Católica 1, Zaragoza', 11500000.00, 1, '1955-10-20'),
(25, 'Clínica Sagrada Familia', 'Carrer de Torras i Pujalt 1, Barcelona', 5200000.00, 0, '1970-06-30'),
(26, 'Hospital de Bellvitge', 'Feixa Llarga s/n, L Hospitalet', 13500000.00, 1, '1972-11-08'),
(27, 'Hospital Materno Infantil', 'Av. de Carlos Haya s/n, Málaga', 7800000.00, 1, '1981-02-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PLANTA`
--

CREATE TABLE `PLANTA` (
  `id_planta` int NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `numero_planta` int DEFAULT NULL,
  `capacidad` int DEFAULT NULL,
  `coste_mensual` float DEFAULT NULL,
  `activa` tinyint(1) DEFAULT NULL,
  `fecha_apertura` datetime DEFAULT NULL,
  `id_hospital` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `PLANTA`
--

INSERT INTO `PLANTA` (`id_planta`, `nombre`, `numero_planta`, `capacidad`, `coste_mensual`, `activa`, `fecha_apertura`, `id_hospital`) VALUES
(6, 'Ginecología', 1, 28, 65000, 1, '2016-02-14 00:00:00', 5),
(7, 'Neurología', 3, 20, 105000, 1, '2019-07-22 00:00:00', 6),
(15, 'Farmacia Central', 0, 5, 30000, 1, '1995-09-20 00:00:00', 7),
(16, 'Unidad de Cuidados Paliativos', 4, 15, 60000, 1, '2010-01-10 08:00:00', 8),
(17, 'Laboratorio Central', 0, 10, 45000.5, 1, '2012-03-15 09:00:00', 8),
(18, 'Dermatología Clínica', 1, 20, 35000, 1, '2015-06-20 08:30:00', 9),
(19, 'Unidad de Diálisis', 2, 25, 85000, 1, '2018-09-12 07:00:00', 9),
(20, 'Endocrinología', 3, 22, 42000, 1, '2016-11-05 10:00:00', 10),
(21, 'Gastroenterología', 1, 30, 58000, 0, '2014-04-18 08:00:00', 10),
(22, 'Oftalmología Quirúrgica', 5, 12, 90000, 1, '2021-02-28 09:15:00', 8),
(23, 'Otorrinolaringología', 2, 18, 52000, 1, '2017-07-14 08:00:00', 9),
(24, 'Urología', 4, 26, 63000, 1, '2013-05-05 10:30:00', 10),
(25, 'Anatomía Patológica', -1, 8, 75000, 1, '2011-12-01 07:00:00', 8),
(26, 'Unidad del Sueño', 6, 10, 25000, 0, '2023-01-10 22:00:00', 12),
(27, 'Cirugía Vascular', 3, 14, 110000, 1, '2019-10-25 08:00:00', 13),
(28, 'Neumología', 2, 28, 56000, 1, '2015-08-14 09:00:00', 14),
(29, 'Reumatología', 1, 15, 38000, 1, '2020-05-12 08:30:00', 15),
(30, 'Unidad de Trasplantes', 5, 8, 250000, 1, '2012-06-01 00:00:00', 16),
(31, 'Infectología', 4, 12, 88000, 1, '2022-03-20 08:00:00', 17),
(32, 'Medicina Interna B', 2, 40, 72000, 1, '1990-10-10 09:00:00', 18),
(33, 'Neurocirugía', 3, 10, 180000, 1, '2014-11-11 08:00:00', 19),
(34, 'Odontología Hospitalaria', 0, 5, 20000, 1, '2018-12-05 10:00:00', 20),
(35, 'Unidad de Desintoxicación', 1, 10, 45000, 0, '2016-01-20 09:00:00', 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `HOSPITAL`
--
ALTER TABLE `HOSPITAL`
  ADD PRIMARY KEY (`id_hospital`);

--
-- Indices de la tabla `PLANTA`
--
ALTER TABLE `PLANTA`
  ADD PRIMARY KEY (`id_planta`),
  ADD KEY `id_hospital` (`id_hospital`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `HOSPITAL`
--
ALTER TABLE `HOSPITAL`
  MODIFY `id_hospital` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `PLANTA`
--
ALTER TABLE `PLANTA`
  MODIFY `id_planta` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `PLANTA`
--
ALTER TABLE `PLANTA`
  ADD CONSTRAINT `PLANTA_ibfk_1` FOREIGN KEY (`id_hospital`) REFERENCES `HOSPITAL` (`id_hospital`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
