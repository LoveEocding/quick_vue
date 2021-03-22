<template>
  <div class="time_out">
    {{ `${hour}${linkSymbol}${minute}${linkSymbol}${senconds}` }}
  </div>
</template>

<script>
export default {
  name: 'quick-count-down',
  props: {
    timeLong: {
      type: Number,
      default: 0,
    },
    linkSymbol: {
      type: String,
      default: ':',
    },
  },
  data() {
    return {
      hour: '00',
      minute: '00',
      senconds: '00',
      localTime: this.timeLong,
    };
  },
  computed: {},
  watch: {
    localTime(val) {
      let longTime = val;
      const hour = Math.floor(longTime / 3600);
      longTime -= hour * 3600;
      const minute = Math.floor(longTime / 60);
      const senconds = longTime - minute * 60;
      this.hour = hour >= 10 ? hour : '0' + hour;
      this.minute = minute >= 10 ? minute : '0' + minute;
      this.senconds = senconds >= 10 ? senconds : '0' + senconds;
    },
  },
  created() {
    const intval = setInterval(() => {
      this.localTime--;
      if (this.localTime <= 0) {
        this.localTime = 0;
        clearInterval(intval);
        this.$emit('end');
      }
    }, 1000);
  },
};
</script>

<style>
.timeout {
  color: inherit;
  font-size: inherit;
}
</style>
