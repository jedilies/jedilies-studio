import React from 'react';
import styled from 'styled-components';
import DateTimeHTML from '../../components/inputs/DateTimeHTML';
import DateTimeRTC from '../../components/inputs/DateTimeRTC';
import DateTimeSUI from '../../components/inputs/DateTimeSUI';
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
    {
      name: 'date',
      title: 'Date - Standard',
      type: 'date',
      initialValue: new Date().toISOString(),
    },
    {
      name: 'timehtml',
      title: 'DateTime HTML Input',
      type: 'string',
      inputComponent: DateTimeHTML,
    },
    // {
    //   name: 'timertc',
    //   title: 'DateTime React Time Component Input',
    //   type: 'string',
    //   inputComponent: DateTimeRTC,
    // },
    {
      name: 'timesui',
      title: 'DateTime Sanity UI Custom Input',
      type: 'string',
      inputComponent: DateTimeSUI,
    },
  ],
};
