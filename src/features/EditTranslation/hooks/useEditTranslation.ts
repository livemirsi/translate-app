import * as React from 'react';

// Constants
import { Languages } from 'constant';

interface State {
  language: Languages;
  text: string;
}

interface Result {
  stateEditTranslation: State;
  updateStateEditTranslation: (state: Partial<State>) => void;
  availableSendText: boolean;
}

export const useEditTranslation = (): Result => {
  const [stateEditTranslation, setStateEditTranslation] = React.useState<State>({
    language: Languages.ES,
    text:     ''
  });

  const availableSendText = Boolean(
    stateEditTranslation.text && stateEditTranslation.text.length > 1
  );

  const updateStateEditTranslation = React.useCallback(
    (state: Partial<State>) => {
      setStateEditTranslation({
        ...stateEditTranslation,
        ...state
      });
    },
    [stateEditTranslation]
  );

  return {
    stateEditTranslation,
    updateStateEditTranslation,
    availableSendText
  };
};
