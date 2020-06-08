<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app    
    floating
    dark
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      height="100%"      
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list>
            <v-list-item-group>
                <v-list-item>
                    <v-list-item-avatar v-if="logo" color="white">
                        <v-img :src="logo" height="34" contain></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title">YoFacturoApp</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>     
        </v-list>

        <v-divider/>

        <v-list>
            <v-list-item-group>
                <v-list-item
                v-for="(link, i) in links"
                :key="i"
                :to="link.to"
                :active-class="color"                
                class="v-list-item"
                >
                <v-list-item-icon class="v-list__tile__action">
                    <v-icon v-text="link.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="link.text"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>      
        </v-list>        
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    logo: 'favicon.ico',
    links: [
      {
        to: '/',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List'
      },
      {
        to: '/typography',
        icon: 'mdi-format-font',
        text: 'Typography'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      }
    ]
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
  }
}
</script>

<style lang="scss">
  #app-drawer {    

    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }        
  }

  #app-drawer .v-image__image--cover{
    box-shadow: inset 3px 3px 300px 200px rgba(34, 29, 29, 0.692);
  }

  #app-drawer .v-list .v-list-item {
    border-radius: 5px;
  }

  .theme--dark.v-list-item--active:before, .theme--dark.v-list-item--active:hover:before, .theme--dark.v-list-item:focus:before {
    border-radius: 5px;
  }
</style>
