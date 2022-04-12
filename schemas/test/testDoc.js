import React from "react"
import Icon from "../../components/emojiIcon"
// import Colorcards from "../../components/Colorcards"

export default {
  name: 'testDoc',
  title: 'Title Only',
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
