// Ao importar esse arquivo, é possível acessar a função formatPrice.
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
