<template>
  <div>
    <button type="button" @click="clearCompleted">
      clear completed
    </button>
    <button type="button" @click="clearEmpty">
      clear empty
    </button>
    <ul>
      <li
        v-for="(todo, index) in $store.state.todos"
        :class="{ completed: todo.completed }"
      >
        <a class="check" @click="toggleComplete({ todo })"></a>
        <input
          ref="input"
          :value="todo.text"
          @change="doneEditing($event, todo)"
          @keyup.enter="edit(index + 1)"
        >
        <a class="remove" @click="remove({ todo })"></a>
      </li>
      <li>
        <button type="button" @click="add">+ List item</button>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapMutations } from 'vuex'

export default {
  name: 'TodoList',

  methods: {
    ...mapMutations([
      'clearCompleted',
      'clearEmpty',
      'add',
      'toggleComplete',
      'updateText',
      'remove',
    ]),

    doneEditing(event, todo) {
      const text = event.target.value.trim();

      this.updateText({ todo, text });
    },

    edit(index) {
      if (this.$refs.input[index]) {
        this.$refs.input[index].focus();
        return;
      }

      this.add();
    }
  }
}
</script>
<style lang="sass" scoped>
  ul
    margin: 0
    padding: 0

  li
    list-style: none
    margin: 0.5em 0

  .check
    align-items: center
    border-radius: 2px
    box-shadow: inset 0 0 0 2px #bbb
    color: white
    cursor: pointer
    display: inline-flex
    height: 1.25rem
    justify-content: center
    margin-right: 1rem
    vertical-align: middle
    width: 1.25rem

  input
    background: transparent
    border: 0
    font-size: 1rem
    height: 1.5em
    line-height: 1.5em
    margin-right: 1em
    outline: 0
    padding: 0 0.5em
    vertical-align: middle
    width: 10em

  button
    margin: 0 6px 6px 0

  .text
    cursor: pointer
    display: inline-block

  .completed
    input
      text-decoration: line-through

    .check
      background: #bbb

      &::before
        border-color: #fff
        border-style: solid
        border-width: 0 0 3px 3px
        content: ''
        display: inline-block
        height: 25%
        transform: rotate(-45deg) translate3d(1px, 0, 0)
        width: 40%

  .remove
    align-items: center
    background: rgba(0, 0, 0, 0.25)
    border-radius: 50%
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.25)
    color: #fff
    cursor: pointer
    display: inline-flex
    font-size: 0.75rem
    font-weight: 600
    height: 1.5rem
    justify-content: center
    outline: 0
    position: relative
    vertical-align: middle
    width: 1.5rem

    &::before,
    &::after
      background: #fff
      content: ''
      display: block
      height: 2px
      position: absolute
      width: 50%

    &::before
      transform: rotate(45deg)

    &::after
      transform: rotate(-45deg)
</style>
