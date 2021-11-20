<template>
  <div class="login">
      <form class="login__form" @submit.prevent="onSubmit">
          <h3 class="login__title">Log In</h3>
          <Notification :message="error" v-if="error"/>
          <!-- <label class="login__label">Email</label> -->
          <input type="email" class="login__input" v-model="user.email" placeholder="Enter Your Email">

          <!-- <label class="login__label">Password</label> -->
          <input type="password" class="login__input" v-model="user.password" placeholder="Enter Your Password">

          <button class="button login__button">Login</button>

      </form>
  </div>
</template>

<script>

import Notification from '~/components/views/login/Notification'

export default {
    components:{
        Notification
    },
    middleware: 'guest',
    
    data(){
        return {

            user: {
                email:'',
                password:''
            },
            error: null
            
        }
    },

    methods: {


        async onSubmit() {

            try {
                await this.$axios.post('/admin/super/login', {
                    email: this.user.email,
                    password: this.user.password
                })

                
                

                await this.$auth.loginWith('local', {
                    data: this.user,
                })

                this.$router.push('/')

                // this.$router.push('/')
            } catch (e) {
                
                this.error = e.response.data.message
                
            }   
        }
  }
    }

</script>






<style lang="scss" scoped>

    .login {
        width: 100vw;
        height: 100vh;
        background-color: #FFFFFF;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;

        &__form {
            max-width: 500px;
            width: 100%;
            margin: 0 auto;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 1px 2px 3px rgba(50,50,50, 0.05);
            border: 1px solid $color-secondary;
            background: white;
        }

        &__title {
            font-family: $font-title;
            font-size: 20px;
            text-align: center;
        }

        // &__label {
        //     font-size: 16px;
            
        // }

        &__input {
            border: 0;
            border-bottom: 1px solid $color-secondary;
            padding: 10px;
            outline: none;
            display: block;
            width: 100%;
            box-sizing: border-box;
            margin: 20px auto;
            font-family: $font-text;
            letter-spacing: 1.3px;
        }

        &__button {
            background: white;
            color: #4CAF50;
            font-size: 16px;
            border: 1px solid #4CAF50;
            padding: 8px 12px;
            font-family: $font-title;
            font-weight: 600;
            cursor: pointer;
            display: inline-block;
            transition: all .2s ease;

            &:hover {
                background: #2a792c;
                color: white;
            }

            &:disabled {
                opacity: 0.5;
                color: white;
                background: #2a792c;
                cursor: not-allowed;
            }
        }
    }
</style>