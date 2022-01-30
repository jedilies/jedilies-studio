import { GiLinkedRings } from 'react-icons/gi'

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: GiLinkedRings,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagColor',
      title: 'Tag Color',
      type: 'color'
    },
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        providers: ["f7", "fa", "mdi", "sa", "hi", "fi"]
      }
    },
  ]
}