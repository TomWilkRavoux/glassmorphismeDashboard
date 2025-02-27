-- Création de la base de données
CREATE DATABASE swiftlogistics;
\c swiftlogistics;

-- Table des niveaux de priorité
CREATE TABLE priority_levels (
    id SERIAL PRIMARY KEY,
    level VARCHAR(10) UNIQUE NOT NULL
);

-- Insertion des niveaux de priorité
INSERT INTO priority_levels (level) VALUES ('Low'), ('Medium'), ('High');

-- Table des livraisons
CREATE TABLE deliveries (
    id SERIAL PRIMARY KEY,
    tracking_number VARCHAR(20) UNIQUE NOT NULL,
    destination VARCHAR(100) NOT NULL,
    delay INTERVAL DEFAULT '0 days',
    status VARCHAR(20) CHECK (status IN ('In Transit', 'Delayed', 'Delivered')),
    priority_id INTEGER REFERENCES priority_levels(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des alertes
CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    delivery_id INTEGER REFERENCES deliveries(id) ON DELETE CASCADE,
    alert_type VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vue : Nombre total de livraisons en cours
CREATE VIEW view_total_deliveries AS
SELECT COUNT(*) AS total_in_progress
FROM deliveries
WHERE status = 'In Transit';

-- Vue : Temps moyen de retard des livraisons en cours
CREATE VIEW view_average_delay AS
SELECT COALESCE(AVG(delay), INTERVAL '0 days') AS average_delay
FROM deliveries
WHERE status = 'Delayed';

-- Vue : Nombre de livraisons par priorité
CREATE VIEW view_priority_count AS
SELECT p.level, COUNT(d.id) AS total
FROM deliveries d
JOIN priority_levels p ON d.priority_id = p.id
GROUP BY p.level;

-- Ajout de quelques données fictives pour test
INSERT INTO deliveries (tracking_number, destination, delay, status, priority_id)
VALUES
('TN789012', 'New York, NY', INTERVAL '2 days', 'In Transit', 3),
('TN456789', 'Los Angeles, CA', INTERVAL '1 day', 'Delayed', 2),
('TN123456', 'Chicago, IL', INTERVAL '3 days', 'Delayed', 3),
('TN234567', 'Houston, TX', INTERVAL '1 day', 'In Transit', 1);

-- Ajout de quelques alertes
INSERT INTO alerts (delivery_id, alert_type, message)
VALUES
(2, 'Retard', 'La livraison TN456789 est en retard'),
(3, 'Retard', 'La livraison TN123456 est en retard');
