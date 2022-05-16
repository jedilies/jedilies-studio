import React from 'react';
import Icon from '../../components/icons/emoji';
import styled from 'styled-components';
import { Documents } from '@styled-icons/ionicons-outline/Documents';
const DocsIcon = styled(Documents)`
  color: hotpink;
`;

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  liveEdit: false,
  icon: () => <DocsIcon size={36} />,
  fields: [
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: { type: 'project' },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      options: {
        sortable: true,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
    },
  ],
};
