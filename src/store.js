import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* Initialize stage screen id. */
        stageScreenId: '',

        /* Initialize identity screen id. */
        identityScreenId: ''
    },
    getters: {
        /* Initialize stage screen id. */
        stageScreenId: _state => _state.stageScreenId,

        /* Initialize identity screen id. */
        identityScreenId: _state => _state.identityScreenId
    },
    actions: {
        /* Initialize stage screen id. */
        updateStageScreenId: ({ commit }, _screenId) => commit('updateStageScreenId', _screenId),

        /* Initialize identity screen id. */
        updateIdentityScreenId: ({ commit }, _screenId) => commit('updateIdentityScreenId', _screenId)
    },
    mutations: {
        /* Initialize stage screen id. */
        updateStageScreenId (_state, _screenId) {
            _state.stageScreenId = _screenId
        },

        /* Initialize identity screen id. */
        updateIdentityScreenId (_state, _screenId) {
            _state.identityScreenId = _screenId
        }
    }
})
