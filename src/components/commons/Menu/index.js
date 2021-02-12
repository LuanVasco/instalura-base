import React from 'react';
import { Logo } from '../../theme/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text
              href={link.url}
              tag="a"
              variant="smallestException"
            >
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
