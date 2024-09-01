import { useState } from 'react'

import './App.css'
import ReactSelectable from "./components/ReactSelectable.tsx";

function App() {
  const [selectedValue, setSelectedValue] = useState<any>({
    automobiles: "",
    presentation: ""
  });



  const options : any = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2asdasdasdasd' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Emrelutfiasdkaskdaskdasdasdasd' },
  ];
  const options2: any = [
    { value: 'option5', label: 'presentation' },
    { value: 'option6', label: 'Option 2asdasdasdasd' },
    { value: 'option7', label: 'Option 3' },
    { value: 'option8', label: 'Emrelutfiasdkaskdaskdasdasdasd' },
    { value: 'option5', label: 'presentation' },
    { value: 'option6', label: 'Option 2asdasdasdasd' },
    { value: 'option7', label: 'Option 3' },
    { value: 'option8', label: 'Emrelutfiasdkaskdaskdasdasdasd' },
    { value: 'option5', label: 'presentation' },
    { value: 'option6', label: 'Option 2asdasdasdasd' },
    { value: 'option7', label: 'Option 3' },
    { value: 'option8', label: 'Emrelutfiasdkaskdaskdasdasdasd' },   { value: 'option5', label: 'presentation' },
    { value: 'option6', label: 'Option 2asdasdasdasd' },
    { value: 'option7', label: 'Option 3' },
    { value: 'option8', label: 'Emrelutfiasdkaskdaskdasdasdasd' },
    { value: 'option5', label: 'presentation' },
    { value: 'option6', label: 'Option 2asdasdasdasd' },
    { value: 'option7', label: 'Option 3' },
    { value: 'option8', label: 'Emrelutfiasdkaskdaskdasdasdasd' },

  ];
  return (
      <>
        <div className={'w-[500px]'}>

          <ReactSelectable
              label="Integrated presentation"
              options={options2}
              value={selectedValue.presentation}
              selected={selectedValue}
              setvalue={setSelectedValue}
              fieldName="presentation"
          />
        </div>
      </>
  )
}

export default App
