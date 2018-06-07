import * as React from 'react';

interface ButtonProps {
    className?: string;
    raised?: boolean;
    unelevated?: boolean;
    outlined?: boolean;
    icon?: boolean;
    children: string;
    disabled?: boolean;
}

declare class Button extends React.Component<ButtonProps, any> {
}

export default Button;
