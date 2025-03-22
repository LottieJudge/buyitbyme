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
('International Magic Shop', '89 Clerkenwell Rd, London EC1R 5BX', 51.521851, -0.110534,'020 7405 7324', 'Hobby', 'https://www.internationalmagic.com'),
('Space EC1', '25 Exmouth Market London EC1R 4QL', 51.525871 , -0.109217,' 020 7837 1344', 'Gift', 'https://www.ifounditinspace.co.uk'),
('Farringdon Locksmith & Tool Supplies Co.ltd', '29 Exmouth Market, London EC1R 4QL', 51.526075, -0.109042, ' 020 7837 5179', 'DIY', 'https://exmouth.london/farringdon-locksmith-tool-supplies/'),
('Stuart R Stevenson', '68 Clerkenwell Road EC1M 5QA', 51.522722, -0.101466,'020 7253 1693', 'Hobby', 'https://shop.stuartstevenson.co.uk/?srsltid=AfmBOorFBoebp7-n7xDdXlVrvI5rjY05-gLQKRwHn5jG0KN76SlewwMq'),
('Mag Culture', '270 St. John Street London EC1V 4PE', 51.526534, -0.103657, '020 3759 8022', 'Book, Music, Film', 'https://magculture.com');

INSERT INTO products (name, brand, category, description, image_url) VALUES
-- International Magic Shop (Shop ID: 1)
('Rabbit Trick Deck', 'Magic', 'Hobby', 'A deck of playing cards specially designed for magic tricks', 'https://example.com/rabbit-trick-deck.jpg'),
('Levitation Wand', 'Magic', 'Hobby', 'A wand that can make small objects float in the air', 'https://example.com/levitation-wand.jpg'),
('Invisible Thread', 'Magic', 'Hobby', 'Ultra-thin thread for levitation magic tricks', 'https://example.com/invisible-thread.jpg'),

-- Space EC1 (Shop ID: 2)
('Dinner Candles', 'EcoLite', 'Homeware', 'Sustainable dinner candles in a mix of colours', 'https://example.com/dinner-candles.jpg'),
('Cat Wall Clock', 'KittyTime', 'Homeware', 'A fun and unique wall clock that stands out in any room', 'https://example.com/cat-wall-clock.jpg'),
('Personalised Leather Journal', 'CustomCraft', 'Stationery', 'Customisable leather journal for writing or sketching', 'https://example.com/leather-journal.jpg'),

-- Farringdon Locksmith & Tool Supplies Co.ltd (Shop ID: 3)
('Master Key Set', 'LockTech', 'Tools', 'High-quality set of locksmithing keys for professionals', 'https://example.com/master-key-set.jpg'),
('Gaffa Tape', 'HeavyDuty', 'Tools', 'Heavy-duty tape', 'https://example.com/gaffa-tape.jpg'),
('Green Dye', 'ColorFix', 'DIY', 'Washing machine dye for synthetic fabrics', 'https://example.com/green-dye.jpg'),
('Nail Clippers', 'SharpTools', 'Tools', 'High Quality Stainless Steel Nail Clippers', 'https://example.com/nail-clippers.jpg'),

-- Stuart R Stevenson (Shop ID: 4)
('Professional Watercolour Paint Set', 'ArtPro', 'Art Supplies', 'A set of high-quality watercolor paints for artists', 'https://example.com/watercolour-paint-set.jpg'),
('Canvas Stretching Kit', 'ArtPro', 'Art Supplies', 'Everything you need to stretch your own canvas for painting', 'https://example.com/canvas-stretching-kit.jpg'),
('Graphite Sketching Pencils Set', 'ArtPro', 'Art Supplies', 'A complete set of high-quality graphite pencils for sketching', 'https://example.com/graphite-sketching-pencils.jpg'),
('Paintbrush Set for Acrylics', 'ArtPro', 'Art Supplies', 'A set of brushes specifically designed for acrylic painting', 'https://example.com/paintbrush-set.jpg'),

-- Mag Culture (Shop ID: 5)
('Art & Design Magazine Subscription', 'MagCulture', 'Books', 'Get a yearly subscription to the latest art and design magazines', 'https://example.com/art-design-magazine.jpg'),
('Weird Walk', 'Weird Walk', 'Books', 'A collection of Weird Wanders from the British Isles', 'https://example.com/weird-walk-book.jpg'),
('ID', 'ID Magazine', 'Fashion', 'Trendy fashion magazine with the latest in style and trends', 'https://example.com/id-magazine.jpg');

INSERT INTO shop_products (shop_id, product_id, price, stock_status) VALUES
-- International Magic Shop (Shop ID: 1)
(1, 1, 10.99, TRUE),
(1, 2, 25.50, TRUE),
(1, 3, 5.99, TRUE),

-- Space EC1 (Shop ID: 2)
(2, 4, 3.00, TRUE),
(2, 5, 29.50, TRUE),
(2, 6, 22.00, TRUE),

-- Farringdon Locksmith & Tool Supplies Co.ltd (Shop ID: 3)
(3, 7, 12.99, TRUE),
(3, 8, 2.00, TRUE),
(3, 9, 3.99, TRUE),
(3, 10, 2.99, TRUE),

-- Stuart R Stevenson (Shop ID: 4)
(4, 11, 35.00, TRUE),
(4, 12, 28.50, TRUE),
(4, 13, 15.99, TRUE),
(4, 14, 18.99, TRUE),

-- Mag Culture (Shop ID: 5)
(5, 15, 39.99, TRUE),
(5, 16, 8.00, TRUE),
(5, 17, 26.40, TRUE);
