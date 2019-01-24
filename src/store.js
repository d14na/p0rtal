import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* Initialize identity screen id. */
        identityScreenId: ''
    },
    getters: {
        /* Initialize identity screen id. */
        identityScreenId: _state => _state.identityScreenId
    },
    actions: {
        /* Initialize identity screen id. */
        updateIdentityScreenId: ({ commit }, _screenId) => commit('updateIdentityScreenId', _screenId)
    },
    mutations: {
        /* Initialize identity screen id. */
        updateIdentityScreenId (_state, _screenId) {
            _state.identityScreenId = _screenId
        }
    }
})
