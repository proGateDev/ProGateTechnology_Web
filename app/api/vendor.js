import axios from 'axios';
import { devURL } from '../config/server';
import httpClient from '../services/httpClient';

//========================================================================

export const getVendors = async () => {
  return httpClient.get(`/api/v1/web/vendors/list`);
};
export const getVendorsCategories = async (vendorId) => {
  return httpClient.get(`/api/v1/web/vendors/category/${vendorId}`);
};


//========================================================================================================
