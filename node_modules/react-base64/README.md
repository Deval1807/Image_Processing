# react-base64

A simple React.js component to handle encoding and decoding of base64 data.

## Usage

```jsx
import Base64 from 'react-base64'

const DATA = "SGVsbG8sIFdvcmxkIQo="


const DataRender = () => {
  return <Base64 mode="decode" data={DATA}/>
}
```

The library also includes a `Base64Raw` component that will render the data without wrapping it in a
HTML `<p>`  tag first.


```jsx
import Base64Raw from 'react-base64'

const DATA = "SGVsbG8sIFdvcmxkIQo="


const DataRender = () => {
  return <Base64Raw mode="decode" data={DATA}/>
}
```

## Installation

```
yarn add react-base64
```

