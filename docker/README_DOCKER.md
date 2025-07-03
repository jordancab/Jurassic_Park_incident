# Construction et push des images Docker

## Backend
```sh
docker build -t jordanmeudje/incident-backend:latest -f docker/backend/Dockerfile .
docker push jordanmeudje/incident-backend:latest
```
## Frontend
```sh
docker build -t jordanmeudje/incident-frontend:latest -f docker/frontend/Dockerfile .
docker push jordanmeudje/incident-frontend:latest