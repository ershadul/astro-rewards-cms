import React, { Component } from "react";
import axios from "axios";

export default class CompanyCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangeLogo = this.onChangeLogo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      logo: '',
      website: '',
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value
    });
  }

  onChangeLogo(e) {
    this.setState({
      logo: e.target.files[0]
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('logo', this.state.logo);
    data.append('name', this.state.name);
    data.append('website', this.state.website);
    axios
      .post("http://localhost:3000/v1/companies",
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      ).then(res => {
        console.log(res.data);
        this.props.history.push("/companies");
      });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Create company</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Website: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.website}
              onChange={this.onChangeWebsite}
            />
          </div>
          <div className="form-group">
            <label>Logo: </label>
            <input
              type="file"
              className="form-control"
              onChange={this.onChangeLogo}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Companay"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
