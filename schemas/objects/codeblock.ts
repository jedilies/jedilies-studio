export default {
  name: 'codeblock',
  title: 'Codeblock',
  type: 'code',
  options: {
    theme: 'tomorrow',
    // language: 'tsx',
    // showGutter: true,
    // highlightActiveLine: true,
    // showPrintMargin: false,
    // autoComplete: true,
    languageAlternatives: [
      {title: 'TS', value: 'tsx'},
      {title: 'CSS', value: 'css'},
      {title: 'Go', value: 'go'},
      {title: 'GraphQL', value: 'graphql'},
      {title: 'GROQ', value: 'groq'},
      {title: 'HTML', value: 'html'},
      {title: 'Java', value: 'java'},
      {title: 'JS', value: 'jsx'},
      {title: 'JSON', value: 'json'},
      {title: 'Markdown', value: 'markdown'},
      {title: 'Python', value: 'python'},
      {title: 'SASS', value: 'sass'},
      {title: 'Shell', value: 'sh'},
    ]
  }
}

// reference:
// https://securingsincity.github.io/react-ace/
// https://www.sanity.io/plugins/code-input/
