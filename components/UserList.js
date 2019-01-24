import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem'
import { selectUser } from './../redux/actions'


class UserList extends Component {
  onClickUser = (user) => {
    this.props.onSelect()
    this.props.selectUser(user)
  }
  render() {
    const { data: users } = this.props.users
    return users.map((user) => (
      <UserItem
        key={user.id}
        user={user}
        onClickUser={this.onClickUser}
      />
    ))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectUser: (user) => dispatch(selectUser(user))
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)