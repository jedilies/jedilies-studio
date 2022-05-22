// @todo: remove the following line when part imports has been removed from this file
///<reference types="@sanity/types/parts" />

import S from '@sanity/desk-tool/structure-builder';
import client from 'part:@sanity/base/client';
import logo from '../components/logo';


const sanityClient = client.withConfig({ apiVersion: '2022-04-10' });

const author = 'Jules'; // <-- enter main author title here
const companyQuery = sanityClient.fetch(
  `*[_type == "company" && title == "${author}"][0]._id`
);

export default S.listItem()
  .title('Jules')
  .icon(logo)
  .child(() => {
    return companyQuery.then((res) => {
      return S.document().schemaType('author').documentId(res);
    });
  });
