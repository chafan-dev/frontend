<template>
  <v-icon v-bind="$attrs" v-on="$listeners">{{ svgPath }}</v-icon>
</template>

<script>
import { mdiForum } from '@mdi/js';

export default {
  data: () => ({
    svgPath: mdiForum,
  }),
};
</script>
