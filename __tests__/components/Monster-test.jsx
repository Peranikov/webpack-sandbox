import assert from 'power-assert'
import React from 'react'
import { shallow } from 'enzyme'
import MonsterComponent from '../../src/components/Monster'
import Monster from '../../src/models/Monster'
import Checkbox from 'material-ui/Checkbox'

function setup() {
  const props = {
    onClick: jest.fn(),
    monster: new Monster({ id: 1, name: "ゴブリン", joined: false})
  }

  const wrapper = shallow(<MonsterComponent {...props} />)
  return { props, wrapper }
}

function setupWithJoined() {
  const props = {
    onClick: jest.fn(),
    monster: new Monster({ id: 1, name: "ゴブリン", joined: true})
  }

  const wrapper = shallow(<MonsterComponent {...props} />)

  return { props, wrapper }
}

describe('components', () => {
  describe('Monster', () => {
    const { wrapper } = setup()
    const props = wrapper.find('ListItem').props()

    it("shoud primaryText is Monster name", () => {
      assert.equal(props.primaryText, "ゴブリン")
    })

    it("shoud note checked if Monster not joined", () => {
      assert.equal(props.leftCheckbox.props.checked, false)
    })

    describe('with joined', () => {
      const { wrapper } = setupWithJoined()
      const props = wrapper.find('ListItem').props()

      it("shoud checked if Monster joined", () => {
        assert.equal(props.leftCheckbox.props.checked, true)
      })
    })
  })
})