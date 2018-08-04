import React, { Component } from 'react';
import { map } from 'lodash';
import PageWrapper from '../../Decorators/PageWrapper';
import PageHeader from '../../Components/PageHeader';


class Post extends Component {
  componentDidMount() {
    this.props.loadData(this.props.id);
  }

  render() {
    const { post: { title, text } = {} } = this.props;

    return (
      <div className="page">
        <PageHeader>{ title }</PageHeader>

        <p>{ text }</p>
      </div>
    );
  }
}

export default PageWrapper(Post);
