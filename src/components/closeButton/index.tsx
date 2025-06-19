import React from 'react'
import { CloseButtonContainer } from './styles'

const CloseButton = ({ dataText, handleClose }: { dataText: string, handleClose: (e: React.MouseEvent) => void }) => {
  return (
    <section className='mouse'>
      <CloseButtonContainer 
        className='cursor'
        data-text={dataText}
        onClick={(e: React.MouseEvent) => handleClose(e)}
      >
        X
      </CloseButtonContainer>
    </section>
  )
}

export default CloseButton