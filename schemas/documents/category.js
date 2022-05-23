import { FolderOpen } from "@styled-icons/ionicons-solid/FolderOpen";
import schemaIcon from "../../components/icons/schemaIcon";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: schemaIcon(FolderOpen),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "author", weak: true },
          options: { disableNew: true },
        },
      ],
    },
  ],
};
