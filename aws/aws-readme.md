# Déploiement de l’architecture AWS – Incident Tracker Jurassic Park

## Prérequis

- Accès AWS avec droits admin
- AWS CLI configuré
- Terraform ou CloudFormation installé

## Étapes

1. **Créer le VPC et les subnets** (CloudFormation/Terraform)
2. **Déployer l’ALB** dans les subnets publics
3. **Déployer ECS Fargate** (ou EC2 ASG) dans les subnets privés
4. **Déployer RDS MySQL** (Multi-AZ)
5. **Configurer les Security Groups**
6. **Déployer les applications via CI/CD**
7. **Configurer CloudWatch, S3, IAM, Secrets Manager**
8. **Tester l’accès via l’ALB**

## Exemple de commande Terraform

```sh
terraform init
terraform apply