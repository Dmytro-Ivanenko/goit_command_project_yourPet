import PropTypes from 'prop-types';
import { useAuth } from 'shared/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { getUserNameFromEmail } from 'shared/helpers/getUserNameFromEmail';

import IconButton from '@mui/material/IconButton';
import { ReactComponent as User } from '../../images/icons/user.svg';

import styles from '../AppBar/AppBar.module.scss';

import { UserMenuBoxMobile } from './UserMenu.styled';

export const UserMenuMobile = ({ closeNavMenu }) => {
    const { user } = useAuth();
    const userName = getUserNameFromEmail(user.email);

    return (
        <UserMenuBoxMobile onClick={closeNavMenu} component={NavLink} to="/user">
            <IconButton sx={{ p: 0 }}>
                {user.avatar ? (
                    <img className={styles.userAvatar} src={user.avatar} alt="User avatar"></img>
                ) : (
                    <User alt="Remy Sharp" />
                )}
            </IconButton>
            <span className={styles.userNameMob}>{user.name ? user.name : userName}</span>
        </UserMenuBoxMobile>
    );
};

UserMenuMobile.propTypes = {
    closeNavMenu: PropTypes.func.isRequired,
};
