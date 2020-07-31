CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `event` (`id`, `title`, `date`) VALUES
(1, 'Ler um livro', '2020-07-31 08:00:00'),
(2, 'Jogar Futebol', '2020-08-02 08:15:00'),
(3, 'Ir para Aula', '2020-07-31 10:50:00'),
(4, 'Jogar Lol', '2020-08-01 09:35:00'),
(5, 'Viajar para praia', '2020-08-02 10:00:00'),
(6, 'Levar cachorros no pet', '2020-08-05 08:45:00');

ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;
