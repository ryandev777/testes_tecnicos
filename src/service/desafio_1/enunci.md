Teste 1: Tipagem de Dados e Utility Types
Objetivo: Avaliar a capacidade de modelar dados estruturados, usar enums e manipular arrays com tipagem estrita.
Cenário: Você precisa processar uma lista de usuários de um sistema.
Instruções:

Crie um enum UserRole com os valores ADMIN, MANAGER e EMPLOYEE.

Defina uma interface User contendo: id (number), name (string), email (string), role (UserRole) e isActive (boolean).

Usando o Utility Type Pick ou Omit, crie um tipo UserSummary que contenha apenas o id, name e email.

Escreva uma função chamada getActiveManagers que receba um array de User e retorne um array de UserSummary, contendo apenas os gerentes que estão com a propriedade isActive como verdadeira.

