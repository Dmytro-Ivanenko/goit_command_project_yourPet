import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    gap: 5px;
    align-items: center;
    padding: 7px 20px;
    font-weight: 400;
    font-size: 16px;
    background-color: var(--main-back);
    color: var(--header-acc);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid var(--header-acc);
    border-radius: 40px;
    width: 165px;
    height: 40px;

    &:hover {
        text-shadow: 1px 0 11px rgba(255 255 255 / 80%);
        background-color: rgba(25, 118, 210, 0.04);
    }

    &.active {
        color: var(--main-back);
        background-color: var(--header-acc);
        text-shadow: 1px 0 11px rgb(52, 152, 219);
    }
`;
