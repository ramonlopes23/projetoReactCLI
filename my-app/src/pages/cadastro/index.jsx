import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../service/api'
import { useForm } from "react-hook-form"
import {
  Column,
  Container,
  Row,
  SubtitleLogin,
  TemContaText,
  Title,
  TitleLogin,
  Wrapper
} from './styles'

// ✅ Schema de validação
const schema = yup.object({
  nome: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    try {
      const { data: existingUsers } = await api.get(`/users?email=${formData.email}`);
      if (existingUsers.length > 0) {
        alert('Este email já está cadastrado.');
        return;
      }

      await api.post('/users', {
        name: formData.nome,
        email: formData.email,
        senha: formData.password,
      });

      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                control={control}
                placeholder="Nome completo"
                lefticon={<MdPerson />}
                errorMessage={errors?.nome?.message}
              />
              <Input
                name="email"
                control={control}
                placeholder="Email"
                lefticon={<MdEmail />}
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                lefticon={<MdLock />}
                errorMessage={errors?.password?.message}
              />
              <Button title="Cadastrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <p style={{ fontFamily: 'Open Sans' }}>Já tem conta?</p>
              <TemContaText onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                Fazer login
              </TemContaText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Cadastro };
