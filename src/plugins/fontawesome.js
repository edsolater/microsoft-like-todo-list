import Vue from 'vue'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"



import {
  faAngleDown,
  faAngleUp,
  faCheckCircle,
  faCircle,
  faClipboardCheck,
  faTrashAlt,
  faEdit,
  faEllipsisH,
  faLightbulb,
  faList,
  faPlus,
  faSearch,
  faSortAmountDown,
  faStar,
  faSun,
  faTimes,
  faUpload,
  faUsers,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons"



library.add([
  faAngleDown,
  faAngleUp,
  faCheckCircle,
  faCircle,
  faClipboardCheck,
  faTrashAlt,
  faEdit,
  faEllipsisH,
  faLightbulb,
  faList,
  faPlus,
  faSearch,
  faSortAmountDown,
  faStar,
  faSun,
  faTimes,
  faUpload,
  faUsers,
  faAngleLeft
])



Vue.component('font-awesome-icon', FontAwesomeIcon)
