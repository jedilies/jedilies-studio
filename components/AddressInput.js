/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useId } from "@reach/auto-id"
// import styled from "styled-components";
import { Columns, Column } from "@bedrock-layout/columns";
import { FormBuilderInput } from '@sanity/form-builder/lib/FormBuilderInput'


// const Input = styled.input`
//     padding: 0.5em;
//     margin: 0.5em;
//     border-radius: 3px;
//     width: 100%
//   `;

/* const addressInput = ({street, city, state, zip, mapUrl}) => { */
const addressInput = React.forwardRef((props, ref) => {
  const {
      type,         // Schema information
      value,        // Current field value
      readOnly,     // Boolean if field is not editable
      placeholder,  // Placeholder text from the schema
      markers,      // Markers including validation rules
      presence,     // Presence information for collaborative avatars
      compareValue, // Value to check for "edited" functionality
      onFocus,      // Method to handle focus state
      onBlur,       // Method to handle blur state
      onChange      // Method to handle patch events
    } = props
    const inputId = useId()

  return (
    <Columns gutter="sm" columns={6} switchAt="10rem">
      <Column span={6}>
        <Input
          description={type.description}  // Creates description from schema
          title={type.title}              // Creates label from schema title
          __unstable_markers={markers}    // Handles all markers including validation
          __unstable_presence={presence}  // Handles presence avatars
          compareValue={compareValue}     // Handles "edited" status
          inputId={inputId}               // Allows the label to connect to the input field
          placeholder={type.placeholder}
        >
        </Input>
      </Column>
    </Columns>
  )
})

export default addressInput

/*
example code:
https://codesandbox.io/s/columns-and-column-example-forked-50fpl?file=/src/FormGroup.js

  return (
    <>
    <Columns gutter="sm" columns={6} switchAt="10rem">
      <Column span={6}>
        <Input
        type={street}
        id="inputStreet"
        placeholder="Street"
        />
      </Column>
      <Column span={2}>
        <Input
        type={city}
        id="inputCity"
        placeholder="City"
        />
      </Column>
      <Column span={2}>
        <Input
        type={state}
        id="inputState"
        placeholder="State"
        />
      </Column>
      <Column span={2}>
        <Input
        type={zip}
        id="inputZip"
        placeholder="Zip"
        />
      </Column>
      <Column span={6}>
        <Input
        type={mapUrl}
        id="inputMapUrl"
        placeholder="Map URL"
        />
      </Column>
    </Columns>
    </>
  )


*/