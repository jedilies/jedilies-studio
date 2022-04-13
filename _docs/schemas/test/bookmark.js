import React from 'react'
import Icon from '../../components/icons/emoji'

export default {
  name: 'bookmark',
  title: 'Bookmark',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon e="⭐️" />,
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      href: 'href',
      media: 'image'
    },
    prepare({title, href, media}) {
      return {
        title: title,
        subtitle: `${href || ''}`,
        media: media || <Icon e="🔴" />
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
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
      options: { hotspot: true }
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