import * as React from "react";
import { Button, IButtonProps, IButtonManagedClasses, IFoundationProps } from "@microsoft/fast-react-components-base";
import manageJss, { ComponentStyles } from "@microsoft/fast-react-jss-manager";
import {IFluentDesignSystem} from "../design-system";
import {adjustColorLuminosity, convertHexToRGBa} from "../utils/colors";

function applyBackplate(): any {
    return {
        "display": "inline-block",
        "outline": "none", // systematize outline and set this as global
        "overflow": "hidden",
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "backgroundColor": (config: IFluentDesignSystem): string => {
            return config.brandColor;
        },
        "borderRadius": (config: IFluentDesignSystem): string => {
            return `${config.borderRadius}px`;
        },
        "border": (config: IFluentDesignSystem): string => {
            return `${config.borderSize}px ${config.borderStyle} ${config.borderColor}`;
        },
        "boxSizing": (config: IFluentDesignSystem): string => {
            return config.boxSizing;
        },
        "color": (config: IFluentDesignSystem): string => {
            return config.backgroundColor;
        },
        "cursor": (config: IFluentDesignSystem): string => {
            return config.cursor;
        },
        "font-size": "14px", // TODO: address type ramp scenario
        "height": (config: IFluentDesignSystem): string => {
            return `${config.controlHeight}px`;
        },
        "lineHeight": (config: IFluentDesignSystem): string => {
            // The formula below vertically adjusts the text to compensate for the border.
            return `${config.controlHeight - (config.borderSize * 2)}px`;
        },
        "padding": (config: IFluentDesignSystem): string => {
            return `0 ${(config.baseUnit * 3)}px`;
        },
        "&[disabled]": {
            "cursor": "not-allowed",
            "color": (config: IFluentDesignSystem): string => {
                return convertHexToRGBa(config.foregroundColor, 20);
            },
            "backgroundColor": (config: IFluentDesignSystem): string => {
                return convertHexToRGBa(config.brandColor, 20);
            },
            "&:hover": {
                backgroundColor: (config: IFluentDesignSystem): string => {
                    return convertHexToRGBa(config.brandColor, 20);
                }
            }
        },
        "&:hover, &:focus": {
            backgroundColor: (config: IFluentDesignSystem): string => {
                return adjustColorLuminosity(config.brandColor, -0.1);
            }
        },
        "&:focus": {
            borderColor: (config: IFluentDesignSystem): string => {
                return config.foregroundColor;
            }
        },
        "&:active": {
            backgroundColor: (config: IFluentDesignSystem): string => {
                return adjustColorLuminosity(config.brandColor, -0.2);
            }
        }
    };
}

const styles: ComponentStyles<IButtonManagedClasses, IFluentDesignSystem> = {
    button: {
        "min-width": "122px", // currently just a number from the Fluent team <- can this be programatically applied?
        ...applyBackplate()
    },
};

export default manageJss(styles)(Button);
