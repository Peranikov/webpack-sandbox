/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const HitPointBar = ({ hitPoint, sumAtack }) => {
  const remainHitPoint = hitPoint - sumAtack
  const remainHitPointCss = (() => {
    if (remainHitPoint > 0) {
      return CSS.hitPointPlus
    } else {
      return CSS.hitPointMinus
    }
  })()

  return(
    <div>
      HP:
      <span style={{ padding: 10 }}>
        {hitPoint}
      </span>
      -
      <span style={{ padding: 10 }}>
        {sumAtack}
      </span>
      =
      <span style={{ padding: 10 }} className={remainHitPointCss}>{remainHitPoint}</span>
    </div>
  )
}

HitPointBar.propTypes = {
  hitPoint: PropTypes.number.isRequired,
  sumAtack: PropTypes.number.isRequired,
}

export default HitPointBar