export const state = () => ({
  theme: "minimal",
  viewFade: false,
})

export const mutations = {
  SET_THEME(state, newTheme) {
    state.theme = newTheme
  },
  SET_VIEWFADE(state, viewFade) {
    state.viewFade = viewFade
  },
}

export const actions = {
  changeTheme({ commit }, theme) {
    commit("SET_THEME", theme)
  },
  fadeThenChange({ commit, dispatch }, theme) {
    commit("SET_VIEWFADE", true)

    setTimeout(() => {
      dispatch("changeTheme", theme)
      commit("SET_VIEWFADE", false)
    }, 200)
  },
}

export const getters = {
  getTheme(state) {
    return state.theme
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
