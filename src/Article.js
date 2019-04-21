import React, { Component } from "react";
import PropTypes from 'prop-types';
export class Article extends Component {
    static propTypes = {
        author : PropTypes.string.isRequired
    }

  render() {
    const { title, author, date, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        <p>
          {author && <em>Wrote by: {author}</em>}
        </p>
        <p>{date}</p>
        <article>{children}</article>
      </section>
    );
  }
}
