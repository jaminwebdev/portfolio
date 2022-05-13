export const state = () => ({
  theme: "minimal",
  colorMode: "light",
  viewFade: false,
})

export const mutations = {
  SET_THEME(state, newTheme) {
    state.theme = newTheme
  },
  SET_VIEWFADE(state, viewFade) {
    state.viewFade = viewFade
  },
  SET_COLOR_MODE(state, colorMode) {
    state.colorMode = colorMode
  },
}

export const actions = {
  changeTheme({ commit }, theme) {
    commit("SET_THEME", theme)
  },
  changeColorMode({ commit }, colorMode) {
    commit("SET_COLOR_MODE", colorMode)
  },
  setFade({ commit }, boolean) {
    commit("SET_VIEWFADE", boolean)
  },
}

export const getters = {
  getTheme(state) {
    return state.theme
  },
  getColorMode(state) {
    return state.colorMode
  },
  getThemeBorderRadius(state) {
    if (state.theme === "default") {
      return "0"
    } else {
      return "1rem"
    }
  },
  getThemeCards(state) {
    // default, roundedBg, rounded,
    let cardType = "slanted"

    switch (state.theme) {
      case "slanted":
        cardType = "slanted"
        break
      case "rounded":
        cardType = "roundedBg"
        break
      case "minimal":
        cardType = "rounded"
        break
      default:
        cardType = "slanted"
    }

    return cardType
  },
  getThemeStackCards(state) {
    // bordered, bgVector
    let cardType = "bordered"

    if (state.theme === "minimal") {
      cardType = "bgVector"
    }

    return cardType
  },
}
