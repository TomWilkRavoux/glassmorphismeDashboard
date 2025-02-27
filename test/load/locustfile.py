from locust import HttpUser, task, between

class SwiftLogisticsUser(HttpUser):
    wait_time = between(1, 3)  # Temps d'attente aléatoire entre chaque requête

    @task
    def test_homepage(self):
        """Test de la page d'accueil"""
        self.client.get("/")

    @task
    def test_total_deliveries(self):
        """Test de la récupération du total des livraisons"""
        self.client.get("/total-deliveries")

    @task
    def test_deliveries(self):
        """Test de la récupération de la liste des livraisons"""
        self.client.get("/deliveries")

    @task
    def test_alerts(self):
        """Test de la récupération des alertes"""
        self.client.get("/alerts")

    @task
    def test_average_delay(self):
        """Test du délai moyen des livraisons retardées"""
        self.client.get("/average-delay")

    @task
    def test_priority_count(self):
        """Test du nombre de livraisons par priorité"""
        self.client.get("/priority-count")
