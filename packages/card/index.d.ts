import * as React from 'react';

interface CardProps {
    className?: string;
    style?: string;
    outlined?: boolean;
}

declare class Card extends React.Component<CardProps, any> {
}

interface CardPrimaryContentProps {
}

declare class CardPrimaryContent extends React.Component<CardPrimaryContentProps, any> {
}

interface CardMediaProps {
    contentClassName?: string;
    square?: boolean;
    wide?: boolean;
    imageUrl: string;
}

declare class CardMedia extends React.Component<CardMediaProps, any> {
}

interface CardActionsProps {
    fullBleed?: boolean;
}

declare class CardActions extends React.Component<CardActionsProps, any> {
}

interface CardActionButtonsProps {
}

declare class CardActionButtons extends React.Component<CardActionButtonsProps, any> {
}

interface CardActionIconsProps {
}

declare class CardActionIcons extends React.Component<CardActionIconsProps, any> {
}

export default Card;

export {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
};
