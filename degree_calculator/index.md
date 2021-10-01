# Frontend Web

```bash
kubectl apply -f deploy.yaml
```

Acessar no endereço localhost:8080

## Variavel de ambiente

- [Doc](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/)

```bash
# build staging
docker build -t geninhocell/degree_calculator:1.0.4-staging --build-arg STAGE=staging .

kubectl apply -f deploy.yaml -n staging

kubectl apply -f service.yaml -n staging


```
