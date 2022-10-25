import React from 'react'
import { ColorPickerComponent
 } from '@syncfusion/ej2-react-inputs';

 import { Header } from '../components';

const ColorPicker = () => {

  const change= (arg)=>{
    document.getElementById('preview').style.backgroundColor= arg.currentValue.hex;
  }

  return (
  <div className='m-2 md:m-10 p-2  md:p-10 bg-white rounded sm:m-10'>
    
  <Header category='App' title='Color Picker'/>

  <div className='text-center'>
    <div id='preview'/>

    <div className='flex justify-center items-center gap-20 flex-wrap'>
      <div>
        <p className='mt-2 text-2xl mb-4 font-semibold'>Inline Pallete</p>
        <ColorPickerComponent 
        id='inline-pallete'
        mode='Pallete'
        modeSwitcher={false}
        inline
        showButton={false}
        change={change}
        />
      </div>
      <div>
        <p className='mt-2 text-2xl mb-4 font-semibold'>Inline Picker</p>
        <ColorPickerComponent 
        id='inline-pallete'
        mode='Picker'
        modeSwitcher={false}
        inline
        showButton={false}
        change={change}
        />
      </div>
    </div>
  </div>
  </div>
  )
}

export default ColorPicker