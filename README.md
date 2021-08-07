![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Resumo M03
Seu objetivo é replicar o layout e funcionalidades do app encontrado no arquivo .fig (raiz do projeto).

### Requisitos:
- Cadastro:
  - O usuário deverá confirmar sua senha
  - O usuário poderá optar por visualizar ou não sua senha
  - Ao realizar o cadastro com sucesso, o usuário será redirecionado para a "Home"
- Login:
  - O usuário poderá optar por visualizar ou não sua senha
  - Ao realizar o login com sucesso, o usuário será redirecionado para a "Home"
- Header: 
  - O nome do usuário deverá aparecer no Header
  - O usuário poderá sair da aplicação pelo Header e ser redirecionado para o "Cadastro/Login"
- Home:
  - O "Header" deverá aparecer nesta tela
  - O usuário deverá conseguir ir para a "Atualização"
- Atualização:
  - O "Header" deverá aparecer nesta tela
  - O usuário deverá confirmar sua senha
  - O usuário poderá optar por visualizar ou não sua senha
  - O usuário deverá conseguir ir para a "Home"

### Especificações API:
[URL base](https://revisao-m03.herokuapp.com/)

#### POST /usuarios
Campos obrigatórios:
- nome (string)
- email (string)
- senha (string)

Requisição exemplo:

**BODY**
```json
{
    "nome": "Dina",
    "email": "dina@email.com",
    "senha": "123"
}
```
Reposta exemplo: 

**BODY**
```json
"Usuário cadastrado com sucesso."
```

#### POST /login
Campos obrigatórios:
- email (string)
- senha (string)

Requisição exemplo:

**BODY**
```json
{
    "email": "dina@email.com",
    "senha": "123"
}
```
Reposta exemplo:

**BODY**
```json
{
    "usuario": {
        "id": 1,
        "nome": "Dina",
        "email": "dina@email.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDAwOTU1LCJleHAiOjE2MjgwODU1NTV9.AIk32KlE0NWZ6zZSLKnZftu8L3S0Bzc7k0ASj1-mdwE"
}
```

#### GET /perfil
Requisição exemplo:

**HEADERS**
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDAwOTU1LCJleHAiOjE2MjgwODU1NTV9.AIk32KlE0NWZ6zZSLKnZftu8L3S0Bzc7k0ASj1-mdwE"
}
```
Reposta exemplo: 

**BODY**
```json
{
    "id": 1,
    "nome": "Dina",
    "email": "dina@email.com"
}
```

#### PUT /perfil
Campos obrigatórios (pelo menos um):
- nome (string)
- email (string)
- senha (string)

Requisição exemplo:

**HEADERS**
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MDAwOTU1LCJleHAiOjE2MjgwODU1NTV9.AIk32KlE0NWZ6zZSLKnZftu8L3S0Bzc7k0ASj1-mdwE"
}
```

**BODY**
```json
{
    "nome": "Dina",
    "email": "dina@email.com",
    "senha": "123"
}
```
Reposta exemplo: 

**BODY**
```json
"Perfil atualizado com sucesso."
```

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits no seu fork na origem (`git push origin nome-da-branch`)

###### tags: `módulo 3` `exercício de classe` `React`
