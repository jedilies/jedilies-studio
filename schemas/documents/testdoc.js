import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'testdoc',
  title: 'Test Doc',
  type: 'document',
  icon: () => <Icon emoji="🧪" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type:'tag'}]
      }]
    },
    {
      name: 'body',
      title: 'Body: PortableText',
      type: 'ptext'
    },
    {
      name: 'bodyLite',
      title: 'Body: Light PText',
      type: 'ptextLite'
    },
  ]
}