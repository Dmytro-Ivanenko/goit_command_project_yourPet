import styled from '@emotion/styled';

import Box from '@mui/material/Box';

export const UserMenuBoxDesktop = styled(Box)`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0 15px;
  }
`;

export const UserMenuBoxMobile = styled(Box)`
  @media screen and (max-width:767px) { 
   display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 15px;
    text-decoration: none;
    margin-bottom:85px;
    
}

  @media screen and (min-width:768px)  {
    display: none;
  }
`;

export const UserName = styled.p`
  text-shadow: 3px 0px 7px rgba(81, 67, 21, 0.8),
    -3px 0px 7px rgba(81, 67, 21, 0.8), 0px 4px 7px rgba(81, 67, 21, 0.8);
`;
