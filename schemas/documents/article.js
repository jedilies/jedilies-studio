import { Documents, DocumentText } from "styled-icons/ionicons-solid";
import schemaIcon from "../../components/icons/schemaIcon";

export default {
  name: "article",
  title: "Article",
  type: "document",
  icon: schemaIcon(Documents),
  preview: {
    select: {
      title: "title",
      media: "image",
      category: "category.title",
    },
    prepare({ title, category, media }) {
      return {
        title: title,
        subtitle: category || "No category",
        media: media || schemaIcon(DocumentText), // BUG: alt icon not loading
      };
    },
  },
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
      options: { layout: "checkbox" },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author", weak: true },
      options: { disableNew: true },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category", weak: true },
          options: { disableNew: true },
        },
      ],
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "portableText",
    },
  ],
};
