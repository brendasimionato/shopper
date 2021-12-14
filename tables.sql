CREATE TABLE `shopper_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(250) NOT NULL,
  `delivery_date` date NOT NULL,
  `total` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `shopper_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `price` double NOT NULL,
  `qty_stock` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `shopper_order_products` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  KEY `shopper_order_products_FK` (`order_id`),
  KEY `shopper_order_products_FK_1` (`product_id`),
  CONSTRAINT `shopper_order_products_FK` FOREIGN KEY (`order_id`) REFERENCES `shopper_order` (`id`),
  CONSTRAINT `shopper_order_products_FK_1` FOREIGN KEY (`product_id`) REFERENCES `shopper_products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;