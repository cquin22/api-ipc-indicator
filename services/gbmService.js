const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://www.gbm.com.mx',
});

module.exports = {

   getDataGraph: async  (company) => {
       const url = `/Mercados/ObtenerDatosGrafico?empresa=${company.toUpperCase()}`
       return await axiosInstance.get(url)
   }
};