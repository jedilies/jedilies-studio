import { PersonCircle } from "@styled-icons/ionicons-solid/PersonCircle";
import schemaIcon from "../../components/icons/schemaIcon";

export default {
  name: "author",
  title: "Author",
  type: "document",
  icon: schemaIcon(PersonCircle),
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
