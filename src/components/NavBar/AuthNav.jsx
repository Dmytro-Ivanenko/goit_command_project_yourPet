import { StyledNavLink } from 'shared/components/StyledNavLink/StyledNavLink.styled';

import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import styles from './authNav.module.scss';

import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

export const AuthNavMobile = ({ closeNavMenu }) => {
    return (
        <Box className={styles.authNavBoxMobile}>
            <StyledNavLink onClick={() => closeNavMenu('Registration')} to="/register">
                Registration
            </StyledNavLink>
            <StyledNavLink onClick={() => closeNavMenu('Log In')} to="/login">
                Log In <PetsOutlinedIcon sx={{ transform: 'rotate(25deg)' }} />
            </StyledNavLink>
        </Box>
    );
};

export const AuthNavDesktop = ({ handleClick }) => {
    return (
        <Box className={styles.authNavBoxDesktop}>
            <StyledNavLink onClick={() => handleClick()} to="/login">
                Log In <PetsOutlinedIcon sx={{ transform: 'rotate(25deg)' }} />
            </StyledNavLink>
            <StyledNavLink onClick={() => handleClick()} to="/register">
                Registration
            </StyledNavLink>
        </Box>
    );
};

AuthNavMobile.propTypes = {
    closeNavMenu: PropTypes.func.isRequired,
};

AuthNavDesktop.propTypes = {
    handleClick: PropTypes.func.isRequired,
};
