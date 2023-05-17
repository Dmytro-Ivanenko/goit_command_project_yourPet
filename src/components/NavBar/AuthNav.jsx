import { StyledNavLink } from 'shared/components/StyledNavLink/StyledNavLink.styled';


import { Box } from '@mui/material';

import styles from './authNav.module.scss';

import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';


export const AuthNavMobile = ({ closeNavMenu }) => {
 
  return (
    <Box className={styles.authNavBoxMobile}
    >
      <StyledNavLink
        onClick={() => closeNavMenu('Registration')}
        to="/register">
        Registration
      </StyledNavLink>
      <StyledNavLink
        onClick={() => closeNavMenu('Log In')}
        to="/login">
        Log In <PetsOutlinedIcon sx={{ transform: 'rotate(25deg)' }} />
      </StyledNavLink>
    </Box>
  );
};


export const AuthNavDesktop = () => {
  return (
    <Box className={styles.authNavBoxDesktop}
    >
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">
        Log In <PetsOutlinedIcon sx={{ transform: 'rotate(25deg)' }} />
      </StyledNavLink>
    </Box>
  );
};

