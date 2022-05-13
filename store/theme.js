export const state = () => ({
  colorMode: "light",
  viewFade: false,
})

export const mutations = {
  SET_VIEWFADE(state, viewFade) {
    state.viewFade = viewFade
  },
  SET_COLOR_MODE(state, colorMode) {
    state.colorMode = colorMode
  },
}

export const actions = {
  changeColorMode({ commit }, colorMode) {
    commit("SET_COLOR_MODE", colorMode)
  },
  setFade({ commit }, boolean) {
    commit("SET_VIEWFADE", boolean)
  },
}

export const getters = {
  getColorMode(state) {
    return state.colorMode
  },
}
