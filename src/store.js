import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* Initialize stage screen id. */
        stageScreenId: '',

        /* Initialize identity screen id. */
        identityScreenId: '',

        /* Initialize account (empty Ethereum address). */
        account: 0x0,

        /* Initialize email address. */
        email: ''
    },
    getters: {
        /* Initialize stage screen id. */
        stageScreenId: _state => _state.stageScreenId,

        /* Initialize identity screen id. */
        identityScreenId: _state => _state.identityScreenId,

        /* Initialize account. */
        account: _state => _state.account,

        /* Initialize email. */
        email: _state => _state.email
    },
    actions: {
        /* Request stage screen id update. */
        updateStageScreenId: ({ commit }, _screenId) => commit('updateStageScreenId', _screenId),

        /* Request identity screen id update. */
        updateIdentityScreenId: ({ commit }, _screenId) => commit('updateIdentityScreenId', _screenId),

        /* Request account update. */
        updateAccount: ({ commit }, _account) => commit('updateAccount', _account),

        /* Request email update. */
        updateEmail: ({ commit }, _email) => commit('updateEmail', _email)
    },
    mutations: {
        /* Update stage screen id. */
        updateStageScreenId (_state, _screenId) {
            _state.stageScreenId = _screenId
        },

        /* Update identity screen id. */
        updateIdentityScreenId (_state, _screenId) {
            _state.identityScreenId = _screenId
        },

        /* Update account. */
        updateAccount (_state, _account) {
            _state.account = _account
        },

        /* Update email. */
        updateEmail (_state, _email) {
            _state.email = _email
        }
    }
})
