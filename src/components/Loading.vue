<template>
  <div class="loading">
    <div class="loading-logo">&nbsp;</div>
  </div>
</template>

<script>
  export default {
    name: "Loading"
  }
</script>

<style scoped>
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
    .loading::after,
    .loading::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-border-radius: 100%;
      border-radius: 100%;
    }

    .loading::before {
      content: '';
      width: 42px;
      height: 42px;
      margin: -21px 0 0 -21px;
      background-color: rgba(0, 0, 0, .45);
      -webkit-animation: pulse-inside 2s linear infinite;
      -moz-animation: pulse-inside 2s linear infinite;
      animation: pulse-inside 2s linear infinite;
    }

    .loading::after {
      width: 60px;
      height: 60px;
      margin: -30px 0 0 -30px;
      background: rgba(0, 0, 0, 0.1);
      -webkit-animation: pulse-outside 2s linear infinite;
      -moz-animation: pulse-outside 2s linear infinite;
      animation: pulse-outside 2s linear infinite;
    }

    .loading-logo{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40px;
      height: 40px;
      margin: -20px 0 0 -20px;
    }
      .loading-logo::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 38px;
        height: 38px;
        margin: -19px 0 0 -19px;
        -webkit-animation: spin 3s linear infinite;
        -moz-animation: spin 3s linear infinite;
        animation: spin 3s linear infinite;
      }
      .loading-logo::before,
      .loading-logo::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 38px;
        height: 38px;
        margin: -19px 0 0 -19px;
        background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAQAAAC22Qr6AAAE7UlEQVR4Ae3aA3BsSRcH8BO9fVzj7cNO1rZt27Zt27Zt27Zt7yZv9bg28/s0lbq3bjJfJnXnLn9T6n/Qp1Jdp7vSHfmwsK98YcL4/VjK9Y5KJcuBwansJLdYMoriRrSkkiXRZmAiqTcUV0ZRrA6mrFjUDGD5qBXjmS01Ht9P2KxiUdvhW2NFgvmNnd8iHuGn9K/3CK6tWNStuDsSDMZw80YeLAbOSWUHYLhenRVlDJ9jj0hwDZgr8uEkMHUiWRQs0GlRi0Pyr2JOsH/kRV+f4b5E0s8X2KuzluAgDNcz2nkGH6mP/NgCLJVIbsOHypNYyDBD9S+PGozEddHOWmC16D4NjjZrpHgR72qIMjtrsZ/yWJ0mTerKox4O1GLrKNPLMDwcKWZ1tIboKlfiE5OksvnB3lGmh15RgZ6aosyxYMZIMIlPqmqutke2rOvA4KiSycG52ZKwfXSd9cDHSolsKm/Yy5hRJWPZy4sGJZKSj8F6UR0bgCGpshoiB0qGgA2ietYFLSaOHJlYC1g3useaYJTpIiemMwqsGV1jEn0z2RpoM1PkxMzasEYm76c5skzgS+9aOLvkzRU5Mmd2eVtMq1HG7mxhc4lJokAmdxlgjY6a3ZreAt/YV1MUQE8H+Ba8bnU9oyN62ceX4HVrRI1Z25vgc3saLSox2LmAq6KGXAU428DoCgt6BodGDTkMT1kgqmENvaKG9LJ6/MmY284GxR+A/rY1e0So8xq+9axDrGis+B3oa1n7ecLXeD4iNLobAMPcb2cLaYgCqDe/7dzlIwDcW57b9NZxhXcADC+sqI8BvO9aG5o5ezJfyM5u943zoyAu8p377GZxldunQQZHQTRrjr+Yf+ivZGDi06y/uiiIOv01p+Yv6R8+w2+JD0M1RUE0GZqZ/7OQ9UuhRf0iIyxuRcslPitaXH0URH1H80ct/eMf6sxre486PAriSM/YycIaI8tU1nSJtwFt+kYB9NEGeNfV1jN9lIXDPQqAkR6yX0FF9bWH+wwDwJPlOx9Pgu+94DCrGS8KZiwrOtBTvgWP/je0gktspjl+ZwbZ0AWWiT8ZzXpFDempVO02ub+vHBg15EBfVvHfHWt6HbTqXcNmMAS83oVbCPO6C3CZmTVEjWgwiysBd5q70io6D/CIxaIAFvc44FylyDK/X8AQm0eBbOlD8Iu5OuoScKQxIsXUZoocmcnUkWJMx6DNBJFlUYtkspLP/WLhyImF/epzpezcFux6r2oF60ROrA1au71/mEQLWCtyZC3QYpLulfQRWC1yZjXwkUmqL2lo9g7FHQ6q/hRhPAe5NnvnY2hVZZm3o/s4m4ElokpWBat0eJ84b3SVo8H66Y3BCDykR3ncWHnDNprG9sugF9FaHpdZHxwdXaWXy+0UKY5Hm2kTLxHec7Zyb1Gfutge5Fxva28k5gH7RoqdXK5XdJ8pwCmJ5FAwdnv/ST4BmADsE+1cjh8MjDy5A1/ql0iewhWdPpa4EQ+lLu5+wuX5bpywXSIZ4Eds2emzkh3xrXFT5yeYLfJhoOF4W33mBdX0nRY1O1ghtfCH4l1jRx5M6TPSB3qn4i11nRbVqBXHZtrAKKXIhwmsFynexGkV30+djxfTBzubGDdqxVRgpYpFrY3fNEdRHAQmqFhUCewZRTGfe9z8f59U3uV+80bRKj8+VRfd9C9RVueIu4NoDgAAAABJRU5ErkJggg==');
        background-size: 38px auto;
        -webkit-animation: spin 3s linear infinite;
        -moz-animation: spin 3s linear infinite;
        animation: spin 3s linear infinite;
      }

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

  @keyframes pulse-inside {
    0% { transform: scale(1.2) }
    50% { transform: scale(1) }
    100% { transform: scale(1.2) }
  }

  @keyframes pulse-outside {
    50% { transform: scale(1.2) }
  }
</style>