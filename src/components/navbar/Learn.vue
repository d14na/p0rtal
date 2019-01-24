<template>
    <li class="nav-item with-sub mega-dropdown">
        <a class="nav-link" href="javascript://">
            <font-awesome-icon icon="globe" class="icon" />
            <span><strong class="slashed-zero">0</strong>net 101</span>
        </a>
        <div class="sub-item">
            <div class="row">
                <div class="col-lg">
                    <label class="section-label">
                        <font-awesome-icon icon="hand-peace" class="mg-r-3" />
                        Welcome to the Zer<span class="slashed-zero">0</span>net
                    </label>
                    <p class="text-left">
                        The Zeronet delivers you greater information freedom, identity protection and data privacy than the Internet, without the creepy funk of the Darkweb.
                    </p>

                    <a href="/1GUiDEr5E5XaFLBJBr78UTTZQgtC99Z8oa" class="btn btn-outline-info btn-lg">
                        <font-awesome-icon icon="book" class="mg-r-10" />
                        <span class="slashed-zero">0</span>net User Guide
                    </a>
                </div>

                <div class="col-lg mg-t-30 mg-lg-t-0">
                    <label class="section-label">
                        <font-awesome-icon icon="network-wired" class="mg-r-3" />
                        360&deg; Network Status
                    </label>

                    <div>
                        <p class="text-center mt-4">
                            <font-awesome-icon icon="spinner" size="3x" pulse />
                        </p>
                        <div class="mt-3">
                            loading, please wait...
                        </div>
                    </div>
                </div>

                <div class="col-lg mg-t-30 mg-lg-t-0">
                    <label class="section-label"><i class="fa fa-cogs mg-r-3"></i> p<span class="slashed-zero">0</span>rtal Helpers</label>
                    <ul>
                        <li>
                            <router-link to="/events">
                                <font-awesome-icon icon="calendar-alt" class="mg-r-5" />
                                Event Calendar
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/file-manager">
                                <font-awesome-icon icon="save" class="mg-r-5" />
                                File Manager
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="col-lg mg-t-30 mg-lg-t-0">
                    <label class="section-label">
                        <font-awesome-icon icon="certificate" class="mg-r-3" /> Features &amp; Services
                    </label>

                    <ul>
                        <li><a href="/zeronetexplorer.bit"><font-awesome-icon icon="rocket" class="mg-r-5" /> Zeronet Explorer</a></li>
                        <li><a href="/zerofilters.bit"><font-awesome-icon icon="filter" class="mg-r-5" /> ZeroFilters</a></li>
                        <li><a href="/zitetags.bit"><font-awesome-icon icon="hashtag" class="mg-r-5" /> Zitetags</a></li>
                        <li><a href="/zerovanity.bit"><font-awesome-icon icon="person-booth" class="mg-r-5" /> ZeroVanity</a></li>
                        <li><a href="/zerocapital.bit"><font-awesome-icon icon="hand-holding-usd" class="mg-r-5" /> ZeroCapital</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    //
}
</script>

<style scoped>
</style>
