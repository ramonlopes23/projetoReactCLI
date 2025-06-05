import { Header } from '../../components/Header'
import {Card} from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import {Container, Column,Title,TitleHighLight} from "./styles";

const Feed = () =>{
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
            <Column flex={1}>
                <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={35} nome="Ramon Lopes" image="https://avatars.githubusercontent.com/u/129406221?v=4"/>
                <UserInfo percentual={40} nome="Ramon Lopes" image="https://avatars.githubusercontent.com/u/129406221?v=4"/>
                <UserInfo percentual={50} nome="Ramon Lopes"  image="https://avatars.githubusercontent.com/u/129406221?v=4"/>
                <UserInfo percentual={60} nome="Ramon Lopes"  image="https://avatars.githubusercontent.com/u/129406221?v=4"/>
                <UserInfo percentual={70} nome="Ramon Lopes"  image="https://avatars.githubusercontent.com/u/129406221?v=4"/>

            </Column>
        </Container>
    </>)
}

export {Feed}