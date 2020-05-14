<template>
  <v-app>
    <!-- Config of general aspects of the app -->
    <CoreFilter />

    <!-- Tool Upper bar -->
    <CoreToolbar />

    <!-- SideBar -->
    <CoreDrawer />

    <!-- Where routes get show and footer -->
    <CoreView />
  </v-app>
</template>

<script>
import CoreFilter from "./components/core/Filter";
import CoreDrawer from "./components/core/Drawer";
import CoreToolbar from "./components/core/ToolUpperBar";
import CoreView from "./components/core/View";

export default {
  name: "App",

  components: {
    CoreFilter,
    CoreDrawer,
    CoreToolbar,
    CoreView
  },

  data: () => ({
    //
  })
};
</script>


<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
