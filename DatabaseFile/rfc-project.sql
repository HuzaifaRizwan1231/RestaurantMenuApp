-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2023 at 06:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rfc-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `feedback_id` int(11) NOT NULL,
  `feedback_user_email` varchar(100) NOT NULL,
  `feedback_desc` text NOT NULL,
  `feedback_date_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`feedback_id`, `feedback_user_email`, `feedback_desc`, `feedback_date_time`) VALUES
(12, 'huzaifa.rizwan1231@gmail.com', 'Very Good Food', '2023-12-12 08:45:01'),
(13, 'huzaifa.rizwan1231@gmail.com', 'Kamal Ka khana chaas aagai', '2023-12-12 09:16:14'),
(14, 'mu8494759@gmail.com', 'Dair se pohncha lekin cola next thandi thi', '2023-12-12 10:02:23'),
(15, 'faiza.rizwan786@gmail.com', '2 no bottle ', '2023-12-12 15:45:17');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_user_email` varchar(100) NOT NULL,
  `order_product_id` int(11) NOT NULL,
  `order_quantity` int(11) NOT NULL,
  `order_address` varchar(255) NOT NULL,
  `order_contact` varchar(20) NOT NULL,
  `status` varchar(10) NOT NULL,
  `order_date_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_user_email`, `order_product_id`, `order_quantity`, `order_address`, `order_contact`, `status`, `order_date_time`) VALUES
(67, 'huzaifa.rizwan1231@gmail.com', 12, 1, '209/2 D Block Military Accounts housing society.', '03225300470', 'paid', '2023-12-12 08:42:26'),
(68, 'huzaifa.rizwan1231@gmail.com', 12, 1, '209/2 D Block Military Accounts housing society.', '03225300470', 'paid', '2023-12-12 08:42:33'),
(71, 'huzaifa.rizwan1231@gmail.com', 2, 2, '209/2 D Block Military Accounts housing society.', '03225300470', 'completed', '2023-12-12 08:43:25'),
(72, 'rabi@gmail.com', 10, 2, '', '', 'cart', '2023-12-12 08:49:57'),
(73, 'huzaifa.rizwan1231@gmail.com', 11, 5, '209/2 D Block Military Accounts housing society.\n', '03288', 'paid', '2023-12-12 09:13:37'),
(74, 'huzaifa.rizwan1231@gmail.com', 11, 5, '209/2 D Block Military Accounts housing society.\n', '03288', 'completed', '2023-12-12 09:13:45'),
(75, 'huzaifa.rizwan1231@gmail.com', 10, 1, '209/2 D Block Military Accounts housing society.', '6', 'paid', '2023-12-12 09:19:32'),
(76, 'huzaifa.rizwan1231@gmail.com', 2, 2, '209/2 D Block Military Accounts housing society.', '6', 'completed', '2023-12-12 09:25:13'),
(77, 'huzaifa.rizwan1231@gmail.com', 12, 1, '209/2 D Block Military Accounts housing society.', '454554', 'completed', '2023-12-12 09:27:50'),
(78, 'mu8494759@gmail.com', 11, 7, '40/7 A Gillani Park Shadab Colony Lahore', '03020417507', 'paid', '2023-12-12 09:52:34'),
(80, 'mu8494759@gmail.com', 11, 1, '40/7 A Gillani Park Shadab Colony Lahore', '5465465465', 'completed', '2023-12-12 10:07:43'),
(81, 'faiza.rizwan786@gmail.com', 9, 1, '209/2 d block military accounts college road Lahore ', '03004708048', 'completed', '2023-12-12 15:39:48');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_desc` varchar(255) NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `product_category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `product_desc`, `product_image`, `product_category`) VALUES
(1, 'BEEF BURGER', 650, 'Indulge in beefy perfection with our signature Beef Burger—flame-grilled to perfection, topped with cheese, fresh veggies, and our secret sauce. Elevate your burger experience with a symphony of flavors in every bite!\n', '/images/Beef_Burger.png', 'fast_food'),
(2, 'BIRYANI', 150, 'Savor the richness of our Biryani – fragrant basmati rice layered with marinated meat, spices, and caramelized onions. A symphony of flavors that takes your palate on a delectable journey.\n', '/images/biryani.png', 'desi'),
(3, 'CHICKEN KARAHI', 500, 'Experience the bold allure of our Chicken Karahi – tender pieces of chicken wok-tossed in a fiery blend of spices, tomatoes, and bell peppers. A sizzling symphony of flavors that ignites your taste buds.\n', '/images/Chicken-Karahi.png', 'desi'),
(4, 'FRENCH FRIES', 150, 'Golden perfection in every bite – our Crispy Fries are a symphony of flavor and crunch. Seasoned to perfection, these fries are the ultimate sidekick to elevate your dining experience.\n', '/images/fries.png', 'fast_food'),
(5, 'PALAK PANEER', 800, 'Dive into a world of creamy indulgence with our Palak Paneer – succulent paneer cubes bathed in a luscious spinach curry. A harmonious blend of flavors that transforms every bite into a culinary delight.\n', '/images/PalakPaneer.png', 'desi'),
(6, 'ZINGER BURGER', 500, 'Savor the sizzle with our Zinger Burger – a crispy, spice-infused delight featuring a seasoned chicken fillet, zesty sauce, and fresh veggies, all tucked between toasted brioche buns. It\'s not just a burger; it\'s a flavor adventure!\n', '/images/zinger-burger.png', 'fast_food'),
(7, 'GOURMET LEMONUP', 100, 'Revitalizing citrus beverage, LemonUp, offers a zesty, refreshing taste experience.', '/images/gourmet-lemonup.png', 'drink'),
(8, 'GOURMET MALTA', 100, 'Malta: Rich, sweet, non-alcoholic malt beverage with unique caramel undertones.', '/images/gourmet-malta.png', 'drink'),
(9, 'COLA NEXT', 100, 'Refreshing cola with a fizzy kick, perfect for instant satisfaction.', '/images/ColaNext.png', 'drink'),
(10, 'BEEF DEAL', 1000, 'Unleash your appetite with our Beef Burger Combo – a juicy, flame-grilled masterpiece paired with golden fries and a refreshing cola. It\'s the perfect trifecta of flavor and satisfaction.\n', '/images/beef-burger-deal.png', 'deal'),
(11, 'ZINGER DEAL', 1000, 'Elevate your mealtime excitement with our Zinger Burger Deal! Indulge in the fiery kick of our signature Zinger Burger, accompanied by a generous serving of crispy fries and a refreshing cola – a perfect trio to satisfy your cravings and delight your tast', '/images/zinger-deal.png', 'deal'),
(12, 'BIRYANI DEAL', 1000, 'Delight your senses with our Biryani Bliss Deal! Immerse yourself in the aromatic symphony of our signature Biryani, paired with a chilled cola for a truly satisfying and flavorful experience that transports you to culinary paradise.', '/images/biryani-deal.png', 'deal');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_username` varchar(50) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_username`, `user_address`, `user_email`, `user_password`) VALUES
(1, 'Huzaifa Rizwan ', '209/2 D Block Military Accounts housing society.', 'huzaifa.rizwan1231@gmail.com', '123'),
(2, 'Rabi Uddin', 'Jamia Ashrafia', 'rabi@gmail.com', 'rabi'),
(3, 'Muhammad Umar', '40/7 A Gillani Park Shadab Colony Lahore', 'mu8494759@gmail.com', '12345678'),
(4, 'Faiza Rizwan ', '209/2', 'faiza.rizwan786@gmail.com', 'faiza');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
