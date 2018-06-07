import * as React from 'react';

interface TopAppBarProps {
    actionItems?: Array<Element>;
    className?: string;
    title?: string;
    navigationIcon?: Element;
    short?: boolean;
    shortCollapsed?: boolean;
    prominent?: boolean;
}

declare class TopAppBar extends React.Component<TopAppBarProps, any> {
}
