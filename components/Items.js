import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'; 
import Item from './Item';
import { fetchItems, addItems } from '../redux/actions';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends Component {
  state = {
    tmpItems: [],
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems());
  }
  fetchMoreItems = () => {
    const { dispatch } = this.props;
    dispatch(addItems());
  }
  _renderItems = () => {
    const { tmpData } = this.props.items;
    if (!_.size(tmpData)) return;
    return tmpData.map((item, i) => (
      <Item item={item} key={`${item.id}_${i}`} />
    ));
  }
  render() {
    const { items } = this.props;
    if (items.searching) return <Loading />;
    return (
      <Center>
        <InfiniteScroll
          dataLength={items.tmpData.length}
          next={this.fetchMoreItems}
          hasMore={true}
          loader={<Loading />}
        >
          <ItemsList>
            {this._renderItems()}
          </ItemsList>
        </InfiniteScroll>
      </Center>
    );
  }
}

export default connect(state => state)(Items);