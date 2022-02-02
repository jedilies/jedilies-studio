import { GiLinkedRings } from 'react-icons/gi'

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: GiLinkedRings,
  fields: [
    {
      name: 'title',
      title: 'Tag Title',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(24)
    },
    // {
    //   title: "Icon",
    //   name: "icon",
    //   type: "iconPicker",
    //   options: {
    //     // providers: ["f7", "fa", "mdi", "sa", "hi", "fi"]
    //     providers: ["f7"]
    //   }
    // },
  ]
}