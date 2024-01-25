import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
    baseURL: "https://db-de-carro.vercel.app/"
})

export async function Search() {
   await api.get('/supercars').then(
      response => {
        console.log(response.data)
      }
    ).catch(error => {console.log('error fetching data', error)})
  }

  export async function dadoArray(){
    try{
        const dadosDeCarros = await api.get('/supercars');
        return dadosDeCarros.data
    }
    catch (error){
        Alert.alert('Houve um erro ao buscar os dados dos carros: ', error)
        console.log('Houve um erro ao buscar os dados dos carros: ', error)
        return {}
    }
  }
  export async function dadosMarcas(){
    try{
        const dadosDeCarros = await api.get('/Companies');
        return dadosDeCarros.data
    }
    catch (error){
        Alert.alert('Houve um erro ao buscar os dados das marcas: ', error)
        console.log('Houve um erro ao buscar os dados das marcas: ', error)
        return {}
    }
  }