<template>
  <div>
    <ul v-for="user in users" :key="user.id">
      <template v-if="userType === USERS_TYPES.CURRENT">
        <User v-bind:user="user" v-bind:onSave="saveHandler"/>
      </template>
      <template v-if="userType === USERS_TYPES.SAVED">
        <SavedUser v-bind:user="user" v-bind:onRemove="deleteHandler"/>
      </template>
    </ul>
  </div>
</template>

<script>
  import User from "./User.vue";
  import SavedUser from "./SavedUser.vue";

  const USERS_TYPES = {
    CURRENT: 0,
    SAVED: 1,
  };

  export default {
    name: "UsersList",
    components: {
      User,
      SavedUser
    },
    created() {
      this.USERS_TYPES = USERS_TYPES;
    },
    props: {
      userType: {
        type: Number
      },
      users: {
        type: Array
      },
      saveHandler: {
        type: Function
      },
      deleteHandler: {
        type: Function
      }
    }
  }
</script>

<style scoped>

</style>