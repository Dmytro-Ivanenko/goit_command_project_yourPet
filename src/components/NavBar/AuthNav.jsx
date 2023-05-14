import { AuthNavBoxMobile } from 'shared/SharedLayout/SharedLayot.styled';

import { AuthNavBoxDesktop } from 'shared/SharedLayout/SharedLayot.styled';

import { StyledNavLink } from 'shared/components/StyledLink.styled';

export const AuthNavMobile = () => {
  return (
    <AuthNavBoxMobile
    >
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Log IN</StyledNavLink>
    </AuthNavBoxMobile>
  );
};


export const AuthNavDesktop = () => {
  return (
    <AuthNavBoxDesktop
    >
      <StyledNavLink to="/register">Sign up</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </AuthNavBoxDesktop>
  );
};

