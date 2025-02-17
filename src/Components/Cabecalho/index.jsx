import React from "react";
import styled, { css } from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/Variaveis";

// const primary = boolean

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background-color: ${corPrimaria};
  color: white;

  ${props => props.primary && css`
    background-color: white;
    color: ${corPrimaria}
  `}
` 

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 5rem;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">Ajuda</BtnHeader>
        <BtnHeader href="https://google.com">Sair</BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
