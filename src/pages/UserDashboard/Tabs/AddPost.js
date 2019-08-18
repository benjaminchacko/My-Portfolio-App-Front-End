import React from "react";
import axios from "axios";

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      author: ""
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { title, body, author } = this.state;
    const apiUrl = "http://localhost:3001/blogs";
    alert(
      `Your blog post has been submitted for approval! Please allow 24 Hours for review.`
    );
    return axios.post(apiUrl, {
      title,
      body,
      author
    });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  formReset = () => { 
    document.getElementById("formData").reset();
  }

  render() {
    const { title, body, author } = this.state;

    return (
      <React.Fragment>
        {/*Post Private or Public  */}
        <div className="col-12 col-lg-6 offset-lg-3">
          <form id="formData">
          <input
            onChange={ev => this.handleChangeField("title", ev)}
            value={title}
            className="form-control my-3"
            placeholder="Blog Title"
          />
          <textarea
            onChange={ev => this.handleChangeField("body", ev)}
            className="form-control my-3"
            placeholder="Blog Body"
            value={body}
          />
          <input
            onChange={ev => this.handleChangeField("author", ev)}
            value={author}
            className="form-control my-3"
            placeholder="Blog Author"
          />
          <button
            onClick={this.formReset}
            className="btn btn-primary float-right"
          >
            Reset
          </button>
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary float-right"
          >
            Submit
          </button>
          </form>
          
        </div>
      </React.Fragment>
    );
  }
}

export default AddPost;
