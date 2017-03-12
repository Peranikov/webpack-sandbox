/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const VorpalSwordSelector = ({ monsters, onChange }) => (
  <div>
    <select onChange={onChange}>
      {
        monsters
          .map((m) => m.name)
          .filter((x, i, self) => self.indexOf(x) === i) // remove duplicate name
          .map(name =>
            <option key={name} value={name}>{name}</option>
          )
      }
    </select>
  </div>
)

export default VorpalSwordSelector