<template>
    <div class="faq">
        <h3>Namtetag Authentication</h3>

        <div class="list-group mt-3">
            <div class="list-group-item pd-y-20">
                <div class="media">
                    <div class="d-flex mg-r-10 wd-50">
                        <font-awesome-icon icon="user-secret" class="text-primary" size="3x" />
                    </div>

                    <div class="media-body">
                        <h6 class="tx-inverse">Enter Authentication</h6>
                        <p class="mg-b-0">
                            User enters email + password
                        </p>
                    </div>
                </div>
            </div>

            <div class="list-group-item pd-y-20">
                <div class="media">
                    <div class="d-flex mg-r-10 wd-50">
                        <font-awesome-icon icon="wallet" class="text-primary" size="3x" />
                    </div>

                    <div class="media-body">
                        <h6 class="tx-inverse">Generate New/Existing Wallet</h6>
                        <p class="mg-b-0">
                            An encrypted wallet is generated and 1/3 of its private key is saved to the LocalStorage of the web browser.
                        </p>
                    </div>
                </div>
            </div>

            <div class="list-group-item pd-y-20">
                <div class="media">
                    <div class="d-flex mg-r-10 wd-50">
                        <font-awesome-icon icon="inbox" class="text-primary" size="3x" />
                    </div>

                    <div class="media-body">
                        <h6 class="tx-inverse">Email Private Key</h6>
                        <p class="mg-b-0">
                            User receives an email with another 1/3 of their private key; along with a signin link.
                        </p>
                    </div>
                </div>
            </div>

            <div class="list-group-item pd-y-20">
                <div class="media">
                    <div class="d-flex mg-r-10 wd-50">
                        <font-awesome-icon icon="sign-in-alt" class="text-primary" size="3x" />
                    </div>

                    <div class="media-body">
                        <h6 class="tx-inverse">Secure Sign In</h6>
                        <p class="mg-b-0">
                            After clicking the link, the user is authenticated by combining the email key with their browser key.
                        </p>
                    </div>
                </div>
            </div>

            <div class="list-group-item pd-y-20">
                <div class="media">
                    <div class="d-flex mg-r-10 wd-50">
                        <font-awesome-icon icon="sign-out-alt" class="text-primary" size="3x" />
                    </div>

                    <div class="media-body">
                        <h6 class="tx-inverse">Sign Out</h6>
                        <p class="mg-b-0">
                            To SECURELY signout, a user will have to remove the 1/3 key from their web browser, which will require them to repeat from step 1 again.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <p class="mt-3">
            * Please Note: After closing the web browser, your session is ended, and you will need to click the sign in link from your email again.
        </p>

        <p>
            ** Also Note: 1/3 of your private key is stored in D14na's Couch (cloud database).
            This is a BACKUP key, in the event you have forgotten your password, but still HAVE AT LEAST ONE OTHER KEY (in your browser, or email).
            This key can be delivered to the registered user via email or sms at any time.
        </p>
    </div>
</template>

<script>
/* Export. */
export default {
    data: () => ({
        //
    }),
    methods: {
        //
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>

</style>
