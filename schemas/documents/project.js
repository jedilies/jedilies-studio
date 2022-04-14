import React from 'react';
// import Icon from '../../components/icons/emoji';
import styled from 'styled-components';
import { Starship } from '@styled-icons/simple-icons/Starship';

const ProjectIcon = styled(Starship)`
  color: hotpink;
`;

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  liveEdit: false,
  icon: () => <ProjectIcon size={36} />,
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
        media: media || <ProjectIcon size={24} />,
      };
    },
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
