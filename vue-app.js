
 const app = Vue.createApp({
  data() {
    return {
      count: 1,
      name: 'Yuri',
      tasks: []
    }
  },

  methods: {
    decreaseCount() {
        this.count = this.count -1;
    },

    increaseCount() {
        this.count++;
    }
  }, 

  computed: {
    dubleCount() {
        return this.count * 2;
    }
  }
})

app.mount('#vue-app');

 const appTwo = Vue.createApp({
  data() {
    return {
      count: 1,
      name: 'Yuri',
      tasks: []
    }
  },

  methods: {
    decreaseCount() {
        this.count--;
    },

    increaseCount() {
        this.count++;
    }
  }, 

  computed: {
    dubleCount() {
        return this.count * 2;
    }
  }
})

appTwo.mount('#vue-app-two');



