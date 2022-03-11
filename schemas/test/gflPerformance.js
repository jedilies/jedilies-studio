import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'performance',
  title: 'Performances',
  type: 'document',
  icon: () => <Icon emoji="🎩" />,
  fields: [
    {
      name: 'date',
      title: 'Performance Date',
      type: 'datetime'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'placeholder: to be auto populated [show,date,venue]'
    },
    {
      name: 'notes',
      title: 'Performance Notes',
      type: 'text',
      description: "Notes on this date's performance"
    }
  ]
}