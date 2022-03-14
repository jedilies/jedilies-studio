import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'bookmark',
  title: 'Bookmark',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon emoji="⭐️" />,
  fields: [
    {
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category', title: 'Category', type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'tags', title: 'Tags', type: 'array',
      of: [{ type: 'reference', to: [{type:'tag'}] }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ]
}