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
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      summary: 'summary',
      media: 'image',
    },
    prepare({ title, summary, media }) {
      return {
        title: title,
        subtitle: `${summary || ''}`,
        media: media || <Icon e="📝" />,
      };
    },
  },
  fields: [
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
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
