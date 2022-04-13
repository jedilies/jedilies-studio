import React from 'react';
import Icon from '../../components/emoji';
import client from 'part:@sanity/base/client';

const sClient = client.withConfig({ apiVersion: '2022-04-01' });

export default {
  name: 'performance',
  title: 'Test performance',
  type: 'document',
  liveEdit: false,
  icon: () => <Icon e="🧪" />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'show',
      title: 'Show Ref',
      type: 'reference',
      to: { type: 'show' },
    },
    {
      name: 'venue',
      title: 'Venue Ref',
      type: 'reference',
      to: { type: 'venue' },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (document, options) => {
          // ok this is a shitshow
          const queryShow = '*[_type=="show" && _id == $ref]{...}';
          const queryVenue = '*[_type=="venue" && _id == $ref]{...}';
          const showInfo = { ref: document.show._ref };
          const venueInfo = { ref: document.venue._ref };
          const showTitle = sClient.fetch(queryShow, showInfo).then((data) => {
            return data[0].title;
          });
          const venueTitle = sClient
            .fetch(queryVenue, venueInfo)
            .then((data) => {
              return data[0].title;
            });
          const result = `${showTitle}-${venueTitle}`;
          return result;
        },
      },
    },
  ],
};

/*
- source: doc => `${doc.date}-${doc.title}` :: only doc fields, works
- source: doc => doc.venue.title :: returns nothing
- 
*/
