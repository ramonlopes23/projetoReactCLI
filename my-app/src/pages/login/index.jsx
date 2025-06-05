import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import {Container, Column, Title, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper} from "./styles";

const Login = () =>{

     const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Title>
            
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="Email" lefticon={<MdEmail/>}/>
                    <Input placeholder="Senha" type="password" lefticon={<MdLock/>}/>
                    <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"/> 
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
            </Wrapper>
            </Column>

        </Container>
    </>)
}

export {Login}