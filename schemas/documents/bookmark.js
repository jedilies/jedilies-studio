import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'bookmark',
  title: 'Bookmark',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon emoji="🔖" />,
  // preview: tbd
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
      name: 'favicon',
      title: 'Favicon',
      type: 'string',

    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',

    },
  ]
}