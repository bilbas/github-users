<template>
  <div id="app" class="app-main">
    <div class="app-sidebar">
      <nav class="app-menu">
        <a v-bind:class="{'active': curUsersType === USERS_TYPES.CURRENT}" class="app-menu-item" v-on:click.prevent="curUsersType = USERS_TYPES.CURRENT" href="">Users</a>
        <a v-bind:class="{'active': curUsersType === USERS_TYPES.SAVED}" class="app-menu-item" v-on:click.prevent="curUsersType = USERS_TYPES.SAVED" href="">Selected Users</a>
      </nav>
    </div>
    <header class="app-header">
      <input class="app-search-form" type="text" v-model="search">
    </header>
    <article class="app-content">
      <template v-if="curUsersType === USERS_TYPES.CURRENT">
        <span v-if="!filteredAllUsers.length">No results.</span>
        <ul class="app-user-list">
          <li v-for="user in filteredAllUsers" :key="user.id">
            <AllUsers v-bind:user="user" v-bind:saveHandler="saveUser" v-bind:clickHandler="clickComponent" />
          </li>
        </ul>
      </template>
      <template v-if="curUsersType === USERS_TYPES.SAVED">
        <span v-if="!filteredSavedUsers.length">No results.</span>
        <ul class="app-user-list">
          <li v-for="user in filteredSavedUsers" :key="user.id">
            <SavedUser v-bind:user="user" v-bind:removeHandler="removeUser"/>
          </li>
        </ul>
      </template>
    </article>
  </div>
</template>

<script>

import Store from "./Store.js";

import AllUsers from "./components/AllUsers.vue";
import SavedUser from "./components/SavedUser.vue";

const USERS_TYPES = {
  CURRENT: 0,
  SAVED: 1,
};

export default {
  name: 'App',
  openedComponent: null,
  components: {
    AllUsers,
    SavedUser
  },
  created() {
    this.USERS_TYPES = USERS_TYPES;
    this.store = new Store();
  },
  mounted: function() {
    fetch('https://api.github.com/users')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('');
        }
      })
      .then(json => {
        this.allUsers = json;
      })
      .catch(() => {});

    this.savedUsers = this.store.fetch();

    window.addEventListener('beforeunload', (e) => {
      e.preventDefault();
      this.store.save(this.savedUsers);
    });
  },
  data() {
    return {
      allUsers: [],
      savedUsers: [],
      search: '',
      curUsersType: USERS_TYPES.CURRENT
    }
  },
  computed: {
    filteredAllUsers: function() {
      return this.filter(this.allUsers);
    },
    filteredSavedUsers: function () {
      return this.savedUsers;
    },
  },
  methods: {
    saveUser: function(userInfo) {
      if(!this.savedUsers.find((el)=> el.id === userInfo.id)) {
        this.savedUsers.push(userInfo);
      }
    },
    removeUser: function(userId) {
      this.savedUsers = this.savedUsers.filter(function(user) {
        return user.id !== userId;
      });
    },
    filter: function (users) {
      return users.filter(user => {
        return user.id.toString() === this.search ||
          user.login.toLowerCase().includes(this.search.toLowerCase());
      })
    },
    clickComponent: function (el) {
      if (this.openedComponent == null) {
        this.openedComponent = el;
      } else if(this.openedComponent !== el) {
        this.openedComponent.detailedDataShowed = false;
        this.openedComponent = el;
      }
    }
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .app-main {
    display: grid;
    height: 100vh;
    grid-template-rows: 1fr 10fr;
    grid-template-columns: minmax(120px, 20%) 1fr;
    grid-template-areas:
        "sidebar header header"
        "sidebar content content";
  }

    .app-header {
      grid-area: header;
      padding: 20px;
    }

    .app-sidebar {
      grid-area: sidebar;
      background: rgba(0, 0, 0, 0.35);
    }

    .app-menu {
      position: fixed;
      padding: 10px;
      text-align: left;
    }
      .app-menu-item {
        display: block;
        text-align: left;
        margin: 14px 0;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        color: #1a72ce;
      }
        .app-menu-item.active {
          color: #000;
        }

    .app-content {
      padding: 30px;
    }

    .app-search-form {
      width: 100%;
      height: 40px;
      padding: 0 10px;
      font-size: 16px;
      box-sizing: border-box;
      border: none;
      background: #cecece;
      border-radius: 20px;
    }

    .app-user-list {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-gap: 30px;
      grid-area: content;
      margin: 0;
      padding: 0;
      list-style: none;
    }
</style>
