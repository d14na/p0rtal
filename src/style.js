/* Import Vue. */
import Vue from 'vue'

/* Import main stylesheet. */
import '@/css/p0rtal.css'

/* Import FontAwesome. */
import { library } from '@fortawesome/fontawesome-svg-core'

/* Import FontAwesome for Vue. */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Import individual font files. */
// import {
//     faBell,
//     faBolt,
//     faBookmark,
//     faChevronDown,
//     faCoffee,
//     faHeartbeat,
//     faUser,
//     faWrench,
// } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* Add individual application fonts. */
// library.add(
//     faBell,
//     faBolt,
//     faBookmark,
//     faChevronDown,
//     faCoffee,
//     faHeartbeat,
//     faUser,
//     faWrench
// )
// library.add(fab, fas)
library.add(fab, fas)

/* Load Vue component. */
Vue.component('font-awesome-icon', FontAwesomeIcon)
