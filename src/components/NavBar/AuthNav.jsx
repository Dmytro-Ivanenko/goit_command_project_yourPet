
import { NavLink } from 'react-router-dom';

import { Box } from '@mui/material';

import styles from './authNav.module.scss';

export const AuthNavMobile = ({closeNavMenu}) => {
  return (
    <Box className={styles.authNavBoxMobile}
    >
      <NavLink onClick={closeNavMenu} className={styles.authNavlink} to="/register">Registration</NavLink>
      <NavLink onClick={closeNavMenu} className={styles.authNavlink} to="/login">
        <span className={styles.navLinkText}>Log In</span>
      </NavLink>
    </Box>
  );
};


export const AuthNavDesktop = () => {
  return (
    <Box className={styles.authNavBoxDesktop}
    >
      <NavLink  className={styles.authNavlink} to="/register">Registration</NavLink>
      <NavLink  className={styles.authNavlink} to="/login">
        <span className={styles.navLinkText}>Log In</span>
      </NavLink>
    </Box>
  );
};

