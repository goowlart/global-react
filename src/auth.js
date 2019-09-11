import axios from 'axios'
import {setAuthorizationToken} from './utils/setAuthorizationToken'

// export const isAthenticated = () => true

export const auth = async (data) => {
       return axios.post('http://localhost:3001/api/auth', data).then(response =>{
           const { token } = response.data
           localStorage.setItem('jwtToken', token)
           localStorage.setItem('isAthenticated', true)
           setAuthorizationToken(token) 
         
        
           
       }).catch (error => {
           let {response} = error
           localStorage.setItem('erros', JSON.stringify(response))
       })
   
}

export const register = async (data) => {
    
    return axios.post('http://localhost:3001/api/register', data).then(response =>{
        const { token } = response.data
        localStorage.setItem('jwtToken', token)
        localStorage.setItem('isAthenticated', true)
        setAuthorizationToken(token)
    })

}
