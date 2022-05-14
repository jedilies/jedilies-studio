import React from 'react';
import styled from 'styled-components';


// const rtlText = props => (
//   <span style={{direction: 'rtl'}}>{props.children}</span>
// )
// const Rtl = (props) =>
//   styled(props)`
//     direction: rtl;
//   `;
const Rtl = styled.span`
    font-family: cursive;
    font-weight: 100;
  `;

const rtlText = props => (
  <Rtl>{props.children}</Rtl>
)

export default {
  title: 'Portable Text',
  name: 'ptAlt',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      options: {
        spellCheck: false,
      },
      styles: [
        {
          title: 'RTL',
          value: 'rtl',
          blockEditor: {
            render: rtlText,
          },
        },
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              { title: 'URL', name: 'href', type: 'url' },
              // { title: 'color', name: 'Color', type: 'color' },
            ],
          },
        ],
      },
    },
    /* adtnl types */
    { type: 'image', hotspot: true },
  ],
};
