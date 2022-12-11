import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 16px;
    padding: 10px 10px;
    text-transform: uppercase;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 10px 7px;
  }
    
`