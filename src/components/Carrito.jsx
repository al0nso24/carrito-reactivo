import { useCartStore } from "../store/useCartStore"

const catalogo = [
    {
        id: 1,
        nombre: "Teclado",
        precio: 50
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 20
    }
]

export default function Carrito() {
    const productos = useCartStore((e) => e.productos);
    const agregarProducto = useCartStore((e) => e.agregarProducto);
    const eliminarProducto = useCartStore((e) => e.eliminarProducto);
    const obtenerTotal = useCartStore((e) => e.obtenerTotal);
    
    return (
        <div style={{ padding: "20px"}}>
            <h3>Productos</h3>

            {catalogo.map((producto) => (
                <div
                    key={producto.id}
                    style={{
                        alignItems: "center",
                        marginBottom: "10px"
                    }}
                >
                    <span>
                        {producto.nombre} - S/.{producto.precio}
                    </span>
                    <button onClick={() => agregarProducto(producto)}>
                        Agregar
                    </button>
                </div>
            ))}

            <h3>Carrito</h3>

            {productos.length === 0 ? (
                <p style={{marginBottom: "20px"}}>Tu carrito está vacío</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0}}>
                    {productos.map((producto) => (
                        <li
                            key={producto.id}
                            style={{
                                alignItems: "center",
                                marginBottom: "8px",
                            }}
                        >
                            <span>
                                {producto.nombre} x {producto.cantidad} - $
                                {producto.precio * producto.cantidad}
                            </span>
                            <button onClick={() => eliminarProducto(producto.id)}>
                                Quitar
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <h2 style={{fontWeight: "bolder"}}>Total: ${obtenerTotal()}</h2>
        </div>
    )
}