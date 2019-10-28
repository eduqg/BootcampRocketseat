// Todas as actions são escutadas nos reducers
// Preciso filtrar quais quero fazer algum ação
export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];
    default:
      return state;
  }
}
