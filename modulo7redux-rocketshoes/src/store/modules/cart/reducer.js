import produce from 'immer';

// Todas as actions são escutadas nos reducers
// Preciso filtrar quais quero fazer algum ação
export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        // Verifico se o id do produto que recebi já existe no meu array de produtos do state
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          // splice = id do produto, quantidade a ser removida
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
