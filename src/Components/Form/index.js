import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import Input from "./Input";
import { createPost, editPost, fetchPost } from "../../Actions";
import { handleValidate as validate } from "./Validate";

class Form extends Component {
  submit = value => {
    const { id } = this.props.match.params;
    const create_date = new Date().toLocaleString();
    return this.props.action === "POST"
      ? this.props.getPostCreate(value).then(() => {
          this.props.history.push("/");
        })
      : this.props.getPostEdit(id, { ...value, create_date }).then(() => {
          this.props.history.push(`/posts/${id}`);
        });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <Link to="/">Go back to posts</Link>
        <h4>NEW POST FORM</h4>
        {/* pass an action creator in handleSubmit */}
        <form onSubmit={handleSubmit(this.submit)}>
          <div>
            <Field name="title" label="Title" component={Input} type="text" />
          </div>
          <div>
            <Field
              name="category"
              label="Category"
              component={Input}
              type="text"
            />
          </div>
          <div>
            <Field
              name="content"
              label="Write a post here"
              component={Input}
              type="textarea"
            />
          </div>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  const { post } = state.posts;
  return {
    initialValues: {
      title: post ? post.title : " ",
      category: post ? post.category : " ",
      content: post ? post.content : " "
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => dispatch(fetchPost(id)),
    getPostCreate: newPost => dispatch(createPost(newPost)),
    getPostEdit: (postId, post) => dispatch(editPost(postId, post))
  };
};

//connect: 1st arg is mapStateToProps, 2nd arg is mapDispatchToProps
//reduxForm: only arg is form config
Form = reduxForm({
  form: "postForm",
  validate
})(Form);
Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default withRouter(Form);
