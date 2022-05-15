import React from "react";
import PropTypes from "prop-types";

const Emoji = ({ emo, size }) =>
  typeof emo === "string" ? (
    <span style={{ fontSize: size }}>{emo}</span>
  ) : (
    <span style={{ fontSize: size }}></span>
  );

Emoji.propTypes = {
  emo: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Emoji;

