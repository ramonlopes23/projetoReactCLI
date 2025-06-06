import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { api } from '../../service/api'
import {Container,  Column, Title, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper} from "./styles";

const schema = yup
  .object({
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.string().min(3,'No mínimo 3 caracteres').required('Campo obrigatório'),
  })
  .required()

const Login = () =>{

    const navigate = useNavigate();

    const {control,handleSubmit,formState: { errors },} = useForm({
        resolver:yupResolver(schema),
        mode:'onChange',
    });


    const onSubmit =  async formData => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('email ou senha inválido')
            }
        }catch{
            alert('houve um erro, tente novamente')
        }
    };
        
   


  

    return (<>
        <Header />
        <Container>
            <Column>
                <Title> 
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras  
                </Title>
            
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu login</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message}  control={control} placeholder="Email" lefticon={<MdEmail/>}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" lefticon={<MdLock/>}/>
                    <Button title="Entrar" variant="secondary"  type="submit"/> 
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText  onClick={() => navigate('/cadastro')} style={{ cursor: 'pointer' }}>Criar Conta</CriarText>
                </Row>
            </Wrapper>
            </Column>

        </Container>
    </>)
}

export {Login}