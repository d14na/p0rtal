import Vue from 'vue'
import bugsnag from '@bugsnag/js'
import bugsnagVue from '@bugsnag/plugin-vue'

const bugsnagClient = bugsnag('c5cd15df6784964d00f979d372c7b5de')
bugsnagClient.use(bugsnagVue, Vue)
