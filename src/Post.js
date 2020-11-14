import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Post({ prepend }) {
  const [output, setOutput] = useState('');
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (display) {
      document.title = `You typed ${output}`;
    }
  }, [output, display]);

  return (
    <>
      <input
        type="text"
        value={output}
        onChange={(e) => setOutput(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setDisplay(true);
        }}
      >
        Submit!
      </button>
      <div>{display ? prepend + output : prepend}</div>
    </>
  );
}

Post.propTypes = {
  prepend: PropTypes.string.isRequired,
};
