<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <!--  -->
                </ol>

                <h6 class="slim-pagetitle">Settings</h6>
            </div>

            <div class="card-contact mg-b-20">
              <div class="tx-center">
                <a href="javascript://"><img src="@/assets/img/img12.jpg" class="card-img" alt=""></a>
                <h5 class="mg-t-10 mg-b-5"><a href="javascript://" class="contact-name">Maricel Villalon</a></h5>
                <p>Product Director</p>
                <p class="contact-social">
                  <a href="javascript://"><i class="fa fa-facebook"></i></a>
                  <a href="javascript://"><i class="fa fa-twitter"></i></a>
                  <a href="javascript://"><i class="fa fa-google"></i></a>
                </p>
              </div>

              <p class="contact-item">
                <span>Phone:</span>
                <span>+1 012 3456 789</span>
              </p>
              <p class="contact-item">
                <span>Email:</span>
                <a href="javascript://">person1@domain.com</a>
              </p>
              <p class="contact-item">
                <span>URL:</span>
                <a href="javascript://">http://thmpxls.me</a>
              </p>
            </div>

            <div class="card">
              <div class="card-header">
                Featured
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>

        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

export default {
    data: () => ({
        //
    }),
    computed: mapGetters([
        'identityScreenId'
    ]),
    methods: {
        ...mapActions([
            'updateIdentityScreenId'
        ]),
        gotoSettings() {
            this.updateIdentityScreenId('')
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>

</style>
