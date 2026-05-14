import axios = require("axios");

enum UserRole {
    DIRETOR = 'DIRETOR',
    GERENTE = 'GERENTE',
    PEAO = 'PEAO'

}



interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    isActive: boolean;
}

type UserSumary = Pick<User, 'id' | 'name' | 'email' | 'role'>


async function getUsersMockData(): Promise <UserSumary[]> {
    try {
        const response = await axios.get<User[]>('https://6a05d15aaa826ca75c0aa767.mockapi.io/api/desafio1/users')
        const users = response.data;

        const activeManengers = users
        .filter(user => user.isActive === true && user.role === UserRole.PEAO)
        .map( user => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role 
             
            }
        })
        return activeManengers;
    } catch(err) {
        console.error('erro ao buscar , falta algo ai', err)
        return []
    }
}


async function executeGet() {
    console.log('buscando');
    const manegers = await getUsersMockData()
    console.log('exibindos os peões da empresa', manegers);
    
}

executeGet()