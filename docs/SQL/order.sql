CREATE TABLE orders(
  id INT NOT NULL AUTO_INCREMENT,
  payMethod ENUM('creditCard', 'cash') NOT NULL DEFAULT 'cash'  ,
  status ENUM('new', 'confirmed', 'preparing', 'sending', 'cancel', 'delivered') NOT NULL DEFAULT 'new',
  userId INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id), 
  PRIMARY KEY (id) 
);

CREATE TABLE orders_products(
  orderId INT NOT NULL ,
  productId INT NOT NULL,
  quantity INT DEFAULT 0,
  FOREIGN KEY (orderId) REFERENCES orders(id),
  FOREIGN KEY (productId) REFERENCES products(id)  
);

-- Example query to poblate the table
--  INSERT INTO order_products(id_order,id_product)
--  VALUES( (SELECT id from orders where id = 1),
