/* eslint-disable */
import axios from 'axios';
import AuthService from '../auth/AuthService';
const API_URL = 'http://localhost:8000';

export class APIService{
    constructor(){
      
    }
    getProducts() {
        const url = `${API_URL}/api/products/`;
        return axios.get(url, { headers: { Authorization: `Bearer ${AuthService.getAuthToken()}` }}).then(response => response.data);
    }
    getProductsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url, { headers: { Authorization: `Bearer ${AuthService.getAuthToken()}` }}).then(response => response.data);
        
    }
    getProduct(pk) {
        const url = `${API_URL}/api/products/${pk}`;
        return axios.get(url, { headers: { Authorization: `Bearer ${AuthService.getAuthToken()}` }}).then(response => response.data);
    }    
    deleteProduct(product){
        const url = `${API_URL}/api/products/${product.pk}`;
        return axios.delete(url, { headers: { Authorization: `Bearer ${AuthService.getAuthToken()}` }});

    }
    createProduct(product){
        const url = `${API_URL}/api/products/`;
        const headers = {Authorization: `Bearer ${AuthService.getAuthToken()}`};
        return axios.post(url,product,{headers: headers});
    }
    updateProduct(product){
        const url = `${API_URL}/api/products/${product.pk}`;
        const headers = {Authorization: `Bearer ${AuthService.getAuthToken()}`};
        return axios.put(url,product,{headers: headers});
    }    
} 