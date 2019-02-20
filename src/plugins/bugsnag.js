import Vue from 'vue'
import bugsnag from '@bugsnag/js'
import bugsnagVue from '@bugsnag/plugin-vue'

const bugsnagClient = bugsnag('aae4031158a230b90616ff2beca0e031')
bugsnagClient.use(bugsnagVue, Vue)
