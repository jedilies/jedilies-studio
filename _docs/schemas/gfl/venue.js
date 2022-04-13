import React from "react"
import Icon from "../../components/emoji"

export default {
  name: 'venue',
  title: 'Test Venue',
  type: 'document',
  liveEdit: false,
  icon: () => <Icon e="🧪" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ]
}
