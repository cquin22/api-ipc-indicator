const axios = require('axios');
const faker = require('faker');


const createMock = async () =>{
    return {
        Fecha: faker.date.past(30),
        Precio: faker.random.number({
            min: 10000,
            max: 100000
        }),
        Porcentaje: 0,
        Volumen: faker.random.number({
            min: 100,
            max: 500
        })
    }
};

const createListDataMock = async (numberOfRecords) =>{
    const list = [];
    for (let _i = 0; _i < numberOfRecords; _i++) {
        list.push(await createMock());
    }
    return list;
};

module.exports = {

   getDataGraph: async  (numberOfRecords) => {
       // Comment because the service is down
       //const url = `/Mercados/ObtenerDatosGrafico?empresa=${company.toUpperCase()}`
       //return await axiosInstance.get(url)
       return await createListDataMock(numberOfRecords);
   }
};