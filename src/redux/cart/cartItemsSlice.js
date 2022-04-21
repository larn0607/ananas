import {
  createSlice
} from '@reduxjs/toolkit'

const items = localStorage.getItem('ananas-cart') !== null ? JSON.parse(localStorage.getItem('ananas-cart')) : []

const initialState = {
  value: items
}

export const cartItemsSlice = createSlice({
  name: 'ananas-cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const duplicate = findItem(state.value, newItem)

      if (duplicate.length > 0) {
        state.value = delItem(state.value, newItem)

        state.value = [...state.value, {
          ...newItem,
          id: duplicate[0].id,
          quantity: newItem.quantity + duplicate[0].quantity,
        }]
      } else {
        state.value = [...state.value, {
          ...newItem,
          id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
        }]
      }
      localStorage.setItem('ananas-cart', JSON.stringify(sortItems(state.value)))
    },
    updateItem: (state, action) => {
      const updateItem = action.payload
      const item = findItem(state.value, updateItem)

      if (item.length > 0) {
        state.value = delItem(state.value, updateItem)
        state.value = [...state.value, {
          ...updateItem,
          id: item[0].id,
        }]
      }
      console.log(state.value)
      localStorage.setItem('ananas-cart', JSON.stringify(sortItems(state.value)))
    },
    removeItem: (state, action) => {
      const item = action.payload
      state.value = delItem(state.value, item)
      localStorage.setItem('ananas-cart', JSON.stringify(sortItems(state.value)))
    },
    clearCart(state, action){
      state.value = []
      localStorage.setItem('ananas-cart', JSON.stringify(sortItems(state.value)))
    }
  }
})

const findItem = (arr, item) => arr.filter(e => e._id === item._id && e.size === item.size)

const delItem = (arr, item) => arr.filter(e => e._id !== item._id || e.size !== item.size)

const sortItems = (arr) => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))

export const {
  addItem,
  updateItem,
  removeItem,
  clearCart
} = cartItemsSlice.actions

export default cartItemsSlice.reducer