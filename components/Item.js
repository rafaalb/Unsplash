import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import Link from 'next/link';
import Age from './styles/Age';
import ItemContent from './ItemContent';
import FriendsList from './FriendsList';
import styled from 'styled-components';

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  @media screen and (max-width: 880px) {
    position: unset;
  }
`;
export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.thumbnail &&  <img src={item.thumbnail} />}
        <Title>
          <Link>
            <a>{item.name}</a>
          </Link>
        </Title>
        <ContentContainer>
          <ItemContent item={item} />
          <FriendsList item={item} />
          <Age>
            {`${item.age} years old`}
          </Age>
        </ContentContainer>
      </ItemStyles>
    )
  }
}
