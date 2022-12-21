import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bulletsAsList'
import { useCssHandles } from 'vtex.css-handles'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const CSS_HANDLES = ["bulletGroup-container"]
  const handles = useCssHandles(CSS_HANDLES)
  const {isMobile} = useDevice()
  const {list} = useListContext() || []

  const bulletsContent = getBulletsAsTSXList(bullets)
  const newListContextValue = list.concat(bulletsContent)

  return (
    <ListContextProvider list={newListContextValue}>
    {isMobile
      ?
        <div className={`${handles["bulletGroup-container"]} ph3`}>{bulletsContent}</div>
      :
      <div className={`${handles["bulletGroup-container"]} ph3`}>{children}</div>
    }
    </ListContextProvider>
  )
}



export default BulletGroup
