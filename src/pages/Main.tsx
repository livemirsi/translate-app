import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Constants
import { SpacingGap } from 'constant';

// Hooks
import { useTranslation } from 'hooks';

// Features
import { EditTranslation, TranslatedText, Config } from 'features';

export const MainPage = (): JSX.Element => {
  const { translation, requestGetTranslateText, isWait } = useTranslation();

  return (
    <Container maxWidth="lg" style={{ marginTop: SpacingGap.S8 }}>
      <Paper style={{ padding: SpacingGap.S4 }}>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
          >
            <Config />
          </Grid>
          <Grid
            item
            xs={6}
          >
            <EditTranslation onTranslate={requestGetTranslateText} isWait={isWait}/>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <TranslatedText text={translation} isWait={isWait}/>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
