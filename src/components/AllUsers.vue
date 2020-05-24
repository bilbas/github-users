<template>
  <li class="user-cont" v-on:click="onDetails">
    <Logo v-bind:url="user.avatar_url" />
    <p class="user-login">{{ user.login }}</p>
    <div class="user-detail-info" v-if="detailedDataShowed">
      <div v-if="detailsInfoState !== DETAILS_INFO_STATES.NONE">
        <template v-if="detailsInfoState === DETAILS_INFO_STATES.LOADED">
          <p class="user-detail-info-item">Name: <span class="user-detail-info-item-value">{{details.name || '-'}}</span></p>
          <p v-if="details.location" class="user-detail-info-item">Location: <span class="user-detail-info-item-value">{{details.location}}</span></p>
          <p v-if="details.company" class="user-detail-info-item">Company: <span class="user-detail-info-item-value">{{details.company}}</span></p>
          <button class="user-save-btn" v-on:click.stop="saveHandler(details), detailedDataShowed = false">Save</button>
        </template>
        <template v-else-if="detailsInfoState === DETAILS_INFO_STATES.LOADING">
          Loading...
        </template>
        <template v-else-if="detailsInfoState === DETAILS_INFO_STATES.ERROR">
          Something is wrong!
        </template>
      </div>
    </div>
  </li>
</template>

<script>
  import Logo from './Logo.vue';

  const DETAILS_INFO_STATES = {
    NONE: 0,
    LOADED: 1,
    LOADING: 2,
    ERROR: 3
  };

  export default {
    name: "User",
    props: {
      user: {
        type: Object
      },
      saveHandler: {
        type: Function
      },
      clickHandler: {
        type: Function
      }
    },
    components: {
      Logo
    },
    created() {
      this.DETAILS_INFO_STATES = DETAILS_INFO_STATES;
    },
    data() {
      return {
        details: [],
        imgLoaded: false,
        detailsInfoState: DETAILS_INFO_STATES.NONE,
        detailedDataShowed: false
      }
    },
    methods: {
      onDetails: function () {
        this.clickHandler(this);
        this.detailedDataShowed = !this.detailedDataShowed;

        if (this.detailsInfoState === this.DETAILS_INFO_STATES.LOADED)
          return;

        fetch('https://api.github.com/users/' + this.user.login)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('');
            }
          })
          .then(json => {
            this.detailsInfoState = this.DETAILS_INFO_STATES.LOADED;
            this.details = json;
          })
          .catch(() => {
            this.detailsInfoState = this.DETAILS_INFO_STATES.ERROR});

        this.detailsInfoState = this.DETAILS_INFO_STATES.LOADING;
      }
    }
  }
</script>

<style scoped>
  /*.logo-cont {*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*}*/
  /*.login {*/
  /*  margin: 0;*/
  /*  font-size: 18px;*/
  /*  font-weight: bold;*/
  /*}*/
  /*.logo-cont:hover {*/
  /*  opacity: 0.6;*/
  /*}*/

  .user-cont {
    position: relative;
    cursor: pointer;
  }

    .user-login {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
    }

    .user-detail-info {
      position: absolute;
      left: -10px;
      right: -10px;
      padding: 4px;
      background: rgba(186, 186, 186, 1);
      font-size: 12px;
      font-weight: bold;
      color: #000;
      border-radius: 4px;
      text-align: center;
      z-index: 1;
    }
      .user-detail-info-item {
        margin: 2px;
      }
      .user-detail-info-item-value {
        display: block;
        color: #2c3e50;
      }

    .user-save-btn {
      margin-top: 4px;
      padding: 6px 20px;
      background: #000;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 4px;
    }
</style>