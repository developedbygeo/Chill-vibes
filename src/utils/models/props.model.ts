import { PropsLayout } from './utils.model';

export type BaseProps = PropsLayout & {
    children?: React.ReactNode;
    className?: string;
    audioRef?: React.RefObject<HTMLAudioElement>;
    onClick?: () => void;
    onChange?: (id: number) => void;
    onBlur?: () => void;
};

export type StyledProps = BaseProps & {
    width?: string;
    height?: string;
    padding?: string;
    color?: string;
};
