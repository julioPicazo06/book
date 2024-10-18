

import React from 'react'

const CloseButton = ({ dataText ,handleClose }: { dataText: string, handleClose: (e: React.MouseEvent) => void }) => {
  return (
    <section id='' className='  mouse row flex column end'>
    <div className=''>
      <div className='col-xs-1-12 cursor ' data-text={dataText}>
        <div
          className='cursor flex column end mt-3 pr-6 roboto f-30 bold '
          style={{
            paddingRight: '20px'
          }}
          data-text={dataText}
          onClick={e => handleClose(e)}
        >
          X
        </div>
      </div>
    </div>
  </section>
  )
}

export default CloseButton