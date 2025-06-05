import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner.png'
import {Container, TextContent, Title, TitleHighLight} from "./styles";

const Home = () =>{

    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/login')
    }
    return (<>
        <Header />
        <Container>
            <div>
                <Title> 
                    <TitleHighLight>
                    Implemente
                    <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresa Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias pariatur numquam reiciendis quo dolore voluptatibus officia eveniet architecto magnam soluta consectetur saepe, quae animi similique exercitationem natus obcaecati perspiciatis.
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={banner} alt='Imagem principal' />
            </div>

        </Container>
    </>)
}

export {Home}