import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getUserNameFromEmail } from 'shared/helpers/getUserNameFromEmail';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as Logo } from '../../images/icons/logo.svg';
import { ReactComponent as User } from '../../images/icons/user.svg';
import { useAuth } from 'shared/hooks/useAuth';
import styles from './AppBar.module.scss';

import { AuthNavDesktop } from 'components/NavBar/AuthNav';
import MobileMenuComponent from './MobileMenu';

const pages = [
    { name: 'News', path: '/news' },
    { name: 'Notice', path: '/notices/sell' },
    { name: 'Our Friends', path: '/friends' },
];

const ResponsiveAppBar = () => {
    const location = useLocation();
    console.log('location: ', location.pathname);
    const theme = useTheme();
    const isMobileScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isTabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const { isLoggedIn, user } = useAuth();

    const padding = {
        desktop: '16px',
        tablet: '32px',
        mobile: '20px',
    };

    const containerStyles = {
        padding: isMobileScreen ? padding.mobile : isTabletScreen ? padding.tablet : padding.desktop,
    };

    const [isActiveButton, setIsActiveButton] = useState(location.pathname);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    useEffect(() => {
        const storedButton = localStorage.getItem('activeButton');
        // if (storedButton !== null) {
        //     setIsActiveButton(storedButton);
        // }
        setIsActiveButton(storedButton);
    }, []);

    useEffect(() => {
        localStorage.setItem('activeButton', isActiveButton);
    }, [isActiveButton]);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        // setIsActiveButton(path);
    };

    const handleClickUserMenu = () => {
        setIsActiveButton(null);
        localStorage.setItem('activeButton', null);
    };

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
                        onClick={handleClickUserMenu}
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
                        onClick={handleClickUserMenu}
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
                                onClick={() => {
                                    // handleCloseNavMenu();
                                    setIsActiveButton(path);
                                }}
                                sx={{
                                    my: 2,
                                    color: isActiveButton === path ? 'var(--header-acc)' : 'var(--header-font)',
                                    display: 'block',
                                    fontFamily: 'Manrope',
                                    fontSize: '20px',
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
                            <Box
                                onClick={handleClickUserMenu}
                                component={NavLink}
                                to="/user"
                                sx={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                            >
                                <IconButton sx={{ p: 0 }}>
                                    {user.avatar ? (
                                        <img className={styles.userAvatar} src={user.avatar} alt="User avatar"></img>
                                    ) : (
                                        <User alt="Remy Sharp" />
                                    )}
                                </IconButton>
                                <span className={styles.userNameDesc}>{user.name ? user.name : userName}</span>
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
                            ></Menu>
                        </Box>
                    ) : (
                        <AuthNavDesktop
                            handleClick={() => {
                                setIsActiveButton(location.pathname);
                                localStorage.setItem('activeButton', location.pathname);
                            }}
                        />
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

                        <MobileMenuComponent
                            anchorElNav={anchorElNav}
                            handleCloseNavMenu={handleCloseNavMenu}
                            isLoggedIn={isLoggedIn}
                            pages={pages}
                            isActiveButton={isActiveButton}
                            setIsActiveButton={setIsActiveButton}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
