import React from 'react';
import Icon from '../../components/icons/emoji';
import styled from 'styled-components';
import { Tags } from '@styled-icons/bootstrap/Tags';
const TagsIcon = styled(Tags)`
  color: hotpink;
`;

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  liveEdit: false,
  icon: () => <TagsIcon size={36} />,
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare({ title, media }) {
      return {
        title: title,
        media: <Icon e={media} />,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Tag Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(3).max(24).warning('Title length: 3-24 characters'),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Optional emoji or text',
      valdiation: (Rule) =>
        Rule.max(1).warning('Single character or emoji as an icon.'),
      initialValue: '🪆',
    },
  ],
};
