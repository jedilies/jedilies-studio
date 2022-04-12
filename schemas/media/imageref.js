
import React from "react"
import Icon from "../../components/emojiIcon"

export default {
  name: 'imageref',
  title: 'Image Reference',
  type: 'document',
  liveEdit: false,
  icon: () => <Icon emoji="🎨" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image', 
      type: 'image', 
      title: 'Image', 
      options: {
        hotspot: true,
      }
    },
    {
      name: 'colorDominant',
      title: 'Color',
      type: 'color',
      initialValue: {
        hex: '#FF0000',
      }
    },
    {
      name: 'colorMuted',
      title: 'Color',
      type: 'color',
      initialValue: {
        hex: '#936891',
      }
    },
  ]
}