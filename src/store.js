import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /***********************************************************************
         * CONSTANTS
         *
         * Provide convenient, global access to application values.
         **********************************************************************/

        /* Initialize ANAME location of ZeroCache. */
        anameZeroCache: '0x0000000000000000000000000000000000000000',

        /***********************************************************************
         * APPLICATION
         *
         * Used to manage CORE application functions.
         **********************************************************************/

        /* Initialize stage screen id. */
        stageScreenId: '',

        /* Initialize identity screen id. */
        identityScreenId: '',

        /***********************************************************************
         * USER / PROFILE
         *
         * Used to personalize the application.
         **********************************************************************/

        /* Initialize address (empty Ethereum address). */
        address: '0x0000000000000000000000000000000000000000',

        /* Initialize account. */
        account: {},

        /* Initialize email address. */
        email: '',

        /* Initialize theme (eg light or dark). */
        // TODO NOT YET IMPLEMENTED
        theme: '',

        /***********************************************************************
         * ZEROCACHE
         *
         * Financial services.
         **********************************************************************/

        /* Initialize (Cache) exchange source. */
        exchangeSource: '',

        /* Initialize (Cache) exchange target. */
        exchangeTarget: '0GOLD'
    },
    getters: {
        /* Initialize ANAME location of ZeroCache. */
        anameZeroCache: _state => _state.anameZeroCache,

        /* Initialize stage screen id. */
        stageScreenId: _state => _state.stageScreenId,

        /* Initialize identity screen id. */
        identityScreenId: _state => _state.identityScreenId,

        /* Initialize address. */
        address: _state => _state.address,

        /* Initialize account. */
        account: _state => _state.account,

        /* Initialize email. */
        email: _state => _state.email,

        /* Initialize (Cache) exchange source. */
        exchangeSource: _state => _state.exchangeSource,

        /* Initialize (Cache) exchange target. */
        exchangeTarget: _state => _state.exchangeTarget
    },
    actions: {
        /* Request zero cache address update. */
        updateAnameZeroCache: ({ commit }, _zeroCache) => commit('UPDATE_ANAME_ZEROCACHE', _zeroCache),

        /* Request stage screen id update. */
        updateStageScreenId: ({ commit }, _screenId) => commit('UPDATE_STAGE_SCREEN_ID', _screenId),

        /* Request identity screen id update. */
        updateIdentityScreenId: ({ commit }, _screenId) => commit('UPDATE_IDENTITY_SCREEN_ID', _screenId),

        /* Request address update. */
        updateAddress: ({ commit }, _address) => commit('UPDATE_ADDRESS', _address),

        /* Request account update. */
        updateAccount: ({ commit }, _account) => commit('UPDATE_ACCOUNT', _account),

        /* Request email update. */
        updateEmail: ({ commit }, _email) => commit('UPDATE_EMAIL', _email),

        /* Request (Cache) exchange source update. */
        updateExchangeSource: ({ commit }, _exchangeSource) => commit('UPDATE_EXCHANGE_SOURCE', _exchangeSource),

        /* Request (Cache) exchange target update. */
        updateExchangeTarget: ({ commit }, _exchangeTarget) => commit('UPDATE_EXCHANGE_TARGET', _exchangeTarget)
    },
    mutations: {
        /* Update stage screen id. */
        UPDATE_ANAME_ZEROCACHE (_state, _zeroCache) {
            _state.anameZeroCache = _zeroCache
        },

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
        },

        /* Update (Cache) exchange source. */
        UPDATE_EXCHANGE_SOURCE (_state, _exchangeSource) {
            _state.exchangeSource = _exchangeSource
        },

        /* Update (Cache) exchange target. */
        UPDATE_EXCHANGE_TARGET (_state, _exchangeTarget) {
            _state.exchangeTarget = _exchangeTarget
        }
    }
})
