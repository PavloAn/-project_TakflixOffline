import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ResponsiveMovieCard from '../components/ResponsiveMovieCard/ResponsiveMovieCard';
import { getMovies } from '../../../store/actions';
import "./movie.css";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '3rem',
    lineHeight: '3rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(3)
  },
  [theme.breakpoints.down('sm')]: {
    fullWidth: { width: '100%' }
  }
}));

function MovieCategoryPage(props) {
  const { movies, getMovies } = props;
  const category = props.match.params.category;
  useEffect(() => {
    if (!movies.length) {
      getMovies();
    }
  }, [movies, getMovies]);

  const classes = useStyles(props);
  return (
    <Grid container spacing={2}>
      {!['afisha', ''].includes(category) ? (
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2" color="inherit">
          <div className="text">
        <h2>
            <p>Takflix — це перший і єдиний онлайн-кінотеатр українського кіно. Наша місія - зробити українське кіно легально доступним до перегляду у всіх куточках світу, заохочувати глядачів до перегляду якісного українського контенту та підтримувати національне кіномистецтво.
            Саме тому 50% від продажу квитків на Takflix отримують творці кіно.</p>
            <p>Онлайн-кінотеатр Takflix запустився в грудні 2019 року. За два роки роботи наша платформа має найбільшу колекцію українського кіно. У нас можна вибрати до перегляду фільм на будь-який смак, від кінокласики та фільмів-призерів міжнародних кінофестивалів до дебютів молодих режисерів та мистецької документалістики.</p>    
        </h2>
    </div>
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h2" color="inherit">
              {category}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}>
            {movies.map(movie => (
              <Grid key={movie._id} item className={classes.fullWidth}>
                <ResponsiveMovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
}

const mapStateToProps = ({ movieState }, ownProps) => ({
  movies: movieState[ownProps.match.params.category] || []
});

const mapDispatchToProps = { getMovies };

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategoryPage);
