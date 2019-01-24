import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'; 
import Item from './Item';
import { fetchItems, addItems, fetchUsers } from '../redux/actions';
import _size from 'lodash/size';
import Loading from './Loading';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar'

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

const UserInfo = styled.div`
  text-align: left;
  margin-bottom: 30px;
  h3 {
    color: white;
  }
`;

const options = [
  'Carlos',
  'Mary',
  'Miguel',
  'Emily',
  'Rafael',
  'Andres'
]

const Suggest = ({ classes, onEnterPress, search }) => {
  return (
    <>
      <h4>
        Start searching for amazing photos
      </h4>
      <SearchBar
        onEnterPress={onEnterPress}
        toggleError={() => {}}
      />
      <h6>or you can check any of these</h6>
      {options.map(option =>
        <Button
          variant="outlined"
          color="primary"
          style={{ margin: 5 }}
          onClick={() => search(option)}
        >
            {option}
        </Button>
      )}
    </>
  )
}

class Items extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  _renderItems = () => {
    const { selected } = this.props.users
    if (!_size(selected.photos)) return;
    return selected.photos.map((item, i) => (
      <Item item={item} key={`${item.id}_${i}`} />
    ));
  }
  _onEnterPress = (payload) => {
    return this.props.fetchUsers(payload);
  }
  render() {
    const { items, users } = this.props;
    if (items.searching) return <Loading />;
    if (users.firstLoad) return (
      <Suggest onEnterPress={this._onEnterPress} search={this.props.fetchUsers} />
    )
    return (
      <Center>
        <UserInfo>
          <h3>{this.props.users.selected.name}</h3>
          <em>{this.props.users.selected.bio}</em>
        </UserInfo>
        <ItemsList>
          {this._renderItems()}
        </ItemsList>
      </Center>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (payload) => dispatch(fetchUsers(payload)),
    fetchItems: (payload) => dispatch(fetchItems(payload))
  }
}

export default connect(state => state, mapDispatchToProps)(Items);
