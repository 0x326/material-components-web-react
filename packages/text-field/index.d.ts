import * as React from 'react';

interface TextFieldProps {
    box?: boolean;
    children: Input;
    className?: string;
    dense?: boolean;
    floatingLabelClassName?: string;
    fullWidth?: boolean;
    helperText?: HelperText;
    label?: string;
    leadingIcon?: Element;
    lineRippleClassName?: string;
    notchedOutlineClassName?: string;
    outlined?: boolean;
    textarea?: boolean;
    trailingIcon?: Element;
}

declare class TextField extends React.Component<TextFieldProps, any> {
}

interface InputProps {
    className?: string;
    disabled?: boolean;
    foundation?: {
        activateFocus: () => void,
        deactivateFocus: () => void,
        autoCompleteFocus: () => void,
        setTransformOrigin: () => void,
        handleValidationAttributeMutation_: (Array) => void,
    };
    handleValueChange?: (value: number | string) => void;
    id?: string;
    onBlur: (e: Event) => void;
    onChange: (e: Event) => void;
    onFocus: (e: Event) => void;
    onMouseDown?: (e: Event) => void;
    onTouchStart?: (e: Event) => void;
    setDisabled?: (e: Event) => void;
    setInputId?: (e: Event) => void;
    handleFocusChange?: (e: Event) => void;
    value?: number | string;
}

declare class Input extends React.Component<InputProps, any> {
}

interface HelperTextProps {
}

declare class HelperText extends React.Component<HelperTextProps, any> {
}

export default TextField;

export {
    Input,
    HelperText
};
