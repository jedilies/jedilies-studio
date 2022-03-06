import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'articleMd',
  title: 'MD Article',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon emoji="#️⃣" />,
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
  groups: [
    {name:'properties', title: 'Properties', default: true },
    {name:'media', title: 'Media' },
    {name:'content', title: 'Content' },
  ],
  fields: [
    {
      name: 'title', title: 'Title', type: 'string', group: 'properties',
    },
    {
      name: 'date', title: 'Date', type: 'datetime', group: 'properties',
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'slug', title: 'Slug', type: 'slug', group: 'properties',
      options: { source: 'title', maxLength: 96 }
    },
    {
      name: 'summary', title: 'Summary', type: 'string', group: 'content',
    },
    {
      name: 'body', title: 'Body', type: 'markdown', group: 'content',
    }
  ],
}