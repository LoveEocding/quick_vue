<template>
  <div class="test">
    <input type="file" accept="image" @change="fileChange" />
  </div>
</template>

<script>
import compressImg from 'img-compress-file';

export default {
  methods: {
    fileChange(file) {
      console.log(file.target.files[0]);
      compressImg(file.target.files[0], 1, true, (file) => {
        console.log(file);
        alert('压缩成功');
      });
    },
  },
};
</script>
