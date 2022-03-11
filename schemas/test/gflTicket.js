// ticket and other sales, generic
// setting as a document for now
// - as the intent is to use this for reference of tickets sold
// ticket sales to be sorted by sell date in structure builder

import React from 'react'
import Icon from '../../components/emojiIcon'

export default {
  name: 'ticket',
  title: 'Tickets',
  type: 'document',
  icon: () => <Icon emoji="🎟" />,
  preview: {
    select: {
      title: 'name',
      checkedIn: 'checkedIn',
      numberOfTickets: 'numberOfTickets',
      noted: 'notes',
    },
    prepare({title, checkedIn, numberOfTickets, noted}) {
      return {
        title: `${noted ? '🚸 ' + title : title}`,
        subtitle: `#tickets: ${numberOfTickets}`,
        media: () => {
          if (checkedIn === true) return <Icon emoji="✅"/>
          else return <Icon emoji="🎟"/>
        }
      }
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'checkedIn',
      title: 'Checked In ✅',
      type: 'boolean'
    },
    {
      name: 'show',
      title: 'Show',
      type: 'reference',
      to: [{type: 'show'}]
    },
    {
      name: 'performance',
      title: 'Performance',
      type: 'reference',
      to: [{type: 'performance'}]
    },
    {
      name: 'numberOfTickets',
      title: 'Number of Tickets',
      type: 'number'
    },
    {
      name: 'notes',
      title: 'Notes',
      description: 'Special requests & Acccessibility concerns',
      type: 'text'
    }
  ]
}