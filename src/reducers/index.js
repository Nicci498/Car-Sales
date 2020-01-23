import { BUY_ITEM, REMOVE_FEATURE, UPDATE_TOTAL } from "../actions";

export const initialState ={
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const firstReducer = (state = initialState, action) =>{
    console.log('state', state);
    console.log('action', action)
    switch (action.type) {
        case BUY_ITEM:
        return {
            ...state,
            car: {
              ...state.car,
              features: state.car.features.includes(action.payload) ? [...state.car.features] : [
                ...state.car.features, action.payload
              ]
            }
        }
            case REMOVE_FEATURE:
            return {
              ...state,
                car: {
                  ...state.car,
                  features: state.car.features.filter(c => c.id !== action.payload.id)
                }
            };
        case UPDATE_TOTAL:
            return {
              ...state,
              additionalPrice: state.additionalPrice + action.payload
            };
        default: 
        return state;
    }
};