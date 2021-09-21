import './TodosItem.css'

export default {
  name: 'TodosItem',
  props:{
    name:{
      type: String
    }
  },
  data(){
      return{
          mainClass: "todosItem-div"
      }
  }
}