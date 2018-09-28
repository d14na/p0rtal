'use strict';

/**
 * ZeroApp
 *
 * Framework for allowing simple app development.
 */
const _initApp = (function () {
    const _hasProp = {}.hasOwnProperty
    const _extend = function (_child, _parent) {
        for (let key in _parent) {
            if (_hasProp.call(_parent, key)) _child[key] = _parent[key]
        }

        function _ctor() {
            this.constructor = _child
        }

        _ctor.prototype = _parent.prototype;
        _child.prototype = new _ctor()
        _child.__super__ = _parent.prototype

        return _child
    }

    /* Initialize ZeroApp object (class). */
    const ZeroApp = (function (superClass) {
        _extend(ZeroApp, superClass)

        /* Constructor. */
        function ZeroApp() {
            this.saveData = this.saveData.bind(this)
            this.selectUser = this.selectUser.bind(this)

            return ZeroApp.__super__.constructor.apply(this, arguments)
        }

        /**
         * Open WebSocket
         *
         * When the Zeronet page is loaded a websocket is openend.
         * This can be used to check if the user is logged in.
         */
        ZeroApp.prototype.onOpenWebSocket = async function (_event) {
            /* Initialize the mobile viewport. */
            this.cmd('wrapperSetViewport', 'width=device-width, initial-scale=1.0')

            /* Request server info. */
            const serverInfo = await this.cmd('serverInfo', {})
            // console.info('Server Info', serverInfo)

            /* Initialize client version. */
            const version = serverInfo.version

            /* Initialize client revision. */
            const rev = serverInfo.rev

            /* Initialize TOR status. */
            const tor = {
                enabled: serverInfo.tor_enabled,
                status: serverInfo.tor_status
            }

            /* Initialize user language. */
            const i18n = serverInfo.language

            /* Initialize user platform. */
            const platform = serverInfo.platform

            /* Initialize client plugins. */
            const plugins = serverInfo.plugins

            /* Request site info. */
            const siteInfo = await this.cmd('siteInfo', {})
            // console.info('Site Info', siteInfo)

            /* Initialize # of peers. */
            const numPeers = siteInfo.peers

            /* Set # of peers to UI. */
            $('.numPeers').html(numPeers)

            /* Initialize settings. */
            const settings = siteInfo.settings
            console.log('SETTINGS', settings)

            if (!settings || settings.permissions.indexOf('ADMIN') === -1) {
                App.cmd('wrapperNotification', ['error', 'Oops! You need to enable ADMIN to use this P0rtal..', 9000])
            }
        }

        /**
         * Route
         *
         * Messages received in real-time are managed here.
         * (It can be used to login the user once he selects a certificate.)
         */
        ZeroApp.prototype.route = function (_cmd, _message) {
            console.log('Received incoming routed message', _cmd, _message)

            // if (_cmd === 'setSiteInfo') {
            //     /* Set site info. */
            //     this.siteInfo = _message.params
            //
            //     /* Verify user status. */
            //     if (_message.params.cert_user_id) {
            //         return this._log(`User is logged in as [ ${message.params.cert_user_id} ]`)
            //     } else {
            //         return this._log('User is NOT logged in.')
            //     }
            // }
        }

        /**
         * Select User
         *
         * Displays the certificate selection dialog box to the user.
         *
         * Use it from your html files with an onclick attribute:
         * <a href="#" onclick="return App.selectUser()">Login</a>
         */
        ZeroApp.prototype.selectUser = function () {
            /* Initialize accepted domains. */
            // NOTE ENS = Ethereum Name Service (https://ens.domains/)
            const acceptedDomains = {
                'accepted_domains': [
                    'ethnick.bit', // .ETH on ENS ID Provider
                    'kxoid.bit', // KxoNetwork ID Provider
                    'xyzid.bit', // .XYZ on ENS ID Provider
                    'zeroid.bit' // ZeroNet Core ID Provider
                ]
            }

            /* Request certificate provider from user. */
            App.cmd('certSelect', { acceptedDomains })

            return false
        }

        /**
         * Update User Quota
         *
         * Users have a quota or limit on the data they can post to each site.
         * This method gets the max_size allowed in this site and the current
         * user's data size.
         */
        ZeroApp.prototype.updateUserQuota = function () {
            if (this.siteInfo.cert_user_id) {
                /* Initialize path to the user's data file. */
                const innerPath = 'data/users/' + this.siteInfo.auth_address + '/content.json'

                return this.cmd('fileRules', innerPath, (_rules) => {
                    this._log(`Current / max size [ ${_rules.current_size} / ${_rules.max_size} ]`)
                })
            }
        }

        /**
         * Query Data
         *
         * Zeronet includes an SQLite database you can use to query your
         * application data.
         * NOTE This database is Read-Only.
         */
        ZeroApp.prototype.queryData = function () {
            /*******************************************************************
             Query ALL available user data from a ZeroApp.

             query = ```
                SELECT
                    zeroapp.*, keyvalue.value AS cert_user_id
                FROM
                    zeroapp
                LEFT JOIN
                    json AS data_json USING (json_id)
                LEFT JOIN
                    json AS content_json ON (
                        data_json.directory = content_json.directory AND
                        content_json.file_name = 'content.json'
                    )
                LEFT JOIN
                    keyvalue ON (
                        keyvalue.key = 'cert_user_id' AND
                        keyvalue.json_id = content_json.json_id
                    )
                ORDER BY date_added
             ```
            *******************************************************************/
            const query = 'SELECT * FROM zeroapp'

            return this.cmd('dbQuery', [query], (_data) => {
                this._log(_data)
            })
        }

        /**
         * Save Data
         *
         * JSON files are used to save or update the data in Zeronet.
         */
        ZeroApp.prototype.saveData = function () {
            let innerPath

            // NOTE The user needs to be logged in, in order to
            //      post any data to the zite.
            if (!App.siteInfo.cert_user_id) {
                App.cmd('wrapperNotification', ['info', 'Please, select your account.'])

                return false
            }

            /* Initialize path to the user's data file. */
            innerPath = 'data/users/' + this.siteInfo.auth_address + '/data.json'

            /* Load the current user's data file and push a new element. */
            this.cmd('fileGet', {
                'inner_path': innerPath,
                'required': false
            }, (_data) => {
                let jsonRaw

                if (_data) {
                    // FIXME Add try-catch for parse
                    _data = JSON.parse(_data)
                } else {
                    _data = {
                        'zeroapp': []
                    }
                }

                _data.zeroappp.push({
                    'body': document.getElementById('message').value,
                    'date_added': +(new Date)
                })

                jsonRaw = unescape(encodeURIComponent(JSON.stringify(data, void 0, '\t')))

                /* Write file to disk. */
                // NOTE All data posted by this user will be stored here.
                //      Zeronet will automatically map it into the
                //      SQLite database, so we can query it later.
                return this.cmd('fileWrite', [_innerPath, btoa(jsonRaw)], (_res) => {
                    /* Publish the file so other users can download it. */
                    if (_res === 'ok') {
                        return this.cmd('sitePublish', {
                            'inner_path': _innerPath
                        }, function (_innerRes) {
                            return this._log('Data published successfully!')
                        })
                    } else {
                        return _this.cmd('wrapperNotification', ['error', `Oops! There was an error writing the file [ ${_res}]`])
                    }
                })
            })

            return false
        }

        /* Return the localized ZeroApp object for assignment. */
        return ZeroApp
    })(ZeroApi)

    /* Assign ZeroApp as a new "global" window variable. */
    window.ZeroApp = ZeroApp
}).call(this)

/* Initialize app. */
const App = new ZeroApp()

// app.cmd('wrapperNotification', ['info', 'Are you looking for this? Cause I found it!', 3000])
// app.cmd('wrapperNotification', ['done', 'You\'re all set!', 6000])
// app.cmd('wrapperNotification', ['error', 'Oops! Try again...', 9000])

// app.cmd('wrapperPermissionAdd', ['Merger:ADMIN'])

// app.cmd('wrapperPrompt', ['Enter your private key:', 'password'], (_input) => {
//     app.cmd('wrapperNotification', ['done', `Nice! I see you entered [${_input}]`, 7000])
// })

// app.cmd('certSelect', { 'accepted_domains': ['ethnick.bit', 'kxoid.bit', 'xyzid.bit', 'zeroid.bit'] })

/**
 * JQuery says we are good-to-go.
 * So let's GO!
 */
$(function() {
    // showing 2nd level sub menu while hiding others
    $('.sidebar-nav-link').on('click', function(e) {
        var subMenu = $(this).next()

        $(this).parent().siblings().find('.sidebar-nav-sub').slideUp();
        $('.sub-with-sub ul').slideUp();

        if(subMenu.length) {
            e.preventDefault();
            subMenu.slideToggle();
        }
    })

    // showing 3rd level sub menu while hiding others
    $('.sub-with-sub .nav-sub-link').on('click', function(e) {
        e.preventDefault()
        $(this).parent().siblings().find('ul').slideUp()
        $(this).next().slideDown()
    })

    $('#slimSidebarMenu').on('click', function(e) {
        e.preventDefault()

        if (window.matchMedia('(min-width: 1200px)').matches) {
            $('body').toggleClass('hide-sidebar')
        } else {
            $('body').toggleClass('show-sidebar')
        }
    })

    if ($.fn.perfectScrollbar) {
        $('.slim-sidebar').perfectScrollbar({
            suppressScrollX: true
        })
    }

    $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' })

    /* Load header. */
    App.cmd('fileGet', ['components/header.html'], (_body) => {
        $("#header").html(_body)
    })

    /* Load navbar. */
    App.cmd('fileGet', ['components/navbar.html'], (_body) => {
        $("#navbar").html(_body)
    })

    /* Load footer. */
    App.cmd('fileGet', ['components/footer.html'], (_body) => {
        $("#footer").html(_body)
    })
})
