import React from 'react';
// import Icon from '../../components/icons/emoji';
import styled from 'styled-components';
import { FolderOpen } from '@styled-icons/typicons/FolderOpen';

const CatIcon = styled(FolderOpen)`
  color: hotpink;
`;

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  liveEdit: false,
  icon: () => <CatIcon size={36} />,
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
        media: () => <CatIcon size={24} />,
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
      rows: 3,
    },
  ],
};
