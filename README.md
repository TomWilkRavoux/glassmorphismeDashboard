# 🚀 SwiftLogistics Dashboard

## 📌 Introduction
SwiftLogistics Dashboard est une application web conçue pour suivre les livraisons en temps réel, analyser les retards et aider la direction à optimiser la logistique. L'interface utilisateur est moderne et fluide grâce à **React** et **Tailwind CSS** (style Glassmorphisme), tandis que le backend repose sur **Node.js** et **PostgreSQL**.

---

## 🛠 Technologies Utilisées
### **Frontend :**
- React.js (Vite)
- Tailwind CSS (Design Glassmorphisme)
- Axios (Requêtes API)

### **Backend :**
- Node.js (Express.js)
- PostgreSQL (Base de données)

### **Déploiement :**
- Projet en local (non déployé, projet de cours)

---


## 🚀 Installation & Exécution
### **1️⃣ Cloner le projet**
```sh
git clone https://github.com/votre-repo/swiftlogistics-dashboard.git
cd swiftlogistics-dashboard
```

### **2️⃣ Backend (Node.js + PostgreSQL)**
```sh
cd backend
npm install
node server.js
```

### **3️⃣ Frontend (React + Tailwind CSS)**
```sh
cd ../frontend
npm install
npm run dev
```

### **4️⃣ Accéder à l'application**
Ouvrez votre navigateur et accédez à **`http://localhost:3000`**

---

## ⚙️ API Endpoints
| Méthode | Endpoint | Description |
|---------|---------|-------------|
| GET | `/total-deliveries` | Nombre total de livraisons en cours |
| GET | `/deliveries` | Liste des livraisons |
| GET | `/alerts` | Liste des alertes |
| GET | `/average-delay` | Temps moyen de retard |
| GET | `/priority-count` | Nombre de livraisons par priorité |

---

## 🎨 Fonctionnalités
- 📊 **Dashboard interactif** avec statistiques en temps réel
- 📦 **Tableau des livraisons** avec tri par priorité et statut
- 🚨 **Système d'alertes** pour signaler les retards
- 🔍 **Filtres et recherche avancée** pour retrouver une livraison
- 🔐 **Sécurité avec JWT** pour l'authentification

---

## 🛠 Prochaines Améliorations
- ✅ Ajout de graphiques pour l'analyse des performances 📊
- ✅ Intégration d'un système de notifications en temps réel 🔔
- ✅ Optimisation pour un déploiement futur ☁️

---

## 🏆 Contributeurs
- **[Snowgou](https://github.com/votre-profil)** - Développement Fullstack
- **Projet réalisé dans le cadre d'un cours**

---
