import { useState, useEffect, useCallback } from 'react';

function useLocalStorage<T>(key: string) {
    // Leer el valor inicial del localStorage
    const readValue = useCallback(() => {
        if (typeof window === 'undefined') {
            return undefined;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : undefined;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return undefined;
        }
    }, [key]);

    // Estado para almacenar el valor
    const [storedValue, setStoredValue] = useState<T | undefined>(readValue);

    // Función para actualizar el valor en el estado y en el localStorage
    const setValue = (value: T | ((val: T | undefined) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    // Efecto para sincronizar el estado con el localStorage
    useEffect(() => {
        setStoredValue(readValue());
    }, [readValue]);

    return [storedValue, setValue] as const;
}

export default useLocalStorage;