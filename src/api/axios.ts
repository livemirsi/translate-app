import axios from 'axios';
import { toast } from 'react-toastify';

// Constants
import { API_URL } from 'constant/api';

export const AxiosInstance = axios.create({
  baseURL:        API_URL,
  headers:        { 'x-user-agent': 'Intento.Web.Axios/1.1.0' },
  validateStatus: () => true
});

AxiosInstance.interceptors.response.use(
  response => {
    if (response.data.message) {
      toast(response.data.message, {
        position:        'top-right',
        autoClose:       5000,
        hideProgressBar: false,
        closeOnClick:    true,
        pauseOnHover:    true,
        draggable:       true
      });
    }

    return response;
  }
);
