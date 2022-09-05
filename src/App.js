import './index.css';
import Button from './Button';
import Number from './Number';
import Operator from './Operator';
import Function from './Function';
import { useState, useEffect, useRef } from 'react'


function App() {
  const [value, setValue] = useState('0');
  const [prevValue, setPrevValue] = useState('');

  const [isNew, setIsNew] = useState(false);
  const [operator, setOperator] = useState('');
  const [isRepeat, setIsRepeat] = useState(false)

  const [operationValue, setOperationValue] = useState('')


  const clear = () => { setValue('0'); setPrevValue('') }

  const writeNumber = (digit) => {
    if (isNew) {
      setValue('')
      setIsNew(false)
      if (value != '0')
        setPrevValue(value)
    }

    if (digit == '.') {

      setValue((prev) => prev == '' ? '0' + digit : prev + digit)
    }
    else {
      setValue((prev) => value === '0' ? digit : prev + digit)
    }


    console.log(value)
    setIsRepeat(false)

  }

  const operate = (oper) => {
    setIsNew(true)

    setOperator(oper)
    if (prevValue !== '' && !isNew) {
      switch (operator) {
        case 'divi':
          setValue(() => (parseFloat(prevValue) / parseFloat(value)))
          break
        case 'mult':
          setValue(() => (parseFloat(prevValue) * parseFloat(value)))
          break
        case 'subt':
          setValue(() => (parseFloat(prevValue) - parseFloat(value)))
          break
        case 'addi':
          setValue(() => (parseFloat(prevValue) + parseFloat(value)))
          break
      }
    }
    setIsRepeat(false)

  }

  const equal = () => {
    let currentValue = prevValue == '' ? '0' : prevValue
    let opVal = value
    if (isRepeat) {
      currentValue = value
      opVal = operationValue
    } else
      setOperationValue(value)


    switch (operator) {
      case 'divi':
        setValue(() => (parseFloat(currentValue) / parseFloat(opVal)))
        break
      case 'mult':
        setValue(() => (parseFloat(currentValue) * parseFloat(opVal)))
        break
      case 'subt':
        setValue(() => (parseFloat(currentValue) - parseFloat(opVal)))
        break
      case 'addi':
        setValue(() => (parseFloat(currentValue) + parseFloat(opVal)))
        break
    }
    setIsRepeat(true)
    setIsNew(true)
  }

  const contrast = () => {
    setValue(prev => (parseFloat(prev) * (-1)).toString())
    setIsNew(true)
  }
  const percentage = () => {
    setValue(prev => (parseFloat(prev) * (0.01)).toString())
    setIsNew(true)
  }



  onkeydown = (e) => {
    switch (e.key) {
      case '%': percentage()
        break
      case '/': operate('divi')
        break
      case '*': operate('mult')
        break
      case '+': operate('addi')
        break
      case '-': operate('subt')
        break
      case '=': equal()
        break
      case 'Enter': equal()
        break
      case 'c': clear()
        break
      case '.' :if (!value.includes('.'))  writeNumber('.')
        break
      default : 
        for (let i = 0; i < 10; i++) {
        if (e.key == i.toString())
          writeNumber(e.key)
      }
    }
  }

  return (
    <div className='flex flex-col fixed bg-scroll bg-neutral-900 h-screen w-screen justify-center items-center gap-8'>
      <div className='md:w-[400px] sm:w-[300px] h-[500px] bg-zinc-800 rounded-xl border-[1.5px] border-zinc-600 shadow-xl'>
        <div className='grid w-full h-1/5 items-end justify-end px-5 pb-3'>
          {
            value.length > 10 ? <p className="text-white font-thin text-clip overflow-hidden text-left text-4xl">{value}</p> : <p className="text-white font-thin text-clip overflow-hidden text-left text-6xl">{value}</p>
          }
        </div>
        <div className='grid grid-cols-4 grid-rows-5 gap-[1px] w-full h-4/5'>
          <Function func={clear}>C</Function>
          <Function func={contrast}>+/-</Function>
          <Function func={percentage}>%</Function>
          <Operator func={() => operate('divi')}>&#247;</Operator>

          <Number func={() => writeNumber('7')}>7</Number>
          <Number func={() => writeNumber('8')}>8</Number>
          <Number func={() => writeNumber('9')}>9</Number>
          <Operator func={() => operate('mult')} r>&#215;</Operator>

          <Number func={() => writeNumber('4')}>4</Number>
          <Number func={() => writeNumber('5')}>5</Number>
          <Number func={() => writeNumber('6')}>6</Number>
          <Operator func={() => operate('subt')}>-</Operator>

          <Number func={() => writeNumber('1')}>1</Number>
          <Number func={() => writeNumber('2')}>2</Number>
          <Number func={() => writeNumber('3')}>3</Number>
          <Operator func={() => operate('addi')}>+</Operator>

          <Button func={() => writeNumber('0')} styles={"bg-zinc-500 col-span-2 rounded-bl-xl active:bg-zinc-400"}>0</Button>
          <Button func={() => { if (!value.includes('.')) writeNumber('.') }} styles={"bg-zinc-500 active:bg-zinc-400"}>,</Button>
          <Button func={() => equal()} styles={"bg-amber-500 rounded-br-xl active:bg-amber-600"}>=</Button>
        </div>
      </div>
      <div className='grid w-[400px] h-[8%] items-center justify-center sm:mt-[-10px] md:mt-10'>
        <div><p className='text-md text-zinc-400 text-center font-thin'>developed by</p></div>
        <div ><svg className='fill-zinc-400 mt-[-3%] pl-[25%]'>

          <g>
            <path class="st0" d="M29.24,48.91c-5.44,0-7.13-2.65-7.52-3.45c-0.06-0.13-0.02-0.27,0.09-0.36l1.15-0.89
		c0.14-0.11,0.33-0.07,0.43,0.07c0.52,0.81,2.48,3.03,7.82,2.43c5.22-0.59,5.98-6.77,6.04-9.6c0-0.18-0.15-0.32-0.32-0.3l-8.98,0.88
		c-0.21,0.02-0.37-0.18-0.31-0.38l0.48-1.54c0.03-0.11,0.13-0.19,0.25-0.21l10.55-1.04c0.16-0.02,0.31,0.11,0.32,0.27l0.06,0.76
		c0.34,4.23-0.88,12.42-7.86,13.22C30.65,48.87,29.92,48.91,29.24,48.91z"/>
            <path class="st0" d="M40.73,48.95l-0.81,0.06c-0.32,0.02-0.57-0.26-0.52-0.57c0.49-2.78,2.35-12.66,4.95-14.96
		c1.08-0.95,2.53-1.13,3.7-0.44c1.81,1.06,3.49,4.42,1.41,14.39c-0.07,0.32-0.33,0.57-0.66,0.63l-1.12,0.18
		c-0.23,0.04-0.42-0.17-0.38-0.4c2.13-10.16,0.14-12.74-0.31-13c-0.46-0.27-0.97-0.06-1.27,0.2c-1.67,1.48-3.45,8.67-4.28,13.26
		C41.38,48.65,41.09,48.92,40.73,48.95z"/>
            <polygon class="st0" points="41.72,43.81 42.01,41.07 49.06,39.82 49,42.63 	" />
            <path class="st0" d="M53.65,47.9l-1.44,0.16c-0.23,0.03-0.43-0.18-0.38-0.41l2.84-14.72c0.03-0.16,0.16-0.27,0.32-0.28l1.42-0.08
		c0.23-0.01,0.4,0.19,0.36,0.41l-2.82,14.64C53.92,47.77,53.8,47.88,53.65,47.9z"/>
            <path class="st0" d="M64.9,18.72l-4.02,27.97c-0.04,0.26-0.25,0.46-0.51,0.49l-1.04,0.1c-0.37,0.03-0.68-0.29-0.62-0.66l4.6-27.94
		c0.04-0.22,0.19-0.4,0.41-0.46l0.46-0.13C64.57,17.97,64.96,18.31,64.9,18.72z"/>

            <rect x="53.75" y="38.95" transform="matrix(0.9752 -0.2215 0.2215 0.9752 -7.4302 13.732)" class="st0" width="7.5" height="2.08" />
            <path class="st0" d="M69.53,47.57c-0.21,0-0.43-0.01-0.64-0.04c-1.69-0.19-3.08-0.96-4.04-2.21c-1.09-1.42-1.56-3.47-1.26-5.48
		c0.46-3.07,2.73-6.01,6.76-5.65h0c3.5,0.31,5.34,3.44,5.34,6.37c0,1.6-0.91,4.11-2.6,5.61C72.06,47.1,70.84,47.57,69.53,47.57z
		 M69.71,36.24c-2.56,0-3.79,2.06-4.07,3.91c-0.22,1.46,0.1,2.93,0.85,3.91c0.62,0.8,1.5,1.28,2.63,1.41
		c0.98,0.11,1.82-0.16,2.58-0.84c1.3-1.16,1.9-3.11,1.9-4.06c0-1.93-1.08-4.09-3.44-4.31h0C70.01,36.25,69.86,36.24,69.71,36.24z"/>
            <path class="st0" d="M72.24,70.67c0,0-0.12,0.42-0.7,0.42c-0.4,0-0.4-0.64-0.4-0.64l7.47-38.24l6.19,8.85l6.16-27.95
		c0,0,0.21-0.24,0.57-0.19c0.35,0.05,0.4,0.35,0.4,0.35l-5.51,33.73l-6.56-8.36L72.24,70.67z"/>
            <path class="st0" d="M100.36,39.65c-0.21,3.11,0.55,3.73,0.04,5c-0.45,1.14-1.98,1.88-3.89,2c-0.27,0.02-0.54,0.04-0.81,0.04
		c-1.81,0-3.43-0.57-4.53-1.61c-1.1-1.04-1.66-2.52-1.6-4.29c0.15-5.07,2.6-8.29,6.71-8.9c2.96-0.44,5.25,1.43,5.31,3.48l-1.53,0.02
		c-0.36,0.01-0.69-0.18-0.9-0.48c-0.35-0.5-1.1-1.17-2.59-0.97c-4.12,0.57-4.77,4.59-4.8,6.92c-0.04,3.28,2.98,3.84,4.56,3.71
		c2.63-0.21,1.97-3.13,1.84-4.8L100.36,39.65z"/>
            <path class="st0" d="M96.48,40.01l-0.38-1.48c-0.03-0.14,0.07-0.27,0.21-0.27l5.15-0.04c0.21,0,0.36,0.18,0.33,0.39l-0.25,1.39
		c-0.03,0.18-0.18,0.3-0.36,0.3l-4.28,0.03C96.7,40.33,96.53,40.2,96.48,40.01z"/>
            <path class="st0" d="M104.09,45.78h-1.41c-0.21,0-0.36-0.18-0.34-0.38l1.37-12.74c0.04-0.34,0.3-0.61,0.64-0.64l1-0.1
		c0.41-0.04,0.76,0.31,0.71,0.72l-1.64,12.85C104.41,45.65,104.26,45.78,104.09,45.78z"/>
            <path class="st0" d="M109.18,45.75l-1.03,0.02c-0.27,0-0.49-0.23-0.46-0.5l1.28-13.19l2.07,0.2l-1.25,12.92
		C109.76,45.51,109.5,45.75,109.18,45.75z"/>
            <path class="st0" d="M109.6,39.47c-0.16,0-0.32,0-0.49-0.01v-1.11c3.97,0.09,5.9-0.71,6.55-1.91c0.52-0.96-0.04-2.22-0.82-2.73
		c-2.15-1.43-4.78,0.21-4.89,0.3l-0.97-1.94c1.4-1.17,4.39-2.38,7.07-0.25c1.74,1.38,1.87,3.9,1.17,5.37
		C116.72,38.22,115.43,40,109.6,39.47z"/>
            <path class="st0" d="M130.38,44.37c-10.44-0.16-20.65-4-21.03-4.17l0.86-1.89c0.09,0.04,10.84,5.44,21.04,5.44l0,0
		C131.13,44.12,130.78,44.37,130.38,44.37z"/>
            <ellipse class="st0" cx="136.79" cy="44.4" rx="1.51" ry="1.1" />
          </g>
        </svg></div>
      </div>
    </div>
  );
}

export default App;
