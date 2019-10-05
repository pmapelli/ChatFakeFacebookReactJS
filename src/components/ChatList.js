/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import ChatItem from './ChatItem';

export default class ChatList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Ronaldinho Gaúcho',
          avatar:
            'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Black',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light',
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Messi',
          avatar:
            'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Default&eyebrowType=Default&mouthType=Serious&skinColor=Light',
        },
        date: '04 Jun 2019',
        content: 'Alguém participando da nova OmniStack?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Cristiano Ronaldo',
              avatar:
                'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Tanned',
            },
            content: 'Sim, já estou acompanhando os vídeos! São excelentes!',
          },
          {
            id: 5,
            author: {
              name: 'Pogba',
              avatar:
                'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Black',
            },
            content:
              'Estou adorando! A equipe está arrasando com os novos conteúdos!',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Marta',
          avatar:
            'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
        },
        date: '04 Jun 2019',
        content:
          'Estou anciosa para começar o GoStack Bootcamp! Quem tá comigo?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Kylian Mbappé',
              avatar:
                'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Red&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Black',
            },
            content: 'Tamo junto! Quer ser minha parceira de jornada?',
          },
          {
            id: 5,
            author: {
              name: 'Antoine Griezmann',
              avatar:
                'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Skull&eyeType=Close&eyebrowType=SadConcernedNatural&mouthType=Sad&skinColor=Light',
            },
            content: 'Dessa vez não vou poder participar! Maldito Barcelona!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        {posts.map(post => (
          <ChatItem key={post.id} {...post} />
        ))}
      </>
    );
  }
}
