import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { MobileMenu } from './AppBar.styled';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as Logo } from '../../images/icons/logo.svg';
import { AuthNavMobile } from 'components/NavBar/AuthNav';
import { UserMenuMobile } from 'components/NavBar/UserMenu';
import IconButton from '@mui/material/IconButton';
import styles from './AppBar.module.scss';

const MobileMenuComponent = ({
    anchorElNav,
    handleCloseNavMenu,
    isLoggedIn,
    pages,
    isActiveButton,
    setIsActiveButton,
}) => (
    <MobileMenu
        id="menu-appbar"
        anchorReference="none"
        anchorPosition={{ top: 0, left: 0 }}
        anchorEl={anchorElNav}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
            display: { xs: 'block', sm: 'block', md: 'flex', lg: 'none' },
            width: '100vw',
            maxWidth: 'none',
            maxHeight: 'none',
            padding: 0,
        }}
        classes={{ paper: 'mobile-menu' }}
        className="mobile-menu"
    >
        <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
            className={styles.myCustomBox}
        >
            <IconButton component={NavLink} to="/main" onClick={handleCloseNavMenu}>
                <Logo width={116} height={20} />
            </IconButton>
            <IconButton
                onClick={handleCloseNavMenu}
                sx={{
                    color: 'var(--header-acc)',
                    width: '24px',
                    height: '24px',
                }}
            >
                <CloseIcon />
            </IconButton>
        </Box>
        {isLoggedIn ? (
            <UserMenuMobile closeNavMenu={handleCloseNavMenu} />
        ) : (
            <AuthNavMobile closeNavMenu={handleCloseNavMenu} />
        )}

        {pages.map(({ name, path }) => (
            <MenuItem
                key={name}
                onClick={() => {
                    handleCloseNavMenu(path);
                    setIsActiveButton(path);
                }}
                sx={{
                    my: 2,
                    color: isActiveButton === path ? 'var(--header-acc)' : 'var(--header-font)',
                    display: 'block',
                    margin: 0,
                }}
                className={styles.menuItemMobile}
                component={NavLink}
                to={path}
            >
                <p className={styles.menuTextMobile}>{name}</p>
            </MenuItem>
        ))}
    </MobileMenu>
);

export default MobileMenuComponent;

MobileMenuComponent.propTypes = {
    handleCloseNavMenu: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            path: PropTypes.string,
        })
    ).isRequired,
    isActiveButton: PropTypes.string,
    setIsActiveButton: PropTypes.func.isRequired,
    anchorElNav: PropTypes.any,
};

MobileMenuComponent.defaultProps = {
    pages: [],
};
