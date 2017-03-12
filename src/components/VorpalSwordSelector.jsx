/*eslint-disable no-unused-vars*/
import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Subheader from 'material-ui/Subheader'
import CSS from '../styles/app.css'
/*eslint-enable no-unused-vars*/

const VorpalSwordSelector = ({ monsters, onChange }) => (
  <div>
    <Subheader>VorpalSword Target</Subheader>
    <SelectField
      onChange={onChange}
    >
      {
        monsters
          .map((m) => m.name)
          .filter((x, i, self) => self.indexOf(x) === i) // remove duplicate name
          .map(name =>
            <MenuItem key={name} value={name} primaryText={name} />
          )
      }
    </SelectField>
  </div>
)

export default VorpalSwordSelector