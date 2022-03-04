import React from "react"
import Icon from "../../components/emojiIcon"

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon emoji="⫻" />,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        media: <Icon emoji="⫻"/>
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
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ]
}