import constants from "./constants"

export const isBrowser = typeof window !== "undefined"

type APPS= "users" | "auth"

export function set(key: string, value: string) {
    if (isBrowser) {
      try {
        window.localStorage.setItem(key, value)
      } catch {
        console.warn("Error reading from local storage")
      }
    }
}

export function get(key: string) {
    if (!isBrowser) {
        return null
    }

    try {
        const item = window.localStorage.getItem(key)
        return item
    } catch {
        return null
    }
}


class LocalStorage {
    static storeCurrentUser(user) {
      set(constants.STORAGE_KEY.USER, JSON.stringify(user))
    }
  
    static getCurrentUser() {
      const _user = get(constants.STORAGE_KEY.USER)
      try {
        const user = JSON.parse(_user as string)
        return user
      } catch {
        return null
      }
    }
  
    static storeAccessToken(token: string) {
      set(constants.STORAGE_KEY.ACCESS_TOKEN, token)
    }
  
    static getAccessToken() {
      const token = get(constants.STORAGE_KEY.ACCESS_TOKEN)
  
      return token !== null ? token : null
    }
  
    static removeCurrentUser() {
      localStorage.removeItem(constants.STORAGE_KEY.USER)
      localStorage.removeItem(constants.STORAGE_KEY.ACCESS_TOKEN)
      localStorage.removeItem(constants.STORAGE_KEY.REFRESH_TOKEN)
    }
  
    static storeApp(app: APPS) {
      set(constants.STORAGE_KEY.APP, app)
    }
  
    static getApp() {
      const app = get(constants.STORAGE_KEY.APP)
  
      return app ? app : "auth"
    }
  
    static storeAppLanguage(lang: string) {
      set(constants.STORAGE_KEY.APP_LANGUAGE, lang)
    }

    static getAppLanguage() {
      const lang = get(constants.STORAGE_KEY.APP_LANGUAGE)
  
      return lang ? lang : "en"
    }
  
    static storeAppTheme(theme: string) {
      set(constants.STORAGE_KEY.APP_THEME, theme)
    }
  
    static getAppTheme() {
      const theme = get(constants.STORAGE_KEY.APP_THEME)
  
      return theme ? theme : "light"
    }
  
    static storeRefreshToken(token: string) {
      set(constants.STORAGE_KEY.REFRESH_TOKEN, token)
    }
  
    static getRefreshToken() {
      const token = get(constants.STORAGE_KEY.REFRESH_TOKEN)
  
      return token !== null ? token : null
    }
}

export default LocalStorage