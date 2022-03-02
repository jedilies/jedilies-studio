import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: () => <Icon emoji="📝" />,
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
        media: media || <Icon emoji="📝" />
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
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categoryRef',
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
      type: 'ptext'
    }
  ]
}