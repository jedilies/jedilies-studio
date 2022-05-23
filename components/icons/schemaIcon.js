/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const schemaIcon = (icon) => {
  // BUG: color var is not using style override - color: var(--brand-primary)
  const Icon = styled(icon)`
    color: hotpink;
    size: 1.5rem;
  `;
  return Icon;
};
export default schemaIcon;
