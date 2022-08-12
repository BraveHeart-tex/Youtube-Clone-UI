import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '360px'};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '16px'};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === 'sm' && 'none'};
`;

const Texts = styled.div``;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin: 9px 0px;
`;
const ChannelName = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image
          type={type}
          src='https://imgs.search.brave.com/CaAhRO2yhn54urmcQh01DXBB2Qc6da94ym_SxyPdHfk/rs:fit:680:383:1/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL2lt/YWdlcy90X21haW4x/LHFfYXV0byxmX2F1/dG8scV9hdXRvLGZf/YXV0by9naWdzLzE0/MjY3NzE0MC9vcmln/aW5hbC9mMWE1NzM0/MWU1MDUyMTk4ODVl/NjUxMWM3MWRhYzFl/OTg1Mzc4MzFiL2Rl/c2lnbi1wcm9mZXNz/aW9uYWwteW91dHVi/ZS10aHVtYm5haWwu/anBn'
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src='https://yt3.ggpht.com/yti/AJo0G0mEg7L1yEXatFkmiXtL6V6Acn22jya-JEt80xJjWw=s108-c-k-c0x00ffffff-no-rj'
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Karaca Bora</ChannelName>
            <Info>5409 views • {''} 5 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
