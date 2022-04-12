import React from "react"
import Icon from "../../components/emojiIcon"

export default {
  name: 'show',
  title: 'Test Show',
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
