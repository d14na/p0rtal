<template>
    <div class="screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item"><a href="">Settings</a></li>
                    <li class="breadcrumb-item active" aria-current="page">General</li>
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
              </div><!-- tx-center -->

              <p class="contact-item">
                <span>Phone:</span>
                <span>+1 012 3456 789</span>
              </p><!-- contact-item -->
              <p class="contact-item">
                <span>Email:</span>
                <a href="javascript://">person1@domain.com</a>
              </p><!-- contact-item -->
              <p class="contact-item">
                <span>URL:</span>
                <a href="javascript://">http://thmpxls.me</a>
              </p><!-- contact-item -->
            </div><!-- card -->

        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        //
    }),
    methods: {
        close() {
            // _0vueIdentity.deactivate()
        },
        loadProfile() {

        }
    },
    mounted: () => {
        // console.log('Profile is mounted.')
    }
}
</script>

<style scoped>

</style>
