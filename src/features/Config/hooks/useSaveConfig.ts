import * as React from 'react';

// Api
import { AxiosInstance } from 'api';

interface Result {
  isSavedConfig: boolean;
  saveConfig: (apiKey: string) => void;
}

export const useSaveConfig = (): Result => {
  const [isSavedConfig, setIsSavedConfig] = React.useState<boolean>(false);

  const saveConfig = (apiKey: string): void => {
    AxiosInstance.defaults.headers.apikey = apiKey;
    setIsSavedConfig(true);
  };

  return {
    isSavedConfig,
    saveConfig
  };
};
