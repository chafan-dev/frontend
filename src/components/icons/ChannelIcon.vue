<template>
  <v-icon v-bind="$attrs" v-on="$listeners">{{ svgPath }}</v-icon>
</template>

<script>
import { mdiAccountGroup } from '@mdi/js';

export default {
  data: () => ({
    svgPath: mdiAccountGroup,
  }),
};
</script>
