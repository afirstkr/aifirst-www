<template lang="pug">
  .container
    p {{pageTitle}}
</template>

<script>

export default {
  name: 'Sample',
  data: (() => {
    return {
      pageTitle: 'Sample'
    }
  })
}
</script>