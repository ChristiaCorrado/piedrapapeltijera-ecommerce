import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [itemsTotal, setItemsTotal] = useState()

  useEffect(() => {
    if (!localStorage.getItem("cartLocalS")) {
      localStorage.setItem("cartLocalS", JSON.stringify([]));
    } else {
      setCart(JSON.parse(localStorage.getItem("cartLocalS")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartLocalS', JSON.stringify(cart))
    const myCart = JSON.parse(localStorage.getItem('cartLocalS'));
    console.log(myCart);
    const totalItemsCart = myCart.reduce((ant, items) => { return ant + items.quantity}, 0);
    console.log(totalItemsCart);
    setItemsTotal(JSON.stringify(totalItemsCart));
    console.log(itemsTotal);
  }, [cart,itemsTotal]);

  
  
  const isInCart = (id) => cart.some((item) => item.id === id);

  const addItemToCart = (itemObtenido,quantity) => {
    if (isInCart(itemObtenido.id)) {
      const newCart = cart.map((cartObtenido) => {
        if (cartObtenido.id === itemObtenido.id) {
          return { ...cartObtenido, quantity: quantity}
          
        }else return cartObtenido
      })
      setCart(newCart);

    }else {
      setCart((prev) =>[...prev, { ...itemObtenido,quantity }]);

    }
  }

  const removeItem = (itemId) => {
    const newCart = cart.filter(item => item.id === itemId)
    setCart(newCart);
  }

  
    



  return(
    <CartContext.Provider
      value={{
        addItemToCart,
        cart,
        removeItem,
        itemsTotal
      }}>
      {children}
    </CartContext.Provider>
    )
}


