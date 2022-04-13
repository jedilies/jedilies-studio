import React from "react"
import Icon from "../../components/icons/emoji"
// import Colorcards from "../../components/Colorcards"

export default {
  name: 'testDoc',
  title: 'Title Only',
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
