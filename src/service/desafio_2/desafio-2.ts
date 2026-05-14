import axios = require("axios");

interface Vehicle {
    id: string;
    plate:string
    fuel:string;
    model: string;
}




async function fetchData<T>(url: string): Promise<T>{
    try {
        const response = await axios.get<T>(url);
        return response.data;
    } catch (error) {
        throw new Error(`erro ao buscar dados: ${url}` )
    }
    
}


async function executeGet() {
    const apiUrl = 'https://6a05d15aaa826ca75c0aa767.mockapi.io/api/desafios/vehicle';

    console.log("iniciando a busca");

    try {
        const vehicles = await fetchData<Vehicle[]>(apiUrl)
        console.log('deu certo');

        if (vehicles.length === 0){
           console.error("a lista não deve ser vazia.");
             return
            
        } 
            const map = vehicles.map(vehicle => {
                return {
                    id: vehicle.id,
                    plate: vehicle.plate,
                    fuel: vehicle.fuel,
                    model: vehicle.model
                }
                
            })
            console.log("Dados mapeados com sucesso:", map);
            return map;
  
        
    } catch(error){
        if (error instanceof Error){
            console.log("erro capturado", error.message);
            
        } else {
            console.error('algo de errado não esta certo');
            
        }
    }
}

executeGet()