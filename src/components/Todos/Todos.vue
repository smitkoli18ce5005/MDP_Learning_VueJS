<template>
  <div :class="mainClass">
    <h1 v-text="welcome"></h1>

    <p v-if="flag" v-html="morning"></p>
    <p v-else v-html="evening"></p>

    <button class="buttonClass" @click="flag = !flag">To change flag</button>
    <p v-show="flag" v-text="vshow"></p>

    <p v-text="greet"></p>

  <div v-if="flag" class="input-pair">
    <label for="textData">This is textData</label>   
    <textarea name="textData" id="textData" cols="40" rows="10" v-model="textData"></textarea> {{200 - textData.length}} characters!
  </div>
    

    <div v-for="items in employeeArray" v-bind:key="items.id">
        <TodosItem v-bind:name="items.name"/>
    </div>
  </div>
</template>

<script type='module' src='./Todos.js'></script>