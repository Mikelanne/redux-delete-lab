export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    console.log(action)
    const band = {
      id: Math.random(),
      name: action.name
    }

      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
    (console.log(action))
      return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
