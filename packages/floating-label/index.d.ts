import * as React from 'react';

interface FloatingLabelProps {
    className?: string;
    handleWidthChange?: (width: number) => void;
    float?: boolean;
}

declare class FloatingLabel extends React.Component<FloatingLabelProps, any> {
}

export default FloatingLabel;
