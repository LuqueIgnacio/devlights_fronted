"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import cartService from "@/services/CartService";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
const { data: session } = useSession()
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = cart.slice()
    const productIndex = newCart.findIndex((item) => item._id === product._id);
    
    if (productIndex > -1) {
        //Si el producto ya está en el carrito, actualiza su cantidad
        newCart[productIndex].quantity += 1
    }else{
        product.quantity = 1
        newCart.push(product)
    }
    setCart(newCart)
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) => {
      return prevCart.flatMap((item) => {
        if (item._id === product._id) {
          // Si la cantidad del producto es mayor a 1, la reduce
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          // Si la cantidad es 1, lo elimina del carrito
          return [];
        }
        return item;
      });
    });
  };

  const updateCart = async () => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart })
      });
      if (!response.ok) throw new Error("Error al actualizar el carrito");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, updateCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
