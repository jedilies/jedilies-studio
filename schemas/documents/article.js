import React from 'react'
import Icon from '../../components/emoji'
import styled from 'styled-components'
import {Documents} from '@styled-icons/ionicons-outline/Documents'
const DocsIcon = styled(Documents)`
  color: hotpink;
`

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  liveEdit: true,
  icon: () => <DocsIcon size={36} />,
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      summary: 'summary',
      media: 'image'
    },
    prepare({title, summary, media}) {
      return {
        title: title,
        subtitle: `${summary || ''}`,
        media: media || <Icon e="📝" />
      }
    }
  },
  groups: [
    {name:'properties', title: 'Properties', default: true },
    {name:'media', title: 'Media' },
    {name:'content', title: 'Content' },
  ],
  fields: [
    {
      name: 'title', 
      title: 'Title', type: 
      'string', 
      group: 'properties',
    },
    {
      name: 'date', 
      title: 'Date', 
      type: 'datetime', 
      group: 'properties',
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      group: 'properties',
      options: { source: 'title', maxLength: 96 }
    },
    {
      name: 'summary', 
      title: 'Summary', 
      type: 'string', 
      group: 'content',
    },
    {
      name: 'image', 
      type: 'image', 
      title: 'Image', 
      group: 'media',
      options: { hotspot: true }
    },
    {
      name: 'category', 
      title: 'Category', 
      type: 'reference', 
      to: {type: 'category'},
      group: 'properties',
    },
    {
      name: 'tags', 
      title: 'Tags', 
      type: 'array', 
      group: 'properties',
      of: [{ 
        type: 'reference', 
        to: [{type:'tag'}] 
      }],
      options: {
        sortable: true
      }
    },
    {
      name: 'body', 
      title: 'Body', 
      type: 'ptext', 
      group: 'content',
    }
  ],
}