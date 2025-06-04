import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo.png'
import {
    BuscarInputContainer,
    Container,
    Input,
    MenuRight,
    Menu,
    Row,
    Wrapper
} from './styles'

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da dio'/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>

            </Row>
        </Container>
    </Wrapper>
  )
}


export {Header}