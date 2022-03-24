import groq from "groq";
import { sanityConfig } from "./sanityConfig";

export const categoryQuery = await sanityConfig.fetch(groq`
  *[_type == "category"]
`);

export const asdf = await sanityConfig.fetch(groq`
  *[_type == "bookmark"]
`);

export const bookmarkQuery = () => {
  
}