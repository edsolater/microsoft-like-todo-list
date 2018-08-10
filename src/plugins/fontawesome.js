import Vue from 'vue'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"



import {
  faSearch,
  faList,
  faSun,
  faStar,
  faClipboardCheck,
  faAngleDown,
  faAngleUp,
  faTimes,
  faCheckCircle,
  faCircle,
  faPlus,
  faEllipsisH,
  faLightbulb,
  faUsers,
  faSortAmountDown
} from "@fortawesome/free-solid-svg-icons"



library.add([
  faSearch,
  faList,
  faSun,
  faStar,
  faClipboardCheck,
  faAngleDown,
  faAngleUp,
  faTimes,
  faCheckCircle,
  faCircle,
  faPlus,
  faEllipsisH,
  faLightbulb,
  faUsers,
  faSortAmountDown
])



Vue.component('font-awesome-icon', FontAwesomeIcon)
