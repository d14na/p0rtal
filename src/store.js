import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* Initialize stage screen id. */
        stageScreenId: '',

        /* Initialize identity screen id. */
        identityScreenId: '',

        /* Initialize address (empty Ethereum address). */
        address: 0x0,

        /* Initialize account. */
        account: {},

        /* Initialize email address. */
        email: ''
    },
    getters: {
        /* Initialize stage screen id. */
        stageScreenId: _state => _state.stageScreenId,

        /* Initialize identity screen id. */
        identityScreenId: _state => _state.identityScreenId,

        /* Initialize address. */
        address: _state => _state.address,

        /* Initialize account. */
        account: _state => _state.account,

        /* Initialize email. */
        email: _state => _state.email
    },
    actions: {
        /* Request stage screen id update. */
        updateStageScreenId: ({ commit }, _screenId) => commit('UPDATE_STAGE_SCREEN_ID', _screenId),

        /* Request identity screen id update. */
        updateIdentityScreenId: ({ commit }, _screenId) => commit('UPDATE_IDENTITY_SCREEN_ID', _screenId),

        /* Request address update. */
        updateAddress: ({ commit }, _address) => commit('UPDATE_ADDRESS', _address),

        /* Request account update. */
        updateAccount: ({ commit }, _account) => commit('UPDATE_ACCOUNT', _account),

        /* Request email update. */
        updateEmail: ({ commit }, _email) => commit('UPDATE_EMAIL', _email)
    },
    mutations: {
        /* Update stage screen id. */
        UPDATE_STAGE_SCREEN_ID (_state, _screenId) {
            _state.stageScreenId = _screenId
        },

        /* Update identity screen id. */
        UPDATE_IDENTITY_SCREEN_ID (_state, _screenId) {
            _state.identityScreenId = _screenId
        },

        /* Update address. */
        UPDATE_ADDRESS (_state, _address) {
            _state.address = _address
        },

        /* Update account. */
        UPDATE_ACCOUNT (_state, _account) {
            _state.account = _account
        },

        /* Update email. */
        UPDATE_EMAIL (_state, _email) {
            _state.email = _email
        }
    }
})
