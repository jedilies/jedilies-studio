import React from 'react';
import Icon from '../../components/icons/emoji';
import styled from 'styled-components';
import { ColorSwatch } from '@styled-icons/heroicons-outline/ColorSwatch';
const ColorIcon = styled(ColorSwatch)`
  color: hotpink;
`;

export default {
  name: 'colors',
  title: 'Colors',
  type: 'document',
  // liveEdit: true,
  icon: () => <ColorIcon size={36} />,
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
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
    },
  ],
};
