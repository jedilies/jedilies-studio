import React from 'react'
import Icon from '../../components/emojiIcon'
import UrlStringInput from '../../components/UrlStringInput'

export default {
  name: 'social',
  title: 'Test-Socials',
  type: 'document',
  liveEdit: true,
  icon: () => <Icon emoji="🤷‍♀️" />,
  fields: [
    {
      name: "title", 
      title: "Title",
      type: "string",
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
      inputComponent: UrlStringInput
    }
  ]
} 