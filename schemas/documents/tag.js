import React from "react"
import Icon from "../../components/emojiIcon"

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon emoji="⨾" />,
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare({title, media}) {
      return {
        title: title,
        media: <Icon emoji={media} />
      }
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Tag Title',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(24).warning('Title length: 3-24 characters')
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Optional emoji or text',
      valdiation: Rule => Rule.max(1).warning('Single character or emoji as an icon.'),
      initialValue: '🪆'
    },
    {
      name: 'testarray',
      title: 'Test',
      type: 'array',
      of: [
        {
          name: 'bid',
          title: 'Bid',
          type: 'number'
        }
      ]
    }
  ]
}