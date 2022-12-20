import React, {PropsWithChildren} from 'react'
import {useListContext} from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import {useDevice} from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bulletsAsList'
/* import {useDevice} from 'vtex.css-handles' */

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const {isMobile} = useDevice()
  const {list} = useListContext() || []

  console.log(bullets)

  const bulletContent = getBulletsAsTSXList(bullets)

  if (false) console.log(children, list)

  return (
    isMobile
    ?
      <div>hello bullet group in mobile</div>
    :
    <div>{bulletContent}</div>
  )
}



export default BulletGroup
