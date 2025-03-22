drop database if exists buyitbyme;
CREATE DATABASE buyitbyme;
USE buyitbyme;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE shops (
    shop_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    contact_info VARCHAR(255),
    category VARCHAR(100),
    website VARCHAR(255)
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    category VARCHAR(100),
    description TEXT,
    image_url VARCHAR(255)
);

CREATE TABLE shop_products (
    shop_id INT,
    product_id INT,
    price DECIMAL(10,2),
    stock_status BOOLEAN DEFAULT TRUE,
    last_updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (shop_id, product_id),
    FOREIGN KEY (shop_id) REFERENCES shops(shop_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- mock data 

INSERT INTO users (username, email, password_hash) VALUES
('cactusBalls', 'cactusBalls@example.com', 'hashedpassword1'),
('OtskeyMonkey', 'otskeymonkey@example.com', 'hashedpassword2'),
('SCGodfrey', 'scgodfrey@example.com', 'hashedpassword3'),
('LottieJudge', 'lottiejudge@example.com', 'hashedpassword4'),
('Watson Jone', 'watsonjone@example.com', 'hashedpassword5'),
('Chewie Theroux', 'chewietheroux@example.com', 'hashedpassword6');

INSERT INTO shops (name, address, latitude, longitude, contact_info, category, website) VALUES
('International Magic Shop', '89 Clerkenwell Rd, London EC1R 5BX', 51.521851, -0.110534, 'Hobby', 'https://www.internationalmagic.com'),
('Space EC1', '25 Exmouth Market London EC1R 4QL', 51.525871 , -0.109217, 'Gift', 'https://www.ifounditinspace.co.uk'),
('Farringdon Locksmith & Tool Supplies Co.ltd', '29 Exmouth Market, London EC1R 4QL', 51.526075, -0.109042, 'DIY', 'https://exmouth.london/farringdon-locksmith-tool-supplies/'),
('Stuart R Stevenson', '68 Clerkenwell Road EC1M 5QA', 51.522722, -0.101466, 'Hobby', 'https://shop.stuartstevenson.co.uk/?srsltid=AfmBOorFBoebp7-n7xDdXlVrvI5rjY05-gLQKRwHn5jG0KN76SlewwMq'),
('Mag Culture', '270 St. John Street London EC1V 4PE', 51.526534, -0.103657, 'Book, Music, Film', 'https://magculture.com');

-- Insert mock products for each shop (adjusted)
INSERT INTO products (name, price, description, shop_id) VALUES
-- International Magic Shop (Shop ID: 1)
('Rabbit Trick Deck', 10.99, 'A deck of playing cards specially designed for magic tricks', 1),
('Levitation Wand', 25.50, 'A wand that can make small objects float in the air', 1),
('Invisible Thread', 5.99, 'Ultra-thin thread for levitation magic tricks', 1),

-- Space EC1 (Shop ID: 2)
('Dinner Candles', 3.00, 'Sustainable dinner candles in a mix of colours', 2),
('Cat Wall Clock', 29.50, 'A fun and unique wall clock that stands out in any room', 2),
('Personalised Leather Journal', 22.00, 'Customisable leather journal for writing or sketching', 2),

-- Farringdon Locksmith & Tool Supplies Co.ltd (Shop ID: 3)
('Master Key Set', 12.99, 'High-quality set of locksmithing keys for professionals', 3),
('Gaffa Tape', 2.00, 'Heavy-duty tape', 3),
('Green Dye', 3.99, 'Washing machine dye for synthetic fabrics', 3),
('Nail Clippers', 2.99, 'High Quality Stainless Steel Nail Clippers', 3),

--  Stuart R Stevenson (Shop ID: 4)
('Professional Watercolour Paint Set', 35.00, 'A set of high-quality watercolor paints for artists', 4),
('Canvas Stretching Kit', 28.50, 'Everything you need to stretch your own canvas for painting', 4),
('Graphite Sketching Pencils Set', 15.99, 'A complete set of high-quality graphite pencils for sketching', 4),
('Paintbrush Set for Acrylics', 18.99, 'A set of brushes specifically designed for acrylic painting', 4),

--  Mag Culture (Shop ID: 5)
('Art & Design Magazine Subscription', 39.99, 'Get a yearly subscription to the latest art and design magazines', 5),
('Weird Walk', 8.00, 'A collection of Weird Wanders from the British Isles', 5),
('ID', 26.40, 'Trendy fashion magazine with the latest in style and trends', 5);

