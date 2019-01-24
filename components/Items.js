import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'; 
import Item from './Item';
import { fetchItems, addItems } from '../redux/actions';
import _size from 'lodash/size';
import Loading from './Loading';

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-gap: 40px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

class Items extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItems());
  }
  _renderItems = () => {
    const { selected } = this.props.users
    if (!_size(selected.photos)) return;
    return selected.photos.map((item, i) => (
      <Item item={item} key={`${item.id}_${i}`} />
    ));
  }
  render() {
    const { items } = this.props;
    if (items.searching) return <Loading />;
    return (
      <Center>
        <ItemsList>
          {this._renderItems()}
        </ItemsList>
      </Center>
    );
  }
}

export default connect(state => state)(Items);

{/* <Spring
          from={{ number: 0 }}
          to={{ number: 2500 }}
          config={{ delay: 1500 }}
        >
          {props =>
            <div>
              <h2>
                {props.number.toFixed(0)}
              </h2>
            </div>
          }
        </Spring> */}