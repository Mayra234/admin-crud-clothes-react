import axios from 'axios';
import { LOCAL_BASE_URL } from '../../constants/baseUrls';

export const useCompanyApi = () => {
  const baseUrl = LOCAL_BASE_URL;

  const list = async () => {
    const response = await axios.get(`${baseUrl}/companies`);
    return response.data;
  };

  const create = async (data) => {
    const response = await axios.post(`${baseUrl}/comapnies`, {
      data: 'NewItem',
    });
    return response.data;
  };

  const read = async (id) => {
    const response = await axios.get(`${baseUrl}/companies/${id}`);
    return response.data;
  };

  const update = async (id, data) => {
    const response = await axios.put(`${baseUrl}/companies/${id}`, {
      data: 'NewItem',
    });
    return response.data;
  };

  const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}/companies/${id}`);
    return response.data;
  };

  return {
    list,
    create,
    read,
    update,
    remove,
  };
};
