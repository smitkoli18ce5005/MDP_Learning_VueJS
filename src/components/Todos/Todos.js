import './Todos.css'
import TodosItem from '../TodosItem/TodosItem.vue'

export default {
  name: 'Todos',
  components:{
    TodosItem
  },
  props: {
    greet:{
        type: String
    },
    employeeArray:{
        type: Array
    }
  },
  data(){
      return{
          mainClass: "main-div",
          welcome: "Hello World!",
          flag: false,
          morning: `<b>Good morning!<b>`,
          evening: `<b>Good evening!<b>`,
          vshow: "This is V-show"
      }
  }
}