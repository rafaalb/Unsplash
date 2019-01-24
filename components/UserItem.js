import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  justify-content: flex-start;
  &:hover {
    background-color: rgba(0,0,0, 0.1);
    border-radius: 10px;
  }
  span {
    padding-left: 20px;
    font-size: 17px;
  }
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 1px solid white;
`;

export default ({ user, onClickUser }) => {
  return (
    <Container onClick={() => onClickUser(user)}>
      <Image src={user.profile_image.small} />
      <span>{user.name}</span>
    </Container>
  )
}
