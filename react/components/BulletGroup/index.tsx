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

  console.log(bullets)

  const bulletsContent = getBulletsAsTSXList(bullets)
  const newListContextValue = list.concat(bulletsContent)

  if (false) console.log(children, list)

  return (
    <ListContextProvider list={newListContextValue}>
    {isMobile
      ?
        <div className={handles["bulletGroup-container"]}>{bulletsContent}</div>
      :
        children
    }
    </ListContextProvider>
  )
}



export default BulletGroup
