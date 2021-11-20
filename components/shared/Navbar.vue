<template>
  <div class="navbar">
      <div class="container">
          <div class="navbar__wrap">

          
                <div class="navbar__left">
                    <h3>Nuxt Auth</h3>
                </div>
                <div class="navbar__right">
                    <div class="navbar__right--profile" v-if="isAuthenticated">
                        <nuxt-link class="navbar__link navbar__link--mypro" to="/profile">My Profile {{ loggedInUser }}</nuxt-link>
                        <a class="navbar__link" @click="logout">Log out</a>
                    </div>
                    <div class="navbar__right--login" v-else>
                        <nuxt-link to="/login" class="navbar__link">Login</nuxt-link>
                    </div>
                </div>

          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
   methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/login');
    },
  }
}
</script>

<style lang="scss" scoped>
    .navbar {
        width: 100%;
        background-color: beige;

        &__wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__right {
            display: flex;
            column-gap: 20px;

            &--profile {
                display: flex;
                column-gap: 20px;
            }
        }

        &__link {
            text-decoration: none;
            cursor: pointer;
        }
    }
</style>