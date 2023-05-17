// import Button from '@mui/material/Button';

// import { logOut } from '../../redux/auth/operations';
// import { useDispatch } from 'react-redux';
// import { useAuth } from 'shared/hooks/useAuth';
import { NavLink } from 'react-router-dom';

// import { Box } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as User } from '../../images/icons/user.svg';

import styles from '../AppBar/AppBar.module.scss';

// import LogoutIcon from '@mui/icons-material/Logout';

// import { UserName } from './UserMenu.styled';

import { UserMenuBoxMobile} from './UserMenu.styled';

export const UserMenuMobile = ({ closeNavMenu }) => {
 // const { user } = useAuth();
  // const dispatch = useDispatch();
  // const handleLogOut = () => {
  //   dispatch(logOut());
  // };
  return (
    <UserMenuBoxMobile onClick={closeNavMenu} component={NavLink} to="/user">     
          <IconButton  sx={{ p: 0 }}>
            <User alt="Remy Sharp" />
          </IconButton>
        <span className={styles.userNameMob}>Anna</span>
    </UserMenuBoxMobile>
  );
};




