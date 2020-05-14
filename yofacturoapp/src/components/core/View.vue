<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
    <core-footer />
  </v-content>
</template>

<script>
import CoreFooter from './Footer'

export default {
  metaInfo () {
    return {
      title: 'Yo Facturo App',
      description: 'Aplicacion para manejo de facturas y inventario'
    }
  },
  components: {
      CoreFooter
  }
}
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
