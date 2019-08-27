<template>
    <div class="dropdown dropdown-a">
        <a href="javascript://" class="header-notification" data-toggle="dropdown">
            <font-awesome-icon icon="broadcast-tower" />
        </a>

        <div class="dropdown-menu">
            <div class="dropdown-menu-header">
                <h6 class="dropdown-menu-title">Activity Monitor</h6>
                <div>
                    <a href="javascript://" @click="openActivities">Show All</a>
                    <a href="javascript://" @click="openSettings">Settings</a>
                </div>
            </div>

            <div class="dropdown-activity-list">
                <div class="activity-label tx-16 text-center">
                    <strong class="text-danger tx-16"><span class="slashed-zero">0</span>PEN is offline!</strong>
                </div>

                <div class="activity-item">
                    <div class="row no-gutters">
                        <div class="col-2 tx-right">10:15am</div>
                        <div class="col-2 tx-center"><span class="square-10 bg-success"></span></div>
                        <div class="col-8 ellipsis">BigBuckBunny.mp5 downloaded <strong>successfully</strong></div>
                    </div>
                </div>

                <div class="activity-item">
                    <div class="row no-gutters">
                        <div class="col-2 tx-right">9:48am</div>
                        <div class="col-2 tx-center"><span class="square-10 bg-danger"></span></div>
                        <div class="col-8">Download <strong>failed</strong></div>
                    </div>
                </div>

                <div class="activity-item">
                    <div class="row no-gutters">
                        <div class="col-2 tx-right">3:19pm</div>
                        <div class="col-2 tx-center"><span class="square-10 bg-warning"></span></div>
                        <div class="col-8">Meeting_backup_(rev3).zip <strong>saving</strong>...</div>
                    </div>
                </div>

                <div class="activity-item">
                    <div class="row no-gutters">
                        <div class="col-2 tx-right">3:21am</div>
                        <div class="col-2 tx-center"><span class="square-10 bg-success"></span></div>
                        <div class="col-8">2 <strong>Missed</strong> calls</div>
                    </div>
                </div>
            </div>

            <div class="dropdown-list-footer">
                <font-awesome-icon icon="chevron-down" /> &nbsp; scroll down 12 more &nbsp; <font-awesome-icon icon="chevron-down" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        //
    }),
    methods: {
        openActivities() {
            _0vueIdentity.activate()
        },
        openSettings() {
            console.log('open activity settings')

            App.cmd('userPublickey', {}, (_results) => {
                console.log('Public key', _results)

                const decoded = Buffer.from(_results, 'base64')
                console.log('Decoded', decoded.toString('hex'))
            })

            this.authAsZeroID(console.log.bind(console))

            this.addQuestion('What\'s nofish\'s name?', ['nofish', 'Tomas', 'Jack'], console.log.bind(console))
        },
        readFile (file, callback) {
            App.cmd('fileGet', [file, false], callback);
        },
        writeFile (file, content, callback) {
            App.cmd('fileWrite', [file, this.base64Encode(content)], callback);
        },
        base64Encode (content) {
            content = encodeURIComponent(content); // Split to bytes in % notation
            content = unescape(content); // Join % notation as bytes (not as chars)

            return btoa(content);
        },
        authAsZeroID (callback) {
            App.cmd('siteInfo', [], function(siteInfo) {
                // If logged in, return object with username and public key (address)
                if (siteInfo.cert_user_id) {
                    const user = siteInfo.cert_user_id
                    const address = siteInfo.auth_address

                    return callback({ user, address })
                }

                // Open authorization window and allow zeroid.bit
                App.cmd('certSelect', {
                    accepted_domains: ['kaffie.bit', 'kxoid.bit', 'nametag.bit', 'zeroid.bit']
                }, function() {
                    App.cmd('siteInfo', [], function(siteInfo) {
                        // If logged in, return object with username and public key (address),
                        // else return false
                        if (siteInfo.cert_user_id) {
                            const user = siteInfo.cert_user_id
                            const address = siteInfo.auth_address

                            callback({ user, address })
                        } else {
                            callback(false)
                        }
                    })
                })
            })
        },
        addQuestion (question, answers, callback) {
            this.authAsZeroID ((user) => {
                // User rejected to authorizate
                if(!user) {
                    return callback(false)
                }

                this.readFile('data/users/' + user.address + '/data.json', (content) => {
                    content = content || ''

                    // Parse JSON
                    try {
                        content = JSON.parse(content)
                    } catch(e) {
                        content = {
                            questions: [],
                            answers: {},
                            next_question_id: 0
                        }
                    }

                    var id = content.next_question_id++

                    content.questions.push({
                        id,
                        question,
                        answers,
                        date_added: Math.floor(Date.now() / 1000)
                    })

                    /* Format the JSON (for file display). */
                    content = JSON.stringify(content, null, 4)

                    this.writeFile('data/users/' + user.address + '/data.json', content, () => {
                        App.cmd('sitePublish', {
                            inner_path: 'data/users/' + user.address + '/content.json'
                        }, function() {
                            callback(id)
                        })
                    })
                })
            })
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slashed-zero {
    font-family: monaco, Consolas, "Lucida Console", monospace;
}

.subMenu {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.7em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: right;
    background: rgba(30, 30, 30, 0.9);
    padding: 2px 7px 2px 0;
    border-bottom: 1px solid #9993;
}
.subMenu a {
    color: rgba(210, 210, 210, 0.9);
}
.subMenu a:hover {
    color: rgba(255, 150, 150, 0.9);
}
</style>
