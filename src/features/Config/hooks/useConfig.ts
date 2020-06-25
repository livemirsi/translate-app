import * as React from 'react';

interface Result {
  isValidKey: boolean;
  apiKey: string;
  setApiKey: (apiKey: string) => void;
}

export const useConfig = (): Result => {
  const [apiKey, setApiKey] = React.useState<string>('');

  return {
    isValidKey: Boolean(apiKey && apiKey.length > 10),
    apiKey,
    setApiKey
  };
};
