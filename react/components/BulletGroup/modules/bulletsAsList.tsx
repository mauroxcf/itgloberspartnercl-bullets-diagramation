import React from 'react'
import { BulletsSchema} from '../BulletTypes'

export const getBulletsAsTSXList = (
    bullets: BulletsSchema
) => (
  bullets.map((bullet: any, index) => {
    return (
      <div key={index}>
        <a href={bullet?.link?.url ? bullet?.link?.url : ""} />
        <p>{bullet?.titleBullet}</p>
        <p>{bullet?.image}</p>
      </div>
    )
  })
)
