// managing bookmark favicons in the studio
// - domain(title)
// - ref urls(array[url])
// - favicon asset (any image type)

import React from "react";
import Icon from '../../components/emojiIcon'

export default {
  name: 'favicon',
  title: 'Favicon',
  type: 'document',
  icon: ()=> <icon emoji="🏴‍☠️" />,
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      summary: 'summary',
      media: 'image'
    },
    prepare({title, summary, media}) {
      return {
        title: title,
        subtitle: `${summary || ''}`,
        media: media || <Icon emoji="📝" />
      }
    }
  },
  fields: [
    {
      name: 'domain', title: 'Domain', type: 'string',
    },
    {
      name: 'favicon', title: 'Favicon', type: 'image',
    },

  ]
}