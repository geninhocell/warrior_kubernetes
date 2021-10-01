# Generate Admin User

- IMPORTANTE: certifique-se de saber o que está fazendo antes de prosseguir. Conceder privilégios de administrador à conta de serviço do painel pode ser um risco de segurança.

- [Doc Authentication](https://kubernetes.io/docs/reference/access-authn-authz/authentication/)
- [Doc Authorization](https://kubernetes.io/docs/reference/access-authn-authz/authorization/)

```bash
# dashboard
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml

# criação do usuário
kubectl apply -f service_account_admin_user.yaml

# atrelando usuário criado as permissões
kubectl apply -f cluster_role_binding.yaml

# obter o token de acesso
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"



# NodePort (localhost:8000)
kubectl apply -f service-kubernetes-dashboard-nodeport.yaml
```

- Acessar com proxy

```bash
kubectl proxy
```

[dashboard link com proxy](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login)

## Remova o administrador ServiceAccount e ClusterRoleBinding

```bash
kubectl -n kubernetes-dashboard delete service_account_admin_user.yaml admin-user
kubectl -n kubernetes-dashboard delete cluster_role_binding.yaml admin-user
```

```bash
# expose, comando precisa de revisão
kubectl expose deployment kubernetes-dashboard --name=kubernetes-dashboard-nodeport --port=443 --target-port=8443 --type=NodePort -n kube-system
```
