import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

interface Props {
  text: string;
  isWait: boolean;
}

export const TranslatedText = ({ text, isWait }: Props): JSX.Element => {
  if (isWait) {
    return (
      <LinearProgress />
    );
  }
  return (
    <Typography variant="body2" color="textSecondary" component="p">
      {text}
    </Typography>
  );
};
