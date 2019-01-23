<template>
    <div id="modalAdminPermission" class="modal fade">
        <div class="modal-dialog modal-dialog-vertical-center" role="document">
            <div class="modal-content bd-0 tx-14">
                <div class="modal-header">
                    <h6 class="tx-18 mg-b-0 tx-uppercase tx-bold text-danger">
                        ADMIN Permission Is Required
                    </h6>
                </div>

                <div class="modal-body pd-25">
                    <h5 class="lh-3 mg-b-20 tx-inverse hover-primary">Oops! We Forgot One Thing...</h5>

                    <p>
                        When connecting from a 3rd-party client <em>(eg. ZeroNet Core or Zeronet Browser),</em> <strong class="text-primary">p0rtal</strong> requires the <strong class="text-danger">ADMIN</strong> permission to activate all of its <strong class="text-primary">ZERONET AWESOME-NESS.</strong>
                    </p>

                    <p class="mt-2">
                        To continue, click the <strong class="text-primary">Make Request</strong> button below.
                        When the confirmation window appears, simply click <strong class="text-danger">GRANT</strong> and you're all set!
                    </p>

                    <p class="mt-3 text-center">
                        Then just sit back &amp; relax while we <strong class="text-success">WORK OUR MAGIC!</strong>
                        <br /><i class="mt-3 text-success fa fa-magic fa-4x"></i>
                    </p>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btnAdminRequest">Make Request</button>
                    <a href="https://web.0net.io" target="_top" class="btn btn-warning btnLaunch0PEN">Launch via 0PEN</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
