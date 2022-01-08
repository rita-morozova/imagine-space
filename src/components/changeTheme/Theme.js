import CardsContainer from '../container/CardsContainer';
import MainHeader from '../header/MainHeader';
import Footer from "../footer/Footer";

import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
  margin-left: 10px;
  @media (max-width: 812px){
    height: 35px;
    width: 35px;
  }
`;

const Page = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Theme = (props) => {

  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <HiMoon size={25} /> : <CgSun size={25} />;

  return (
    <>
      <Page>
        <MainHeader />
            <Toggle onClick={changeTheme}>{icon}</Toggle>
            <CardsContainer />
      </Page>
      <Footer />
    </>
  );
}

export default Theme;
