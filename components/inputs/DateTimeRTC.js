/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { FormField } from '@sanity/base/components';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';
import { useId } from '@reach/auto-id'; // hook to generate unique IDs
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import moment from 'moment-timezone';


// THIS IS A FIALED ATTEMPT TO MAKE A DATETIME INPUT COMPONENT

const DateTimeRTC = React.forwardRef((props, ref) => {
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
    onChange,     // Method to handle patch events
  } = props;

  const inputId = useId();  // Create a unique ID for input

  const handleChange = React.useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = event.currentTarget.value;
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  return (
    <FormField
      description={type.description} 
      title={type.title} 
      __unstable_markers={markers} 
      __unstable_presence={presence} 
      compareValue={compareValue} 
      inputId={inputId} 
    >
      <Datetime
        id={inputId} 
        onChange={handleChange} 
        value={value} 
        readOnly={readOnly} 
        placeholder={placeholder} 
        onFocus={onFocus} 
        onBlur={onBlur} 
      />
    </FormField>
  );
});

export default DateTimeRTC;
