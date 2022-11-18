import React, { Component } from "react";
import styled from "styled-components";
export default class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };
  addUser = (user) => {
    const { users } = this.state;
    user.id = users.length + 1;
    this.setState({ users: [...users, user] });
  };
  render() {
    return (
      <section
        style={{ backgroundColor: "black", height: "100vh", color: "silver" }}
      >
        <Form onSearchChange={this.onSearchChange} addUser={this.addUser} />
        <hr />
        <Table search={this.state.search} users={this.state.users} />
      </section>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.initContact,
    };
  }
  initContact = {
    id: null,
    name: "tushar",
    email: "prajapatitushar789@gmail.com",
    phone: "9867838918",
    city: "mumbai",
  };
  handleUserChange = (e) => {
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // if (
    //   !th.userFirstname ||
    //   !userState.userLastname ||
    //   !userState.userPhone
    // )
    //   return;
    this.props.addUser(this.state.user);
    this.setState({
      ...this.state,
      user: this.initContact,
    });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.user.name}
            onChange={this.handleUserChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleUserChange}
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={this.state.user.phone}
            onChange={this.handleUserChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={this.state.user.city}
            onChange={this.handleUserChange}
          />
          <button type="submit">Add Data</button>
        </form>
        <input
          type="text"
          placeholder="Search"
          onChange={this.props.onSearchChange}
        />
      </Wrapper>
    );
  }
}

function Table(props) {
  const sortedContacts = props.users
    .filter((u) => u.name.toLowerCase().includes(props.search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  const display =
    sortedContacts.length > 0 ? (
      sortedContacts.map((user, index) => (
        <tr key={index}>
          <td style={style.tableCell}>{user.name}</td>
          <td style={style.tableCell}>{user.email}</td>
          <td style={style.tableCell}>{user.phone}</td>
          <td style={style.tableCell}>{user.city}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>&nbsp;</td>
      </tr>
    );

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>Name</th>
          <th style={style.tableCell}>Email</th>
          <th style={style.tableCell}>Phone</th>
          <th style={style.tableCell}>City</th>
        </tr>
      </thead>
      <tbody>{display}</tbody>
    </table>
  );
}
const Wrapper = styled.div`
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  input {
    margin: 0px 8px;
    outline: none;
    padding: 8px;
    border: 2px solid purple;
    border-radius: 8px;
  }
  form {
    input {
      margin: 0px 8px;
      outline: none;
      padding: 6px;
      border-radius: 10px;
    }
  }
  button {
    cursor: pointer;
    padding: 4px;
    background-color: purple;
    border-radius: 8px;
    color: silver;
  }
`;
const style = {
  table: {
    borderCollapse: "collapse",
    margin: "auto",
  },
  tableCell: {
    border: "1px solid purple",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "purple",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};
