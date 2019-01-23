import Vue from 'vue'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'

Vue.use(VueI18Next)

const locales = {
    en: {
        hello: 'Hello',
        helloWithNickname: 'Hello {{nickname}}'
    },
    ru: {
        hello: 'Привет',
        helloWithNickname: 'Привет {{nickname}}'
    },
    zh_CN: {
        hello: '你好',
        helloWithNickname: '你好{{nickname}}'
    }
}

i18next.init({
    lng: 'zh_CN',
    fallbackLng: 'en',
    resources: {
        en: { translation: locales.en },
        ru: { translation: locales.ru },
        zh_CN: { translation: locales.zh_CN }
    }
})

const i18n = new VueI18Next(i18next)

export default i18n
