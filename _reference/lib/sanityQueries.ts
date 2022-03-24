import groq from "groq";
import { sanityConfig } from "./sanityConfig";


export const categoryQuery = () => {
  return sanityConfig.fetch(groq`
  *[_type == "category"]
`);
}

export const bookmarkQuery = () => {
  let query = sanityConfig.fetch(groq`
    *[_type == "bookmark"]
  `);
  console.log(query)
  return query
}