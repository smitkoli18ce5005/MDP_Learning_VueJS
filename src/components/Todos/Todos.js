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
          flag: true,
          morning: `<b>Good morning!<b>`,
          evening: `<b>Good evening!<b>`,
          vshow: "This is V-show",
          textData: ""
      }
  },
  beforeCreate(){
    console.log("BeforeCreate Todos.vue")
  },
  created(){
    console.log("Create Todos.vue")
  },
  beforeMount(){
    console.log("BeforeMount Todos.vue")
  },
  mounted(){
    console.log("Mounted Todos.vue")
  },
  beforeUpdate(){
    console.log("BeforeUpdate Todos.vue")
  },
  updated(){
    console.log("Updated Todos.vue")
  }
}