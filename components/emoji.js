import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({e}) =>
  typeof e === 'string' ? (
    <span style={{fontSize: '1.5rem'}}>{e}</span>
  ) : (
    <span style={{fontSize: '1.5rem'}}></span>
  )

Icon.propTypes = {
  e: PropTypes.string.isRequired
}

export default Icon
