<template>
  <div class="root">
    <ul class="nav_l">
      <li
        v-for="(item, index) in computedText"
        v-bind:key="index">
        {{ item.text }}
      </li>
    </ul>

    <input v-model='name' type="text">

    <ul class="nav_l">
      <li
        v-for="(item, index) in list"
        v-bind:key="index">
        {{ item.text }}
      </li>
    </ul>

    <el-button @click="addList">button</el-button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      list: [
        {
          text: '123',
          name: { test: 'eys' }
        },
        {
          text: '456',
          name: { test: 'eyes' }
        },
      ],
      name: 'hs',
    }
  },
  computed: {
    computedText () {
      const list = this.list
      const name = this.name
      const newArr = list.map(item => {
        const newItem = {...item}
        newItem.text += name
        return newItem
      })
      return newArr
    }
  },
  methods: {
    addList () {
      this.$message('这是一条消息提示');
      this.list.push({text: '789', name: { test: '1312' }})
    }
  }
}
</script>

<style>
.nav_l {
  display: inline-block;
  width: 300px;
  height: 100%;
  list-style-type: none;
}
.nav_l li {
  /* display: inline-block; */
  height: 100%;
  line-height: 35px;
}
</style>
