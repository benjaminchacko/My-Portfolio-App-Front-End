import React from "react";
import axios from "axios";
import { connect } from "react-redux";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: []
    };
  }
  async componentDidMount() {
    let posts = await axios.get("http://localhost:3001/blogs")
    .then(result => {
      this.setState({
        blogs: result.data.blogs
      });
      console.log(this.blogs);
    });    
  }
  
  handleDelete(id) {
    const { onDelete } = this.state;

    return axios.delete(`http://localhost:3001/blogs/${id}`)
      .then(() => onDelete(id));
  }
  

  render() {
    const { blogs } = this.state;

    return (
      <React.Fragment>
      <div className="container">
        <div className="row pt-5">
          <div className="col-12">
            <h2 className="text-center">Abundant Blogs</h2>
          </div>
        </div>
        <div className="row pt-5  justify-content-center">
          <div className="col-12">
            {blogs &&
              blogs.map(blogs => {
                return (
                  <div className="card mb-5 justify-content-center">
                    <div className="card-header">{blogs.title}</div>
                    <div className="card-body">
                    {blogs.body}
                    </div>
                    <div className="card-footer">
                    <b>{blogs.author}
                    <p className="float-right">
                          {new Date(blogs.createdAt).toLocaleDateString()}
                    </p>
                    </b>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.blog
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: data => dispatch({ type: "BLOG_LOADED", data }),
  onDelete: id => dispatch({ type: 'DELETE_BLOG', id })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
