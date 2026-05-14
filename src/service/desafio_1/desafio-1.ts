enum UserRole {
    DIRETOR = 'DIRETOR',
    GERENTE = 'GERENTE',
    PEAO = 'PEAO'

}



interface user {
    id: number;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
}


