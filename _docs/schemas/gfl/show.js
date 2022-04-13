import React from "react"
import Icon from "../../components/emoji"

export default {
  name: 'show',
  title: 'Test Show',
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
