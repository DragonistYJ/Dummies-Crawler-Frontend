<template>
  <a-row align="middle" class="user-login" justify="center" type="flex">
    <a-col>
      <a-card :padding="40" style="width:400px;">
        <h1 slot="title" style="padding:20px;text-align:center;">{{appName}}</h1>
        <a-form :model="form" label-position="top">
          <a-form-item label="用户名" prop="username">
            <a-input @keyup.enter.native="handleLogin" allowClear v-model="formParams.username">
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item label="密码" prop="password">
            <a-input
              @keyup.enter.native="handleLogin"
              allowClear
              type="password"
              v-model="formParams.password"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
        </a-form>
        <a-button
          :loading="loading"
          @click="handleLogin"
          block
          shape="round"
          size="large"
          type="primary"
        >登录</a-button>
        <br>
        <br>
        <a-button
            :loading="loading"
            @click="handleRegister"
            block
            shape="round"
            size="large"
            type="primary"
        >注册</a-button>
      </a-card>
    </a-col>
  </a-row>
</template>
<script>

import { login } from '@/api/user.js'

export default {
  data() {
    return {
      formParams: {
        username: '',
        password: ''
      },
      form: this.$form.createForm(this),
      loading: false
    }
  },
  computed: {
    appName() {
      return this.$config.appNameEn
    }
  },
  methods: {
    handleLogin() {
      if (this.formParams.username.length === 0 || this.formParams.password.length === 0 ) {
        alert('请输入正确的账号或密码')
        return false
      }
      this.form.validateFields((err, values) => {
        if (err) {
          this.loading = true
          console.log('Received values of form: ', values)
          return false
        } else {
          login(
            this.formParams,
            data => {
              if (data.code === 200) {
                this.$store.commit('setUserInfo', data.data.id)
                this.$router.push({ name: this.$config.homeRouteName })
              } else {
                alert(data.message)
                this.loading = false
              }
            },
            data => {
              this.$Message.error(data.msg)
              this.loading = false
            }
          )
        }
      })
    },
    handleRegister() {
      this.$router.push( '/register' )
    }
  }
}
</script>
<style lang="less">
.user-login {
  height: 100%;
  width: 100%;
  background: url('../../assets/images/email-pattern.png');
}
</style>
