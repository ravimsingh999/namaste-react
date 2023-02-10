import React from "react";
import UserContext from "../utils/userContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="heading font-bold">
              {user.email} - {user.email}
            </h1>
          )}
        </UserContext.Consumer>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 2,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default ProfileClass;
