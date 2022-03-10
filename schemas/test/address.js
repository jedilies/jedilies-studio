import React from 'react'
import Icon from '../../components/emojiIcon'
import addressInput from '../../components/addressInput'


export default {
  name: 'address',
  title: 'Test-Address',
  type: 'document',
  // liveEdit: true,
  icon: () => <Icon emoji="🏘" />,
  fields: [
    /* street+unit, country, city, state/province, postal code */
    {
      name: "title", title: "Title",
      type: "string",
    },
    {
      name: "street",
      title: "Street",
      type: "string",
      inputComponent: addressInput,
    },
  ]
}