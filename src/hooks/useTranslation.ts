import * as React from 'react';

// Api
import { getTranslateText } from 'api';

// Constants
import { Languages } from 'constant';

interface Result {
  translation: string;
  requestGetTranslateText: (language: Languages, text: string) => void;
  isWait: boolean;
}

export const useTranslation = (): Result => {
  const [translation, setTranslation] = React.useState<string>('');
  const [isWait, setIsWait] = React.useState<boolean>(false);

  const requestGetTranslateText = React.useCallback(
    async (language: Languages, text: string): Promise<void> => {
      setIsWait(true);
      const response = await getTranslateText(language, text);
      const { results } = response;
      setTranslation(results && results.length ? results[0] : 'Can\'t translate');
      setIsWait(false);
    },
    []
  );

  return {
    translation,
    requestGetTranslateText,
    isWait
  };
};
