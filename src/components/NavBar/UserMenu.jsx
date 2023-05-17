import Button from '@mui/material/Button';

import { logOut } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';

import { Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as User } from '../../images/icons/user.svg';

import styles from '../AppBar/AppBar.module.scss';

import LogoutIcon from '@mui/icons-material/Logout';

import { UserName } from './UserMenu.styled';

import { UserMenuBoxMobile, UserMenuBoxDesktop } from './UserMenu.styled';

export const UserMenuMobile = ({handleOpenUserMenu}) => {
  const { user } = useAuth();
  // const dispatch = useDispatch();
  // const handleLogOut = () => {
  //   dispatch(logOut());
  // };
  return (
    <UserMenuBoxMobile>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <User alt="Remy Sharp" />
          </IconButton>
        </Tooltip>
        <span className={styles.userName}>Anna</span>
    </UserMenuBoxMobile>
  );
};

export const UserMenuDesktop = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuBoxDesktop>
      <UserName>{user.email}</UserName>
      <Button
        sx={{ maxWidth: '30px', marginLeft: 'auto', marginRight: 'auto' }}
        variant="contained"
        size="small"
        type="button"
        onClick={handleLogOut}
      >
        <LogoutIcon />
      </Button>
    </UserMenuBoxDesktop>
  );
};


