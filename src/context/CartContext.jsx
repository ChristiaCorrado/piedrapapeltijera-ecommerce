import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {

  const [cartClicked, setCartClicked] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem('cartLocalS', JSON.stringify([cart]))
  }, [cart])

  useEffect(() =>{
    const myCart = JSON.parse(localStorage.getItem('cartLocalS'));
    console.log(myCart);
  })

  
  
  const isInCart = (id) => cart.some((item) => item.id === id);

  const addItemToCart = (itemObtenido,quantity) => {
    if (isInCart(itemObtenido.id)) {
      const newCart = cart.map((cartObtenido) => {
        if (cartObtenido.id === itemObtenido.id) {
          return { ...cartObtenido, quantity: quantity}
          
        }else return cartObtenido
      })
      setCart(newCart);
      setCartClicked(true)
    }else {
      setCart((prev) =>[...prev, { ...itemObtenido,quantity }]);
      setCartClicked(true)
    }
  }

  const removeItem = (itemId) => {
    const newCart = cart.filter(item => item.id === itemId)
    setCart(newCart);
  }

  
    

  const clickOnCart = () => {
      if (cartClicked === false) {
          setCartClicked(true)
         
      }else{
          setCartClicked(false)
          
      }  
  }



  return(
    <CartContext.Provider
      value={{
        addItemToCart,
        cart,
        removeItem,
        cartClicked,
        clickOnCart,
      }}>
      {children}
    </CartContext.Provider>
    )
}


