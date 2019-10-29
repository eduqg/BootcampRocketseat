export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

// Colocar @cart para identificar mais fácil no reactotron onde quero referenciar
export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  }
}
