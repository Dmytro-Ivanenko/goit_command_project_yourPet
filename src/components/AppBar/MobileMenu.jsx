import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { MobileMenu } from './AppBar.styled';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as Logo } from '../../images/icons/logo.svg';
import { ReactComponent as LogoutIcon } from 'images/icons/logout1.svg';
import { AuthNavMobile } from 'components/NavBar/AuthNav';
import { UserMenuMobile } from 'components/NavBar/UserMenu';
import IconButton from '@mui/material/IconButton';
import ModalApproveAction from 'shared/components/ModalApproveAction';
import { ReactComponent as LogoutWhiteIcon } from 'images/icons/logout-white.svg';
import { logOut } from 'redux/auth/operations';
import styles from './AppBar.module.scss';

const MobileMenuComponent = ({
    anchorElNav,
    handleCloseNavMenu,
    isLoggedIn,
    pages,
    isActiveButton,
    setIsActiveButton,
}) => {
    const dispatch = useDispatch();
    const [isModalShown, setIsModalShown] = useState(false);

    const handleModal = () => {
        setIsModalShown(prevState => !prevState);
        handleCloseNavMenu();
    };
    const handleLogout = () => {
        dispatch(logOut());
        setIsModalShown(prevState => !prevState);
    };
    return (
        <>
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
                        <Logo width={174} height={30} />
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
                    <div className={styles.userMenuWrap}>
                        <LogoutIcon onClick={handleModal} className={styles.iconButton} width={24} height={24} />
                        <UserMenuMobile closeNavMenu={handleCloseNavMenu} />
                    </div>
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
            {isModalShown && (
                <ModalApproveAction onClose={handleModal}>
                    <div className={styles.modal}>
                        <h2 className={styles.titleModal}>Already leaving?</h2>
                        <div className={styles.modalContent}>
                            <div className={styles.modalButtons}>
                                <button className={styles.cancelButton} onClick={handleModal}>
                                    Cancel
                                </button>
                                <button className={styles.yesButton} onClick={handleLogout}>
                                    <span className={styles.titleBtnYes}>Yes</span>
                                    <LogoutWhiteIcon className={styles.logoutModal} />
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalApproveAction>
            )}
        </>
    );
};

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
