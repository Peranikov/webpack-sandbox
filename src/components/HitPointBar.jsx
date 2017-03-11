/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
/*eslint-enable no-unused-vars*/

const HitPointBar = ({ hitPoint, sumAtack }) => (
  <div>
    <span>
      HP: {hitPoint} - {sumAtack} = {hitPoint - sumAtack}
    </span>
  </div>
)

HitPointBar.propTypes = {
  hitPoint: PropTypes.number.isRequired,
  sumAtack: PropTypes.number.isRequired,
}

export default HitPointBar