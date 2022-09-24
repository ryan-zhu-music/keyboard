import * as React from 'react'
import '../styles/styles.css'

const whiteKeys = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']

const blackKeys = ['C#3', 'D#3', 'F#3', 'G#3', 'A#3', 'C#4', 'D#4', 'F#4', 'G#4', 'A#4']
const allKeys = whiteKeys.concat(blackKeys).sort()

interface Props {
  width?: number
  height?: number
  setSelectedKey?: (key: string) => void
}

const Keyboard: React.FC<Props> = ({ setSelectedKey }) => {
  const keySelect = (key: string) => {
    setSelectedKey(key)
  }

  return (
    <div className='h-[162px] bg-transparent relative flex flex-col rounded-lg'>
      <div className='flex flex-row bg-transparent absolute h-[102px] px-[29px] z-10'>
        {blackKeys.map((key, index) => (
          <button
            className={`w-[54px] h-full bg-[#3C3D70] hover:bg-[#7B7DB3] duration-300 ${
              [1, 4, 6].includes(index) ? 'mr-[62px]' : 'mr-[4px]'
            }`}
            style={{ borderRadius: '0px 0px 10px 10px' }}
            key={key}
            onClick={() => keySelect(key)}
          />
        ))}
      </div>
      <div className='flex flex-row w-full justify-between'>
        {whiteKeys.map((key, index) => (
          <button
            className={`w-[54px] h-[162px] bg-slate-300 hover:bg-[#7B7DB3] duration-300 ${index !== 13 && 'mr-[4px]'}`}
            style={{
              borderRadius: index === 0 ? '10px 0px 0px 10px' : index === 13 ? '0px 10px 10px 0px' : '0px',
            }}
            key={key}
            onClick={() => keySelect(key)}
          />
        ))}
      </div>
    </div>
  )
}

export default Keyboard
