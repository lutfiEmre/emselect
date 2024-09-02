# React Selectable Dropdown Project

This project demonstrates a customizable React-based selectable dropdown component. It uses functional components, hooks such as `useState`, `useEffect`, and `useRef`, and provides several configurable properties to tailor dropdown behavior and appearance.

## Usage
 ```<ReactSelectable
                yLimit={6}
                starteritem={<div>
                    ⭐
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

ReactSelectable Component
The ReactSelectable component is a customizable and dynamic component used to create a selection interface. Below are explanations of each prop used in the example:

Props Explanation:
yLimit={6}
maximum is the number of options that can be displayed.
varyasyonlar: {start,center,end}

starteritem={<div>⭐</div>}
This prop is used to specify an initial item that appears before the list of selectable options. In this example, a star emoji (⭐) is used as the starter item.

className={"w-full"}
This prop applies a CSS class to the component. Here, w-full ensures the component takes up the full width of its container.

alignment={"center"}
This prop specifies the alignment of the content within the component. In this example, the content is centered.
varyasyonlar: {start,center,end}

colorfultext={true}
This prop is a boolean that controls whether or not the text inside the component will be colorful. When set to true, the text will have color variations.

label="Pick the lucky apple"
This prop provides a label for the component, which can act as an instructional or descriptive message for the user. In this case, the label prompts the user to "Pick the lucky apple".

options={options2}
This prop is used to pass in a list of selectable options. The options2 variable contains the data representing the items that can be selected by the user.

value={selectedValue.presentation}
This prop sets the currently selected value. Here, it references the presentation attribute of the selectedValue object.

selected={selectedValue}
This prop indicates which option has been selected by the user. It stores the selected option.

setvalue={setSelectedValue}
This prop is a function used to update the selected value when the user makes a new selection. It is typically a setState function (like useState) that updates the component's state with the new selection.

fieldName="presentation"
This prop specifies the name of the field being used for the selection. In this case, it is set to "presentation", meaning the selection is tied to this particular field.


## Features

- **Dynamic Text Width Calculation**: Automatically adjusts the width of the dropdown based on the label of the selected option.
- **Starter Item**: An optional starter item to display within the dropdown selection area before the user makes a selection.
- **Customizable Alignment**: Dropdown options can be aligned to the start or center.
- **Customizable Max Height**: Limit the visible dropdown options with a scrollable view, controlled by the `yLimit` property.
- **Colorful Text Animation**: Supports colorful text animation inside the dropdown using the `colorfultext` prop.
- **Click Outside to Close**: The dropdown closes when the user clicks outside the component.
- **Upward or Downward Dropdown**: Set the dropdown direction with the `direction` prop.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-selectable-dropdown.git

cd react-selectable-dropdown

npm install

npm run dev
