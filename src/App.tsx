import { useState } from 'react'

import './App.css'
import ReactSelectable from "./components/ReactSelectable.tsx";

function App() {
    const [selectedValue, setSelectedValue] = useState({
        apple: "",
        apple1: "",
        apple2: "",
        apple3: "",
        apple4: ""
    });




  interface Option {
    value: string;
    label: string;
  }
    const options2: Option[] = [
        { value: 'option1', label: 'blue apple' },
        { value: 'option2', label: 'macbook pro apple' },
        { value: 'option3', label: 'red apple' },
        { value: 'option4', label: 'orange apple' },
        { value: 'option5', label: 'apple die' },
    ];
    const options1: Option[] = [
        { value: 'option1', label: 'Undefined is not a function' },
        { value: 'option2', label: 'Cannot read property of null' },
        { value: 'option3', label: 'Segmentation fault' },
        { value: 'option4', label: 'Off-by-one error' },
        { value: 'option5', label: 'Works on my machine' },
    ];

  return (
      <>
        <div className={'w-full flex justify-start items-center mt-[50px] flex-col'}>
          <div className={'w-full flex justify-center items-center h-full flex-col gap-[30px] px-[50px] sm:w-[500px]'}>

              <ReactSelectable
                  yLimit={6}
                  starteritem={<div>
                      🍎
                  </div>}
                  className={"w-full "}
                  alignment={"center"}
                  colorfultext={true}
                  label="Pick the lucky apple"
                  options={options2}
                  value={selectedValue.apple}
                  selected={selectedValue}
                  setvalue={setSelectedValue}

                  fieldName="apple"
              />
              <ReactSelectable
                  yLimit={6}
                  starteritem={<div>
                      <svg className="w-[30px] h-[30px] " viewBox="0 0 133 138" fill="none"
                           xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          <rect x="-4" width="136.197" height="137.031" fill="url(#pattern0)"></rect>
                          <defs>
                              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use href="#image0_61_1282"
                                       transform="matrix(0.00524023 0 0 0.00520833 -0.00306225 0)"></use>
                              </pattern>
                              <image id="image0_61_1282" width="192" height="192"
                                     href="data:image/png;base64,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"></image>
                          </defs>
                      </svg>
                  </div>}
                  className={"w-full "}
                  alignment={"start"}
                  colorfultext={false}
                  label="Choose your favorite bug"
                  direction={'top'}
                  options={options1}
                  value={selectedValue.apple1}
                  selected={selectedValue}
                  setvalue={setSelectedValue}

                  fieldName="apple1"
              />
              <ReactSelectable
                  yLimit={6}
                  starteritem={<div>
                      <svg className="w-[30px] h-[30px] " viewBox="0 0 133 138" fill="none"
                           xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          <rect x="-4" width="136.197" height="137.031" fill="url(#pattern0)"></rect>
                          <defs>
                              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use href="#image0_61_1282"
                                       transform="matrix(0.00524023 0 0 0.00520833 -0.00306225 0)"></use>
                              </pattern>
                              <image id="image0_61_1282" width="192" height="192"
                                     href="data:image/png;base64,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"></image>
                          </defs>
                      </svg>
                  </div>}
                  className={"w-full "}
                  alignment={"start"}
                  colorfultext={false}
                  label="Choose your favorite bug"
                  direction={'left'}
                  options={options1}
                  value={selectedValue.apple3}
                  selected={selectedValue}
                  setvalue={setSelectedValue}

                  fieldName="apple3"
              />
              <ReactSelectable
                  yLimit={6}
                  starteritem={<div>
                      <svg className="w-[30px] h-[30px] " viewBox="0 0 133 138" fill="none"
                           xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          <rect x="-4" width="136.197" height="137.031" fill="url(#pattern0)"></rect>
                          <defs>
                              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use href="#image0_61_1282"
                                       transform="matrix(0.00524023 0 0 0.00520833 -0.00306225 0)"></use>
                              </pattern>
                              <image id="image0_61_1282" width="192" height="192"
                                     href="data:image/png;base64,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"></image>
                          </defs>
                      </svg>
                  </div>}
                  className={"w-full "}
                  alignment={"start"}
                  colorfultext={false}
                  label="Choose your favorite bug"
                  direction={'right'}
                  options={options1}
                  value={selectedValue.apple4}
                  selected={selectedValue}
                  setvalue={setSelectedValue}

                  fieldName="apple4"
              />
          </div>
            <div className={'flex flex-col mt-[50px] gap-[0px]  items-center text-[25px]'}>
                <svg className="w-[415px] h-[150px] " viewBox="0 0 133 138" fill="none"
                     xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <rect x="-4" width="136.197" height="137.031" fill="url(#pattern0)"></rect>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#image0_61_1282"
                                 transform="matrix(0.00524023 0 0 0.00520833 -0.00306225 0)"></use>
                        </pattern>
                        <image id="image0_61_1282" width="192" height="192"
                               href="data:image/png;base64,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"></image>
                    </defs>
                </svg>
                Crafted by emrelutfi.com
            </div>
        </div>
      </>
  )
}

export default App
