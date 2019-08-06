import React from 'react';
import { createUseStyles } from 'react-jss'

import UserList from './UserList'

const useStyles = createUseStyles({
  Content: {
    width: '90%',
    minHeight: 400,
    margin: 30,
    backgroundImage: props => props.themeGradient,
  }
});

function Content(props) {
  const classes = useStyles(props);
  return (
    <section className={classes.Content}>
      <UserList />
    </section>
  );
}

export default Content;
