<template>
  <div class="error">
      <p class="error__message">
          {{ message }}
      </p>
  </div>
</template>

<script>
export default {
    props: [ 'message' ]
}
</script>

<style lang="scss" scoped>
    .error {
        &__message {
            color: brown;
        }
    }
</style>