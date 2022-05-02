import React from 'react';
import { Testinglibrary } from 'styled-icons/simple-icons';
import styled from 'styled-components';
const InputsIcon = styled(Testinglibrary)`
  color: hotpink;
`;

export default {
  name: 'blockInputs',
  title: 'Block Inputs',
  type: 'document',
  liveEdit: false,
  icon: () => <InputsIcon size={36} />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'ptext',
      title: 'Portable Text',
      type: 'portableText',
    },
    {
      name: 'ptAlt',
      title: 'Portable Text Alt',
      type: 'ptAlt',
    },

  ],
};
