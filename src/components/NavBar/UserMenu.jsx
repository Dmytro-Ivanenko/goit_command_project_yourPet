import Button from '@mui/material/Button';

import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';

import LogoutIcon from '@mui/icons-material/Logout';

import { UserName } from './UserMenu.styled';

import { UserMenuBoxMobile, UserMenuBoxDesktop } from './UserMenu.styled';

export const UserMenuMobile = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuBoxMobile>
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


