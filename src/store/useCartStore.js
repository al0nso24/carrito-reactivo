import { create } from "zustand";

export const useCartStore = create((set, get) => ({
    productos: [], // [{ id, nombre, precio, cantidad }]

    agregarProducto: (producto) =>
        set((estado) => {
            const existente = estado.productos.find((p) => p.id === producto.id);
            if (existente) {
                return {
                    productos: estado.productos.map((p) =>
                        p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p)
                };
            }
            return { productos: [...estado.productos, { ...producto, cantidad: 1 }] };
        }),
    
    eliminarProducto: (id) =>
        set((estado) => ({
            productos: estado.productos.filter((p) => p.id !== id),
        })),
    //"get" lee el estado actual sin suscribirse

    obtenerTotal: () =>
        get().productos.reduce((total, p) => total + p.precio * p.cantidad, 0),
}));