import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// Constants
import { Languages } from 'constant';

// Hooks
import { useEditTranslation } from './hooks';

const availableLanguages = Object.values(Languages)
  .map(item => item);

interface Props {
  isWait: boolean;
  onTranslate: (language: Languages, text: string) => void;
}

export const EditTranslation = ({ isWait, onTranslate }: Props): JSX.Element => {
  const {
    stateEditTranslation,
    updateStateEditTranslation,
    availableSendText
  } = useEditTranslation();

  const handleOnTranslate = React.useCallback(
    () => {
      const { language, text } = stateEditTranslation;
      onTranslate(language, text);
    },
    [stateEditTranslation, onTranslate]
  );

  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <Grid
          container
          justify="space-between"
          alignItems="flex-end"
          spacing={2}
        >
          <Grid
            item
            xs={7}
          >
            <FormControl fullWidth>
              <InputLabel>Select language</InputLabel>
              <Select
                value={stateEditTranslation.language}
                onChange={(event): void => updateStateEditTranslation(
                  { language: event.target.value as Languages }
                )}
                disabled={isWait}
              >
                {availableLanguages
                  .map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={!availableSendText || isWait}
              onClick={handleOnTranslate}
            >
              Translate
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextareaAutosize
          value={stateEditTranslation.text}
          placeholder="Write text"
          rowsMin={10}
          rowsMax={10}
          cols={72}
          disabled={isWait}
          onChange={(event): void => updateStateEditTranslation({ text: event.target.value })}
        />
      </Grid>
    </Grid>
  );
};
