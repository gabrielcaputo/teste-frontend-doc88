<template>
  <kinesis-container>
    <div id="layout">
      <header>
        <div class="container">
          <div class="pastel-01">
            <kinesis-element
              :strength="20"
              type="translate"
              transformOrigin="50% 100%"
            >
              <img src="@/assets/images/pastel-01.png" />
            </kinesis-element>
          </div>
          <div class="logo">
            <kinesis-element
              :strength="3"
              type="rotate"
              transformOrigin="50% 100%"
            >
              <img src="@/assets/images/logo-character.svg" />
            </kinesis-element>
            <img src="@/assets/images/logo-text.svg" />
          </div>
          <img class="pastel-02" src="@/assets/images/pastel-02.png" />
        </div>
      </header>
      <main class="container">
        <slot />
      </main>
    </div>
  </kinesis-container>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style lang="scss" scoped>
@import "Layout";
</style>
