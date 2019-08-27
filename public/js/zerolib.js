/*******************************************************************************
 *
 * Copyright (c) 2018 Decentralization Authority MDAO.
 * Released under the MIT License.
 *
 * ZeroApi Class
 *
 * Primary framework necessary to manage message communications between
 * the sandboxed (iFrame) web document and the Zeronet client.
 * Derived from the original ZeroFrame.js (as included in ZeroNet core).
 *
 * In development are 3 stubs for supporting decentralized networks:
 *     1. BitMessage
 *     2. IFPS
 *     3. Ethereum Web3
 *
 * Version 18.9.28
 *
 * Web   : https://d14na.org
 * Email : support@d14na.org
 */


/* Initialize the ZeroApi Class. */
class ZeroApi {
    /* Constructor. */
    constructor(_url) {
        /* Bind private (class) functions to `this`. */
        this._init = this._init.bind(this)
        this._connect = this._connect.bind(this)
        this._send = this._send.bind(this)
        this._response = this._response.bind(this)

        /* Bind public (class) functions to `this`. */
        this.cmd = this.cmd.bind(this)
        this.onEvent = this.onEvent.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onMessage = this.onMessage.bind(this)

        /* Initialize data/object holders. */
        this.url = _url
        this.pendingCbs = {}
        this.next_message_id = 0

        /* Initialize the wrapper nonce (from current location URL). */
        this.wrapper_nonce = document.location.href.replace(/.*wrapper_nonce=([A-Za-z0-9]+).*/, '$1')

        /* Initiate parent connection. */
        this._connect()

        /* Complete initialization process. */
        this._init()
    }

    /**
     * Add Log
     *
     * Adds a new log entry to the debugging console.
     */
    _log() {
        let args
        args = 1 <= arguments.length ? [].slice.call(arguments, 0) : []

        return console.log.apply(console, ['[ZeroApi]'].concat([].slice.call(args)))
    }

    /* Initialize and retrieve the main object (class). */
    _init() {
        return this
    }

    /* Initialize the (communications) connection to the parent window. */
    _connect() {
        /* Set the target to the window's parent. */
        this.target = window.parent

        /* Initialize an event listener for incoming messages. */
        window.addEventListener('message', this.onMessage, false)

        /* Send ready command. */
        return this.cmd('innerReady')
    }

    /**
     * Send Message
     *
     * Message handler.
     */
    _send(_message, _callback) {
        if (_callback === null) {
            _callback = null
        }

        _message.wrapper_nonce = this.wrapper_nonce
        _message.id = this.next_message_id

        /* Increment message id. */
        this.next_message_id += 1

        /* Post message to target (parent window). */
        this.target.postMessage(_message, '*')

        if (_callback) {
            /* Save this callback to pending callbacks holder. */
            return this.pendingCbs[_message.id] = _callback
        }
    }

    /**
     * Response
     *
     * Outgoing message handler.
     */
    _response(to, result) {
        /* Initialize command. */
        const cmd = 'response'

        return this._send({ cmd, to, result })
    }

    /**
     * Execute Command (Make Request)
     *
     * Send a command request to the client for processing.
     */
    cmd(cmd, params, _cb) {
        if (params === null) {
            params = {}
        }

        /* Send with (promise) callback. */
        if (typeof _cb === 'undefined') {
            return new Promise((_resolve, _reject) => {
                this._send({ cmd, params }, (_res) => {
                    if (_res && _res.error) {
                        _reject(_res.error)
                    } else {
                        _resolve(_res)
                    }
                })
            })
        }

        /* Send with (legacy) callback. */
        // NOTE Callbacks have been deprecated.
        //      Please migrate all code to (async/await) promises.
        return this._send({ cmd, params }, _cb)
    }

    /**
     * Event Received
     *
     * Event messages received in real-time are managed here.
     */
    onEvent(_event, _message) {
        this._log(`Unknown event [ ${_event} ]`, _message)
    }

    /**
     * WebSocket Connection Opened
     */
    onOpen() {
        this._log('WebSocket connected successfully.')

        /* Initialize the mobile viewport. */
        this.cmd('wrapperSetViewport', 'width=device-width, initial-scale=1.0')
        this._log('Viewport initialized (for mobile support).')
    }

    /**
     * WebSocket Connection Closed
     */
    onClose() {
        this._log('WebSocket has been disconnected.')
    }

    /**
     * On Message
     *
     * Handler for messages received from parent window.
     */
    onMessage(e) {
        /* Initialize message. */
        const message = e.data

        /* Initialize command. */
        const cmd = message.cmd

        /* Handle command options. */
        if (cmd === 'response') {
            if (typeof this.pendingCbs[message.to] !== 'undefined') {
                return this.pendingCbs[message.to](message.result)
            } else {
                return this._log(`WebSocket callback not found`, message, this.pendingCbs)
            }
        } else if (cmd === 'wrapperReady') {
            return this.cmd('innerReady')
        } else if (cmd === 'ping') {
            return this._response(message.id, 'pong')
        } else if (cmd === 'wrapperOpenedWebsocket') {
            return this.onOpen()
        } else if (cmd === 'wrapperClosedWebsocket') {
            return this.onClose()
        } else {
            return this.onEvent(cmd, message)
        }
    }

    /**
     * BitMessage Stub
     */
    bm() {
        ping = function () {
            return new Promise((_resolve, _reject) => {
                _resolve('pong')
            })
        }
    }

    /**
     * IPFS Stub
     */
    ipfs() {
        ping = function () {
            return new Promise((_resolve, _reject) => {
                _resolve('pong')
            })
        }
    }

    /**
     * Ethereum Web3 Stub
     */
    web3() {
        ping = function () {
            return new Promise((_resolve, _reject) => {
                _resolve('pong')
            })
        }
    }
}
