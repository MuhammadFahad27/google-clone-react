import axios from "axios";



const baseUrl = import.meta.env.VITE_BASE_URL ;

const params = {

    key:import.meta.env.VITE_API_URL,
    cx:import.meta.env.VITE_CX
}


export const fetchDataFromApi = async(payload)=>{

    try {

         const {data} = await axios.get(baseUrl,{

        params:{...params,...payload}
    })
      console.log("API Response:", data);
       return data ;
        
    } catch (error) {

        console.log(error)
        return null
    }

   
   
}