# [Doc Secrets](https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually)

```bash
# encode 64 das informações
echo -n 'minha-senha' | tr -d \\n | base64 -w 0

# decode
echo <value> | base64 --decode
```
