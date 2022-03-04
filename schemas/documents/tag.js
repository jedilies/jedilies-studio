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
    },
    prepare({title}) {
      return {
        title: title,
        media: <Icon emoji="⨾"/>
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
  ]
}