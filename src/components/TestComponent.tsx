import React, { useState } from 'react';
import ReactSelectable from './ReactSelectable';

const TestComponent = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleSelectChange = (value: string) => {
        setSelectedValue(value);
    };

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2asdasdasdasd' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Emrelutfiasdkaskdaskdasdasdasd' },
    ];

    return (
            <ReactSelectable
                label="Select an optiona"
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
            />
    );
};

export default TestComponent
