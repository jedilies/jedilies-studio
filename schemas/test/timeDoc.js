import React from 'react';
import styled from 'styled-components';
import { ClockFill } from '@styled-icons/bootstrap/ClockFill';
const Clock = styled(ClockFill)`
  color: hotpink;
`;

export default {
  name: 'timeDoc',
  title: 'Time Test',
  type: 'document',
  liveEdit: true,
  icon: () => <Clock size={36} />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'dateTime',
      title: 'DateTime - Standard',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
    // {
    //   name: 'date',
    //   title: 'Date - Standard',
    //   type: 'date',
    //   initialValue: new Date().toISOString(),
    // },
  ],
};
