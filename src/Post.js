import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, body, author }) {
  return (
    <>
      <div>
        <p>
          Title:&nbsp;
          {title}
        </p>
      </div>
      <div>
        <p>
          Body:&nbsp;
          {body}
        </p>
      </div>
      <div>
        <p>
          Author:&nbsp;
          {author}
        </p>
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
