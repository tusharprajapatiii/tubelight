import React from "react";
import styled from "styled-components";
class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: "",
      user: this.initContact,
    };
  }
  initContact = {
    id: null,
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  };
  addUser = (user) => {
    this.setState({ ...this.state, users: [...this.state.users, user] });
  };
  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };
  onChangeHandler = (event) => {
    this.setState({
      ...this.state,
      user: {
        [event.target.name]: event.target.value,
      },
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.addUser(this.state.user);
    this.setState({ ...this.state, user: this.initContact });
  };
  render() {
    const { users, search } = this.state;
    const filteredUsers = users.sort((a, b) => a.Name.localeCompare(b.Name));

    return (
      <Wrapper>
        <div>
          <form onSubmit={this.onSubmitHandler}>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              value={this.state.user.Name}
              onChange={this.onChangeHandler}
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              value={this.state.user.Email}
              onChange={this.onChangeHandler}
            />
            <input
              type="tel"
              placeholder="Phone"
              name="Phone"
              value={this.state.user.Phone}
              onChange={this.onChangeHandler}
            />
            <input
              type="text"
              placeholder="City"
              name="City"
              value={this.state.user.City}
              onChange={this.onChangeHandler}
            />
            <button type="submit">Submit</button>
          </form>
          <input
            type="text"
            placeholder="Search"
            onChange={this.onSearchChange}
          />
        </div>
        <hr />
        <div>
          <CardList Users={filteredUsers} />
        </div>
      </Wrapper>
    );
  }
}
const CardList = (props) => (
  <div className="card-list">
    {props.Users.map((user, i) => (
      <Card key={i} user={user} />
    ))}
  </div>
);

const Card = (props) => (
  <div className="card-container">
    <h2> {props.user.Name} </h2>
    <p> {props.user.Email} </p>
  </div>
);
const Wrapper = styled.div`
  div {
    padding: 40px 0px;
    display: flex;
    justify-content: space-between;
    input {
      margin: 0px 8px;
      outline: none;
      padding: 4px;
    }
    form {
      input {
        margin: 0px 8px;
        outline: none;
        padding: 2px;
      }
    }
  }
  .card-list {
    display: flex;
  }
`;

export default AddForm;
