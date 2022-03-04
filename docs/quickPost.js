import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'quickPost',
  title: 'Quick Post',
  type: 'document',
  icon: () => <Icon emoji="🧧" />,
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image'
    },
    prepare({title}) {
      return {
        title: title,
        icon: <Icon emoji="🧧" />
      }
    }
  },
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
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'articleTagArray',
      title: 'Tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type:'tag'}]
      }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text'
    }
  ]
}