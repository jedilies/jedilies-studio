import React from 'react'
import {Card, Stack, Text} from '@sanity/ui'

const Colorcards = () => {
  return (
    <Card padding={4}>
      <Stack space={[1]}>
        {/* DOMINANT sanity.imageMetadata.palette.dominant */}
        <Card 
          padding={[3, 3, 4]} 
          radius={2} 
          shadow={1}
        >
          <Text align="left" size={[2, 2, 3]}>
            darkMuted <code>#FFFF11</code>
          </Text>
        </Card>
        {/* MUTED sanity.imageMetadata.palette.muted */}
        <Card 
          padding={[3, 3, 4]} 
          radius={2} 
          tone="positive"
        >
          <Text align="left" size={[2, 2, 3]}>
            darkMuted <code>#FFFF11</code>
          </Text>
        </Card>
        {/* VIBRANT sanity.imageMetadata.palette.vibrant */}
        <Card 
          padding={[3, 3, 4]} 
          radius={2} 
          tone="primary"
        >
          <Text align="left" size={[2, 2, 3]}>
            darkMuted <code>#FFFF11</code>
          </Text>
        </Card>
        {/* LIGHT MUTED sanity.imageMetadata.palette.lightMuted */}
        <Card 
          padding={[3, 3, 4]} 
          radius={2} 
          tone="caution"
        >
          <Text align="left" size={[2, 2, 3]}>
            darkMuted <code>#FFFF11</code>
          </Text>
        </Card>
        {/* LIGHT VIBRANT sanity.imageMetadata.palette.lightVibrant */}
        <Card 
          padding={[3, 3, 4]} 
          radius={2} 
          tone="critical"
        >
          <Text align="left" size={[2, 2, 3]}>
            darkMuted <code>#FFFF11</code>
          </Text>
        </Card>
        {/* DARK MUTED sanity.imageMetadata.palette.darkMuted */}
        <Card 
          padding={[3, 3, 4]} 
          radius={2} 
          tone="critical"
        >
          <Text align="left" size={[2, 2, 3]}>
            darkMuted <code>#FFFF11</code>
          </Text>
        </Card>
        {/* DARK VIBRANT sanity.imageMetadata.palette.darkVibrant */}
        <Card 
          padding={[3, 3, 4]} 
          radius={2} 
          tone="critical"
        >
          <Text align="left" size={[2, 2, 3]}>
            darkMuted <code>#FFFF11</code>
          </Text>
        </Card>

      </Stack>
    </Card>
  )
}
export default Colorcards

/*
METADATA REF
sanity.imageMetadata.palette.darkMuted
sanity.imageMetadata.palette.darkVibrant
sanity.imageMetadata.palette.dominant
sanity.imageMetadata.palette.lightMuted
sanity.imageMetadata.palette.lightVibrant
sanity.imageMetadata.palette.muted
sanity.imageMetadata.palette.vibrant
{
  "_type": "sanity.imageMetadata",
  "blurHash": "D1N17Tof000000004n0000~q",
  "dimensions": {
    "_type": "sanity.imageDimensions",
    "aspectRatio": 2.629496402877698,
    "height": 278,
    "width": 731
  },
  "hasAlpha": true,
  "isOpaque": true,
  "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVQokU2RPevBURTH79uwegMoSUallEJikMHgFSgDyexnk5SBQTKIwWBAkoeQAeUxD3nKU4liYP3+O2fQfzjde88938/9nnOF0+mETqeDSqWCWq2GzWZDOp3GbrfD/X7H5XLBYrFAs9lEPB6H1WqFXq+Hz+dDMplEJBLhnMlkgiRJEAaDAXK5HDKZDEqlEl6vF41GA+fzGbfb7Rfr9RrZbBZGoxFarZbFvV4PuVwOZrOZTQWDQQi73Q6NRgOFQgGHw4FMJoPlconD4YDNZoPj8YjH48HQdruNQCAAl8uFRCKBwWCAUqkEj8cDi8WCcDgM4ff7OeF2uxEKhbhgNpsxkGDk9Hq9YrvdsktyT7Bisch1nU6H2yYOjUqkUilEo1HEYjHk83l0u112+Hw+8fl88Hq9eJ7T6RSn04ldV6tVdkuPjMdjFAoFhlUqFYharYZyuYx6vc4iEpPw/X7j+/3yx9CnzOfzH5Bm1+/3GTYajRjearUwHA4hKEEbuiTYfr9nEbVKsVqtMJlMGEh5ck9nqqf1f9DdH4Izp9b4BxtRAAAAAElFTkSuQmCC",
  "palette": {
    "_type": "sanity.imagePalette",
    "darkMuted": {
      "_type": "sanity.imagePaletteSwatch",
      "background": "#484848",
      "foreground": "#fff",
      "population": 2.42,
      "title": "#fff"
    },
    "darkVibrant": {
      "_type": "sanity.imagePaletteSwatch",
      "background": "#424242",
      "foreground": "#fff",
      "population": 0,
      "title": "#fff"
    },
    "dominant": {
      "_type": "sanity.imagePaletteSwatch",
      "background": "#484848",
      "foreground": "#fff",
      "population": 2.42,
      "title": "#fff"
    },
    "lightMuted": {
      "_type": "sanity.imagePaletteSwatch",
      "background": "#bcbcbc",
      "foreground": "#000",
      "population": 2.38,
      "title": "#fff"
    },
    "lightVibrant": {
      "_type": "sanity.imagePaletteSwatch",
      "background": "#bcbcbc",
      "foreground": "#000",
      "population": 0,
      "title": "#fff"
    },
    "muted": {
      "_type": "sanity.imagePaletteSwatch",
      "background": "#7c7c7c",
      "foreground": "#fff",
      "population": 2.14,
      "title": "#fff"
    },
    "vibrant": {
      "_type": "sanity.imagePaletteSwatch",
      "background": "#7f7f7f",
      "foreground": "#fff",
      "population": 0,
      "title": "#fff"
    }
  }
}
*/