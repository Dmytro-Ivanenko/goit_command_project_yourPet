import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getUserNameFromEmail } from 'shared/helpers/getUserNameFromEmail';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { MobileMenu } from './AppBar.styled';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as Logo } from '../../images/icons/logo.svg';
import { ReactComponent as User } from '../../images/icons/user.svg';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from 'shared/hooks/useAuth';
import styles from './AppBar.module.scss';

import { AuthNavMobile, AuthNavDesktop } from 'components/NavBar/AuthNav';
import { UserMenuMobile } from 'components/NavBar/UserMenu';

const pages = [
    { name: 'News', path: '/news' },
    { name: 'Notice', path: '/notices' },
    { name: 'Our Friends', path: '/friends' },
];



function ResponsiveAppBar() {
    const theme = useTheme();
    const isMobileScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isTabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));


    const { isLoggedIn, user } = useAuth();
    console.log('isLoggedIn', isLoggedIn);
    console.log("user", user);

    const padding = {
        desktop: '16px',
        tablet: '32px',
        mobile: '20px',
    };

    const containerStyles = {
        padding: isMobileScreen ? padding.mobile : isTabletScreen ? padding.tablet : padding.desktop,
    };

    const [isActiveButton, setActiveButton] = useState(localStorage.getItem('activeButton') || '');
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    useEffect(() => {
        localStorage.setItem('activeButton', isActiveButton);
    }, [isActiveButton]);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };
 

    const handleCloseNavMenu = name => {
        setAnchorElNav(null);
        setActiveButton(name);
    };

    const handleClickUserMenu = () => {
        setActiveButton('');
        localStorage.setItem('activeButton','')
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const userName = getUserNameFromEmail(user.email);
    
    return (
        <AppBar position="static" sx={{ backgroundColor: 'var(--main-back)' }}>
            <Container maxWidth="xl" sx={containerStyles}>
                <Toolbar disableGutters sx={{ gap: '8px' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component={NavLink}
                        to="/main"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >
                        <Logo width={162} height={28} />
                    </Typography>

                    <Typography
                        variant="h5"
                        noWrap
                        component={NavLink}
                        to="/main"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Logo width={116} height={20} />
                    </Typography>

                    {/* Main menu */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                            gap: '40px',
                            alignItems: 'center',
                        }}
                    >
                        {pages.map(({ name, path }) => (
                            <Button
                                key={name}
                                onClick={() => handleCloseNavMenu(name)}
                                sx={{
                                    my: 2,
                                    color: isActiveButton === name ? 'var(--header-acc)' : 'var(--header-font)',
                                    display: 'block',
                                    fontFamily:"Manrope",
                                    fontSize:'20px',
                                    lineHeight: '1.35',
                                    letterSpacing: '0.04em',

                                }}
                                component={NavLink}
                                to={path}
                            >
                                {name}
                            </Button>
                        ))}
                    </Box>
                    {/* User menu descktop */}
                    {isLoggedIn ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <Box onClick={handleClickUserMenu} component={NavLink} to="/user" sx={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: "none" }}>
                                <IconButton sx={{ p: 0 }}>
                                    <User alt="Remy Sharp" />
                                </IconButton>
                                <span className={styles.userNameDesc}>{user.name ? (user.name) : userName}</span>
                            </Box>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            </Menu>
                        </Box>
                    ) : (
                        <AuthNavDesktop />
                    )}

                    {/* Burger menu */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon style={{ color: 'var(--header-acc)' }} />
                        </IconButton>
                        {/* Mobile menu */}
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
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} className={styles.myCustomBox}>
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
                                    onClick={() => handleCloseNavMenu(name)}
                                    sx={{
                                        my: 2,
                                        color: isActiveButton === name ? 'var(--header-acc)' : 'var(--header-font)',
                                        display: 'block',
                                        margin: 0,
                                    }}
                                    className={styles.menuItemMobile}
                                    component={NavLink}
                                    to={path}
                                >
                                    <p
                                        className={styles.menuTextMobile}>
                                        {name}
                                    </p>
                                </MenuItem>
                            ))}
                        </MobileMenu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
