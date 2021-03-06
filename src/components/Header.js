import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderRoot = styled.header`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.bgWhite};
  padding: 1rem;
  clip-path: ${props => props.theme.polygons.header};
`

const HomeLink = styled(Link)`
  width: 100%;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-left: 20%;
  font-size: 3rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
    font-size: 5vw;
  }
`

const Header = () => (
  <HeaderRoot>
    <HomeLink to="/">
      <Title>Smoelenboek</Title>
    </HomeLink>
  </HeaderRoot>
)

export default Header
