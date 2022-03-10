/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FormField } from '@sanity/base/components'
import { TextInput } from '@sanity/ui'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'

const UrlStringInput = React.forwardRef((props, ref) => {
  const {
    type,
    value,
    readOnly,
    placeholder,
    markers,
    presence,
    compareValue,
    onFocus,
    onBlur,
    onChange
  } = props

  const handleChange = React.useCallback(
    (event) => {
      const inputValue = event.currentTarget.value
      // if new input value, add input value, else don't...
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
    },
    [onChange]
  )

  return (
    <FormField
      description={type.description}
      title={type.title}
      compareValue={compareValue}
      __unstable_markers={markers}
      __unstable_presence={presence}
    >
      <TextInput
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        // add onChange to input
        onChange={handleChange}
      />
    </FormField>
  )}
)

export default UrlStringInput

/*
optional module:
*click on field heaers to focus the fields with reach auto-id*

import { useId } from "@reach/auto-id";
...
const inputId = useId()
...
<FormField
    id={inputId}
...
<TextInput
    id={inputId}
*/