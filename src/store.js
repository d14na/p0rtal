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
        account: 0x0
    },
    getters: {
        /* Initialize stage screen id. */
        stageScreenId: _state => _state.stageScreenId,

        /* Initialize identity screen id. */
        identityScreenId: _state => _state.identityScreenId,

        /* Initialize account. */
        account: _state => _state.account
    },
    actions: {
        /* Initialize stage screen id. */
        updateStageScreenId: ({ commit }, _screenId) => commit('updateStageScreenId', _screenId),

        /* Initialize identity screen id. */
        updateIdentityScreenId: ({ commit }, _screenId) => commit('updateIdentityScreenId', _screenId),

        /* Initialize account. */
        account: ({ commit }, _account) => commit('updateAccount', _account)
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
        }
    }
})
