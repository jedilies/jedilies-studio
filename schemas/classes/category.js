import React from "react"
import Icon from "../../components/emoji"
import styled from 'styled-components'
import {CategoryAlt} from '@styled-icons/boxicons-solid/CategoryAlt'
const CatIcon = styled(CategoryAlt)`
  color: hotpink;
`

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  liveEdit: true,
  icon: () => <CatIcon size={36} />,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        media: <Icon e="🤷‍♀️"/>
      }
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ]
}