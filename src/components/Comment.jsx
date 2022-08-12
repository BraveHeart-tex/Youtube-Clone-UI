import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu8J6Vrru2mk9AEUZ56g38DCYN0IdIVLdl0DYpw8-c0=s176-c-k-c0x00ffffff-no-rj' />
      <Details>
        <Name>
          Walter White <Date>400 days ago</Date>
        </Name>
        <Text>
          Who are you talking to right now? Who is it you think you see? Do you
          know how much I make a year? I mean, even if I told you, you wouldn't
          believe it. Do you know what would happen if I suddenly decided to
          stop going into work? A business big enough that it could be listed on
          the NASDAQ goes belly up. Disappears! It ceases to exist without me.
          No, you clearly don't know who you're talking to, so let me clue you
          in. I am not in danger, Skyler. I am the danger! A guy opens his door
          and gets shot and you think that of me? No. I am the one who knocks!
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
