import axios from 'axios'
import baseUrl from './config';

const api = axios.create({
  baseURL: baseUrl.baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 60000
});


export const getFeatureProducts = (params) => api.get('/get-products?isFeatured=true', { params });

export const getNewProducts = (params) => api.get('/get-products?isFeatured=false', { params });
export const getDetailProducts = (productId, params = {}) => api.get(`/product/${productId}`, { params });
export const getProductComments = (productId, params = {}) => api.get(`/get-product-comments/${productId}`, { params });
export const createComment = (params) => api.post(`/create-comment`, { params });
export const getCategory = (params = {}) => api.get(`/get-categories`, { params });
export const getProductByName = (params) => api.get('/get-products', { params }); 