import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'task',
  title: 'Task',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon emoji="✔" />,
  preview: {
    select: {
      title: 'title',
      summary: 'summary',
      completed: 'completed'
    },
    prepare({title, summary, completed}) {
      return {
        title: title,
        subtitle: `${summary || ''}`,
        media: () => {
          if (completed === true) return <Icon emoji="☑︎" />
          else return <Icon emoji="☐" />
        }
      }
    }
  },
  fields: [
    {
      name: 'title', title: 'Title', type: 'string',
    },
    {
      name: 'completed', title: 'Completed', type: 'boolean', initialValue: false
    },
    {
      name: 'date', title: 'Date', type: 'datetime',
      initialValue: (new Date()).toISOString()
    },
    { name: 'summary', title: 'Summary', type: 'string',
    },
    {
      name: 'body', title: 'Body', type: 'ptext'
    }
  ],
}