import PropTypes from 'prop-types'

export const FlexPropsTypes = {
  display: PropTypes.string,
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  flexFlow: PropTypes.string,
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
  full: PropTypes.bool,
  center: PropTypes.bool,
  customStyle: PropTypes.string
}

export const FlexCommonPorps = {
  customStyle: ''
}


export const FlexItemPropsTypes = {
  order: PropTypes.number,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  customStyle: PropTypes.string
}
// export default {
//   FlexPropsTypes,
//   FlexItemPropsTypes
// }