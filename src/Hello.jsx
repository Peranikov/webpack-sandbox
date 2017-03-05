// @flow
import React, {Component} from 'react' // eslint-disable-line no-unused-vars

type Props = {
  content: string
}

type State = {
  count: number
}

export class Hello extends Component<void, Props, State> {
  constructor(props: Props, context: any) {
    super(props, context)
    this.state = {count: 0}
  }

  render() {
    return <div>{`${this.props.content}`}</div>
  }
}