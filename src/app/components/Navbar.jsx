"use client";
import Image from "next/image";
import styled from "styled-components";
import theme from "../../styles/theme";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <ContainerDiv>
      <Title>vinandra</Title>
      <ImageWrapper>
        <Image
          src='/profile.jpeg'
          alt='profile'
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>

      <ul>
        <li>
          <FaGithubAlt />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <TbBrandTwitterFilled />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${theme.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
`;
