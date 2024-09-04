<script setup>
</script>

<template>
  <v-sheet>
    <div class="md-style">
      <slot />
    </div>
  </v-sheet>
</template>

<style lang="scss">
.md-style {
  font-family: "Poppins", sans-serif;
  font-size: var(--md-text-size);
  background-color: transparent;
  color: rgb(var(--md-text-color));
  font-weight: 300;

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
  }

  blockquote:not(:last-child),
  dl:not(:last-child),
  ol:not(:last-child),
  pre:not(:last-child),
  table:not(:last-child),
  ul:not(:last-child),
  p:not(:last-child) {
    margin-bottom: 1em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgb(var(--v-theme-baseVariant));
    font-weight: 500;
    line-height: 1.125;
  }

  h1,
  h2 {
    margin-bottom: .6em;
    font-size: 1.7em;
    color: rgb(var(--md-heading-color));
    word-spacing: 1px;
    font-weight: 550;
    letter-spacing: 1.5px;
    text-transform: capitalize;
  }

  h1:not(:first-child),
  h2:not(:first-child) {
    margin-top: 1.35em;
  }

  h1:after,
  h2:after {
    content: " ";
    display: block;
    border-bottom: 1px solid rgba(var(--md-heading-underline-color), var(--md-heading-underline-opacity));
    height: 5px;
  }


  h3 {
    font-size: 1.5em;
    margin-bottom: .5em;
  }

  h3:not(:first-child) {
    margin-top: 1.15em;
  }

  h4 {
    font-size: 1.35em;
    margin-bottom: .45em;
  }

  h4:not(:first-child) {
    margin-top: 1.05em;
  }

  h5 {
    font-size: 1.25em;
    margin-bottom: .3em;
  }

  h6 {
    font-size: 1.15em;
    margin-bottom: .3em;
  }

  h5:not(:first-child),
  h6:not(:first-child) {
    margin-top: 1em;
  }

  h1 a,
  h2 a {
    color: rgb(var(--md-heading-section-color))
  }

  h1 a:hover,
  h2 a:hover {
    color: rgba(var(--md-heading-section-color), var(--md-heading-hover-opacity));
    text-decoration: none;
  }

  h3 a,
  h4 a,
  h5 a,
  h6 a {
    color: rgb(var(--md-heading-color));
  }

  h3 a:hover,
  h4 a:hover,
  h5 a:hover,
  h6 a:hover {
    color: rgba(var(--md-heading-color), var(--md-heading-hover-opacity));
    text-decoration: none;
  }

  li::marker {
    color: rgb(var(--v-theme-baseVariant));
  }

  a {
    color: rgb(var(--md-link-color));
    font-weight: 420;
    cursor: pointer;
    text-decoration: none;
    transition-duration: 290ms;
    transition-property: background-color, border-color, color;
  }

  a:hover {
    color: rgba(var(--md-link-color), var(--md-heading-hover-opacity));
    text-decoration: 2px underline rgba(var(--md-link-color), 0.2);
  }

  blockquote {
    background-color: rgba(var(--md-quote-background-color), var(--md-quote-background-opaacity));
    // border: 1px solid rgba(var(--md-quote-background-color), 0.3);
    border-radius: 0.5em;
    // border-inline-start: 8px solid rgba(var(--v-theme-secondary), 0.4);
    padding: 1.25em 1.5em;
    color: rgb(var(--md-quote-text-color))
  }

  pre {
    background-color: rgba(var(--md-pre-background-color), var(--md-pre-background-opacity));

    code {
      font-size: 0.8em;
    }
  }

  ul {
    list-style: disc outside;
    margin-inline-start: 2em;
    margin-top: 1em;
  }

  li+li {
    margin-top: .25em;
  }

  ol {
    list-style-position: outside;
    margin-inline-start: 2em;
    margin-top: 1em;
  }

  ol:not([type]) {
    list-style-type: decimal;
  }


  ul:first-child,
  ol:first-child {
    margin-top: 0;
  }


  b,
  strong {
    font-weight: bold;
    color: rgb(var(--md-bold-color));
  }
}
</style>