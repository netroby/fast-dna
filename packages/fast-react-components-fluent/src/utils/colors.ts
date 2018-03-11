export function adjustColorLuminosity(hex: string, luminance: number): string {
    hex = String(hex).replace(/[^0-9a-f]/gi, "");

    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    luminance = luminance || 0;

    let rgb: string = "#";
    let color: any;

    for (let i: number = 0; i < 3; i++) {
        color = parseInt(hex.substr(i * 2, 2), 16);
        color = Math.round(Math.min(Math.max(0, color + (color * luminance)), 255)).toString(16);
        rgb += ("00" + color).substr(color.length);
    }

    return rgb;
}

export function convertHexToRGBa(hex: string, opacity: number): string {
    hex = hex.replace("#", "");
    opacity = opacity / 100;

    const red: number = parseInt(hex.substring(0, 2), 16);
    const green: number = parseInt(hex.substring(2, 4), 16);
    const blue: number = parseInt(hex.substring(4, 6), 16);

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
