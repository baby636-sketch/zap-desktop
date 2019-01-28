import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from 'rebass'
import Spinner from 'components/Icon/Spinner'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

/**
 * @render react
 * @name Spinner
 * @example
 * <Spinner />
 */
const renderSpinner = Element => {
  return styled(Element)`
    animation: ${rotate360} 1s linear infinite;
  `
}

const WrappedSpinner = ({ element, width, height, ...rest }) => {
  const Icon = element ? element : Spinner
  const Element = renderSpinner(Icon)
  return (
    <Box color="lightningOrange" {...rest}>
      <Element width={width} height={height} />
    </Box>
  )
}

WrappedSpinner.defaultProps = {
  width: '1em',
  height: '1em'
}

export default WrappedSpinner
