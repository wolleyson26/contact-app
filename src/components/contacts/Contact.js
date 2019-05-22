import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends React.Component {
  state = {
    showInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { contact } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 style={{ textTransform: "capitalize" }}>
                {contact.name}{" "}
                <i
                  className="fas fa-sort-down"
                  onClick={() =>
                    this.setState({ showInfo: !this.state.showInfo })
                  }
                  style={{ cursor: "pointer" }}
                />
                <div
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={() => this.onDeleteClick(contact.id, dispatch)}
                />
                <Link to={`contact/edit/${contact.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {this.state.showInfo && (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
