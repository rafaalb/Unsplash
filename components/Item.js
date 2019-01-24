import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import styled from 'styled-components';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  state = {
    likes: Math.floor(Math.random() * 10),
    favorited: false
  }
  _onClick = () => {
    this.setState({
      favorited: !this.state.favorited,
      likes: this.state.favorited ? this.state.likes - 1 : this.state.likes + 1
    })
  }
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.urls &&  <img src={item.urls.small}/>}
        <Title onClick={this._onClick}>
          {this.state.likes}
          {this.state.favorited ? <Favorite /> : <FavoriteBorder />}
        </Title>
      </ItemStyles>
    )
  }
}
