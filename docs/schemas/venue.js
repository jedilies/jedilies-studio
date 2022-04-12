import React from "react"
import Icon from "../../components/emojiIcon"

export default {
  name: 'venue',
  title: 'Test Venue',
  type: 'document',
  liveEdit: false,
  icon: () => <Icon emoji="🧪" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ]
}
