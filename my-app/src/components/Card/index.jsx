import React from 'react'
import {
CardContainer, Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture
} from './styles'
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
        <CardContainer>
            <ImageBackground src='https://i.pinimg.com/736x/1c/c6/c9/1cc6c9ea89caa03097dd8cd02136f398.jpg'/>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/129406221?v=4' />
                    <div>
                        <h4>Ramon Lopes</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de Html e CSS</h4>
                    <p>projeto feito com o curso... <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT</h4>
                    <p>
                        <FiThumbsUp />10
                    </p>
                </HasInfo>
            </Content>

        </CardContainer>
    )
}

export {Card};