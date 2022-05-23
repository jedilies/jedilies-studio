import { Image } from "@styled-icons/ionicons-solid/Image";
import schemaIcon from "../../components/icons/schemaIcon";

export default {
  name: "imgSet",
  title: "Image Set",
  type: "document",
  icon: schemaIcon(Image),
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
