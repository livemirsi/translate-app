import * as React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Hooks
import { useConfig, useSaveConfig } from './hooks';

export const Config = (): JSX.Element | null => {
  const { isValidKey, apiKey, setApiKey } = useConfig();
  const { isSavedConfig, saveConfig } = useSaveConfig();

  if (isSavedConfig) {
    return null;
  }

  return (
    <Alert severity="warning">
      <AlertTitle>Attention! Write api key to continue the work</AlertTitle>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item>
          <TextField
            label="Api key"
            value={apiKey}
            onChange={(event): void => setApiKey(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isValidKey}
            onClick={(): void => saveConfig(apiKey)}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Alert>
  );
};
