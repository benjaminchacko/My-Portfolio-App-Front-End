const blogReducer = (state = { blog: [] }, action) => {
  switch (action.type) {
    case "BLOG_LOADED":
      return {
        ...state,
        blogs: action.data.blogs
      };
    case "SUBMIT_BLOG":
      return {
        ...state,
        blogs: [action.data.blog].concat(state.blogs)
      };
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog._id !== action.id)
      };
    case "SET_EDIT":
      return {
        ...state,
        blogToEdit: action.blog
      };
    case "EDIT_BLOG":
      return {
        ...state,
        blogs: state.blogs.map(blog => {
          if (blog._id === action.data.blog._id) {
            return {
              ...action.data.blog
            };
          }
          return blog;
        }),
        blogToEdit: undefined
      };
    default:
      return state;
  }
};

export default blogReducer;
