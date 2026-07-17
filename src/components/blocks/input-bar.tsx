import React from 'react';
import {LucideIcon} from "lucide-react";

interface InputBarProps {
    fullWidth?: boolean;
    hasIcon?: boolean;
    Icon?: LucideIcon;
    iconColor?: string;
    iconSize?: number;

}

const InputBar = ({ fullWidth, hasIcon, Icon, iconColor, iconSize }: InputBarProps) => {
    return (
        <div className={`bg-background shadow-md rounded-full px-4 py-2 flex items-center ${fullWidth ? 'w-full' : 'w-full min-w-0 xl:min-w-md'}`}>
            {hasIcon && Icon && <Icon className={`w-4 sm:w-6 h-4 sm:h-6 ${iconColor ? iconColor : 'text-foreground'} mr-2`} style={{ fontSize: iconSize }} />}
            <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent text-foreground border-none outline-none w-full text-sm"
            />
        </div>
    );
};

export default InputBar;
