<template>
  <li class="user-cont">
    <Logo v-bind:url="user.avatar_url" />
    <p class="user-login">{{ user.login }}</p>
    <div class="user-detail-info-cont">
      <p class="user-detail-info-item">Name: <span class="user-detail-info-item-value">{{user.name || '-'}}</span></p>
      <p v-if="user.location" class="user-detail-info-item">Location: <span class="user-detail-info-item-value">{{user.location}}</span></p>
      <p v-if="user.company" class="user-detail-info-item">Company: <span class="user-detail-info-item-value">{{user.company}}</span></p>
      <p v-if="user.email" class="user-detail-info-item">Email: <span class="user-detail-info-item-value">{{user.email}}</span></p>
      <button class="user-save-btn" v-on:click.stop="removeHandler(user.id)">Remove</button>
    </div>
  </li>
</template>

<script>
  import Logo from "./Logo.vue";

  export default {
    name: "SavedUser",
    components: {
      Logo
    },
    props: {
      user: {
        type: Object
      },
      removeHandler: {
        type: Function
      }
    }
  }
</script>

<style scoped>
  .user-cont {
    text-align: center;
  }

    .user-login {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
    }

    .user-detail-info-cont {
      text-align: center;
    }

      .user-detail-info-item {
        margin: 4px 0;
        font-size: 12px;
      }

      .user-detail-info-item-value {
        display: block;
        font-size: 16px;
        color: #000;
      }

      .user-save-btn {
        margin-top: 4px;
        padding: 10px 20px;
        background: #000;
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 4px;
      }
</style>