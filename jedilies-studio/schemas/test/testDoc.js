import React from "react"
import Icon from "../../components/emojiIcon"

export default {
  name: 'testDoc',
  title: 'Test Doc',
  type: 'document',
  liveEdit: false,
  icon: () => <Icon emoji="🧪" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category', 
      title: 'Category', 
      type: 'reference', 
      to: {type: 'category'},
      // options: {
      //   filter: ({ document }) => {
      //     return {
      //       filter: `references($title)`,
      //       params: {
      //         topic: document.title._ref
      //       }
      //     }
      //   }
      // }
    },
  ]
}



