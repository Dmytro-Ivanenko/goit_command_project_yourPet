import styled from "@emotion/styled";
import Menu from "@mui/material/Menu";

export const MobileMenu = styled(Menu)`
  && .MuiPaper-root.mobile-menu {
    max-height:none;
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
  }
`;