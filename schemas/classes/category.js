import React from "react"
import Icon from "../../components/emoji"

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon e="⫻" />,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        media: <Icon e="⫻"/>
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