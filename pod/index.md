# Steps

- Não se cria pods diretamente, pois não há resiliencia

```bash
kubectl create -f my_pod.yaml

kubectl get pods

kubectl describe pod mypod

kubectl port-forward pod/mypod 8080:80

kubectl delete pod mypod
```

- Second pod

```bash
# selecionar pela label
kubectl get pods -l app=web
```
