import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <Divider />
    <Typography className={classes.copyright} variant="body1">
      &copy; 2022 Takflix Offline
    </Typography>
    <Typography variant="caption">
        Створено з любов'ю |{' '}
        <Link href="https://github.com/PavloAn/TakflixOffline" target="_blank" rel="noopener">
          Наш GitHub
        </Link>
      </Typography>
  </div>
  );
}