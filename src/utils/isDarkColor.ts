export const isColorDark = (hex: string): boolean => {
    // Elimina el símbolo '#' si está presente
    hex = hex.replace('#', '');

    // Convierte el valor hexadecimal a RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calcula el brillo del color
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Devuelve true si el color es oscuro, false si es claro
    return brightness < 128;
};

