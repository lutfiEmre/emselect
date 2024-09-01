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

  ];
  return (
      <>
        <div className={'w-full flex justify-start items-center mt-[50px] flex-col'}>
          <div className={'w-full px-[50px] sm:w-[500px]'}>
            <ReactSelectable
                yLimit={5}
                starteritem={<div className={""}>


                </div>}
                className={"w-full "}
                alignment={"center"}
                colorfultext={true}
                label="Pick the lucky apple"
                options={options2}
                value={selectedValue.presentation}
                selected={selectedValue}
                setvalue={setSelectedValue}
                fieldName="presentation"
            />
          </div>

        </div>
      </>
  )
}

export default App
