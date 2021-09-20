<template>
  <div :class="mainClass">
    <h1 v-text="welcome"></h1>

    <p v-if="flag" v-html="morning"></p>
    <p v-else v-html="evening"></p>

    <p v-show="flag" v-text="vshow"></p>

    <p v-text="greet"></p>

    <div v-for="items in employeeArray" v-bind:key="items.id">
        <TodosItem v-bind:name="items.name"/>
    </div>
  </div>
</template>

<script type='module' src='./Todos.js'></script>