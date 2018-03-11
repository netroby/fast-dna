export interface IFluentDesignSystem {
    backgroundColor: string;
    baseUnit: number;
    borderColor: string;
    borderRadius: number;
    borderSize: number;
    borderStyle: string;
    boxSizing: string;
    brandColor: string;
    controlHeight: number;
    cursor: string;
    foregroundColor: string;
}

const fluentDesignSystemDefaults: IFluentDesignSystem = {
    backgroundColor: "#FFF",
    baseUnit: 4,
    borderColor: "transparent",
    borderRadius: 2,
    borderSize: 2,
    borderStyle: "solid",
    boxSizing: "border-box",
    brandColor: "#0078D4",
    controlHeight: 28,
    cursor: "pointer",
    foregroundColor: "#000"
};

export default fluentDesignSystemDefaults;
