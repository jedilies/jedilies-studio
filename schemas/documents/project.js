import React from 'react';
// import Icon from '../../components/icons/emoji';
import styled from 'styled-components';
import { ProjectDiagram } from '@styled-icons/fa-solid/ProjectDiagram';

const ProjectIcon = styled(ProjectDiagram)`
  color: hotpink;
`;

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  liveEdit: true,
  icon: () => <ProjectIcon size={36} />,
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
        media: () => <ProjectIcon size={24} />,
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
