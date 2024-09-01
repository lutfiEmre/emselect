import React, { useState, useRef, useEffect } from 'react';



interface Option
{
    value: string;
    label: string;
}

interface ReactSelectableProps {
    options: Option[];
    value: string;
    setvalue: (value: any) => void;
    selected: any;
    starteritem: string;
    colorfultext: boolean;
    className?: string;
    fieldName: string;
    label?: string;
    yLimit?: number;
    alignment?: string;

    direction?: 'top' | 'bottom';
}

const calculateTextWidth = (text: string): number => {
    const baseWidth = 25;
    const charWidth = 8.32;
    return baseWidth + text.length * charWidth;
};

const DynamicWidthText: React.FC<{ text: string; width: string;starteritem: string;colorfultext:boolean;yLimit: number; isOpen: boolean; onClick: () => void; isPlaceholder: boolean }> = ({ text, colorfultext,starteritem, isOpen, onClick, isPlaceholder }) => {
    return (
    <div
        // style={{ width }} -> karakter sayısına göre widthi tespit et. emrev1

        onClick={onClick}
        className="border-[1px] cursor-pointer w-full border-opacity-20 justify-between pr-[15px] pl-[15px] rounded-[8px] flex  items-center h-[41px] border-[#444444]"
    >
        <div className={`max-w-[80%] flex items-center gap-[5px] overflow-hidden ${isPlaceholder ? 'text-[#444444] text-opacity-50' : ''}`}>
            <div className={'mt-[3px] text-[16px] pr-[2px]'}>
                {starteritem}
            </div>
            <span className={`${colorfultext && "animated-text"}`}>{text}</span>
        </div>

        <svg className={`${isOpen && "rotate-[180deg]"} transition-all duration-50 ease-linear`} width="24" height="25"
             viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.998 17.7401C11.8664 17.7408 11.7359 17.7156 11.6141 17.6658C11.4922 17.6161 11.3814 17.5427 11.288 17.4501L5.28799 11.4501C5.19426 11.3571 5.11986 11.2465 5.06909 11.1246C5.01833 11.0028 4.99219 10.8721 4.99219 10.7401C4.99219 10.608 5.01833 10.4773 5.06909 10.3555C5.11986 10.2336 5.19426 10.123 5.28799 10.0301C5.47535 9.8438 5.7288 9.73926 5.99299 9.73926C6.25717 9.73926 6.51062 9.8438 6.69799 10.0301L11.998 15.3301L17.288 10.0301C17.4753 9.8438 17.7288 9.73926 17.993 9.73926C18.2572 9.73926 18.5106 9.8438 18.698 10.0301C18.7917 10.123 18.8661 10.2336 18.9169 10.3555C18.9676 10.4773 18.9938 10.608 18.9938 10.7401C18.9938 10.8721 18.9676 11.0028 18.9169 11.1246C18.8661 11.2465 18.7917 11.3571 18.698 11.4501L12.698 17.4501C12.5117 17.6348 12.2603 17.7389 11.998 17.7401Z" fill="black"/>
        </svg>
    </div>
    );
};

const ReactSelectable: React.FC<ReactSelectableProps> = ({ options,starteritem, setvalue,colorfultext,className, selected,yLimit,alignment, value, fieldName, label, direction = 'bottom' }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen]);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionValue: string) => {
        setvalue({ ...selected, [fieldName]: optionValue });
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const maxLabel = options.reduce((max, option) => option.label.length > max.length ? option.label : max, '');
    const dropdownWidth = `${calculateTextWidth(maxLabel)}px`;

    const selectedLabel = options.find(option => option.value === value)?.label || label;
    const isPlaceholder = !value;

    const positionClass = direction === 'bottom'
        ? 'top-full left-0 mt-2'
        : 'bottom-full left-0 mb-2 transform -translate-y-full';

    return (
        <div ref={dropdownRef} className={`relative  !w-full  ${className}`}>
            <DynamicWidthText starteritem={starteritem} colorfultext={colorfultext} alignment={alignment} isOpen={isOpen} text={selectedLabel} width={dropdownWidth} onClick={handleToggle} isPlaceholder={isPlaceholder} />
            {isOpen && (
                <div
                    style={{
                        paddingTop: yLimit && "15px",
                        maxHeight: `${yLimit * 41}px`,
                        overflowY: 'auto' 
                    }}
                    className={`absolute !w-full  origin-bottom flex flex-col items-center gap-[5px] rounded-[10px] shadow-2xl bg-white z-10 ${positionClass}`}
                >
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`cursor-pointer w-full flex ${alignment === "start" && "justify-start pl-4"} ${alignment === "center" && "justify-center"}  py-[5px] items-center whitespace-nowrap text-left hover:bg-gray-100`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReactSelectable;
