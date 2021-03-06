/**
 * @file root react component for page named <$= pageName $>. <$= pageCreateDate $>
 * @author <$= pageAuthorName $>, <$= pageAuthorEmail $>
 */

import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('mainStore')
@observer
export default class extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className="<$= pageName $>">Hello world!</div>
    )
  }
}
