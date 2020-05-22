CREATE TABLE orders(
  id INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_user) REFERENCES users(id), 
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
