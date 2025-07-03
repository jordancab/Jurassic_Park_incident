# Documentation de l’architecture AWS – Incident Tracker Jurassic Park

## 1. Services AWS choisis et justification

- **VPC** : Isolation réseau, contrôle du trafic.
- **Subnets publics/privés** : Séparation des ressources exposées et internes.
- **ALB (Application Load Balancer)** : Répartition du trafic, SSL, haute dispo.
- **ECS Fargate** : Déploiement scalable et managé des containers frontend/backend.
- **RDS MySQL (Multi-AZ)** : Base de données relationnelle haute dispo.
- **S3** : Sauvegardes, stockage statique.
- **CloudWatch** : Logs, alertes, monitoring.
- **IAM** : Gestion des permissions minimales.
- **Secrets Manager** : Stockage sécurisé des secrets DB/API.

## 2. Architecture réseau

- **VPC** avec 2 AZ.
- **Subnets publics** : ALB.
- **Subnets privés** : ECS tasks, RDS.
- **Security Groups** :
  - ALB : HTTP/HTTPS ouvert.
  - ECS : Accès depuis ALB uniquement.
  - RDS : Accès depuis ECS uniquement.

## 3. Stratégie de déploiement

- **CI/CD** via CodePipeline ou GitHub Actions.
- **Blue/Green deployment** sur ECS.
- **Infrastructure as Code** (CloudFormation ou Terraform).

## 4. Haute disponibilité

- **Multi-AZ** pour ALB, ECS, RDS.
- **Auto Scaling** sur ECS.
- **Sauvegardes automatiques RDS**.

## 5. Estimation des coûts mensuels (ordre de grandeur)

- **ALB** : ~20 €/mois
- **ECS Fargate** : ~50–100 €/mois (selon charge)
- **RDS MySQL (db.t3.micro Multi-AZ)** : ~40 €/mois
- **S3** : ~1 €/mois
- **CloudWatch** : ~5 €/mois
- **Total** : **~120–170 €/mois**

## 6. Bonnes pratiques sécurité/performance

- **Principle of least privilege** (IAM).
- **Security Groups restrictifs**.
- **Secrets dans Secrets Manager**.
- **TLS/SSL** sur ALB.
- **Logs et monitoring CloudWatch**.
- **Sauvegardes automatiques**.
- **Auto Scaling** pour absorber la charge.