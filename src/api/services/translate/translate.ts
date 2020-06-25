import { AxiosInstance } from 'api';

// Constants
import { Languages } from 'constant/language';

// Types
import { ResponseGetTranslateText } from './translate.types';

export const getTranslateText = async (
  to: Languages, text: string
): Promise<ResponseGetTranslateText> => {
  const context = {
    text,
    to
  };
  const responseApi = await AxiosInstance.post('/ai/text/translate', { context });

  return responseApi.data;
};
