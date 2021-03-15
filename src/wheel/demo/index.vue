<template>
  <div class="test">
    <quick-wheel></quick-wheel>
  </div>
</template>

<script>
import QuickWheel from '../index.vue';

export default {
  components: {
    QuickWheel,
  },
  i18n: {
    'zh-CN': {
      nextStep: '下一步',
      step1: '买家下单',
      step2: '商家接单',
      step3: '买家提货',
      step4: '交易完成',
      title2: '描述信息',
      title3: '竖向步骤条',
      status1: '【城市】物流状态1',
      status2: '【城市】物流状态',
      status3: '快件已发货',
      customStyle: '自定义样式',
    },
    'en-US': {
      nextStep: 'Next Step',
      step1: 'Step1',
      step2: 'Step2',
      step3: 'Step3',
      step4: 'Step4',
      title2: 'Description',
      title3: 'Vertical Steps',
      status1: '【City】Status1',
      status2: '【City】Status2',
      status3: '【City】Status3',
      customStyle: 'Custom Style',
    },
  },

  data() {
    return {
      active: 1,
    };
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-steps {
  .steps-success,
  .van-icon-location {
    color: @green;
  }

  .van-button {
    margin: @padding-md 0 0 @padding-md;
  }

  p,
  h3 {
    margin: 0;
    font-weight: normal;
    font-size: inherit;
  }

  .van-steps__message + p {
    margin-bottom: 10px;
  }
}
</style>
