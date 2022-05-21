import client from 'part:@sanity/base/client';
const sanityClient = client.withConfig({
  apiVersion: '2022-04-10',
  dataset: 'development'
});

sanityClient
  .delete({
    query: /* groq */ `*[
    !(_type match "system.*") &&
    !(_type match "sanity.*")
  ]`
  })
  .then(console.log)
  .catch(console.error);

/**
 * sanity exec scripts/nukeit.js --with-user-token
 *
 * THIS SCRIPT DELETES DATA!
 *
 * To use this script:
 * 1. Put this script in your studio-folder
 * 2. Write a GROQ filter that outputs the documents you want to delete
 * 3. Run `sanity dataset export` to backup your dataset before deleting a bunch of documents
 * 4. Run `sanity exec scripts/deleteByType.js --with-user-token` to delete the documents
 *
 * NOTE: For the time being you should not delete more than ~1000 documents in one transaction. This will change in the future.
 * See docs:https://www.sanity.io/docs/http-api/http-mutations#deleting-multiple-documents-by-query
 */
// [ 'testDoc', 'author', 'collection', 'imgArry', 'ticket', 'testArticle', 'article', 'social', 'testdoc', 'category', 'performance', 'envtest', 'venue', 'timeDoc', 'show', 'sanity.imageAsset' ]
