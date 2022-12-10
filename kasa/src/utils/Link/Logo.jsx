import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../style/colors'

export const LinkLogo = styled(Link)`
margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-content: center;
        color:${colors.white};
        text-decoration: none;
        ${(props) =>
            props.$isPinkLogo &&
            `color :${colors.pink};`}
        
        `