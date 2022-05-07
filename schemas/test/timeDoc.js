import React from 'react';

import styled from 'styled-components';
import { ClockFill } from '@styled-icons/bootstrap/ClockFill';
const Clock = styled(ClockFill)`
  color: hotpink;
`;

import client from 'part:@sanity/base/client'
const sanityClient = client.withConfig({ apiVersion: '2022-04-01' })



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
      name: 'date',
      title: 'DateTime - Input',
      description: 'Set time to desired local time',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
    {
      name: 'UTCstring',
      title: 'UTC String',
      description: 'UTC ISO time string, matches query result',
      type: 'slug',
      options: {
        source: 'date',
        slugify: input => input
      }
    },
    {
      name: 'MDTreadable',
      title: 'MDT Readable String',
      type: 'slug',
      options: {
        source: 'date',
        slugify: input => input
      }
    },
    {
      name: 'richdate',
      title: 'Rich Date',
      type: 'richDate',
    }
  ],
};
