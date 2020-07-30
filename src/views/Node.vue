<template>
  <div style="top: 0;" id="login" class="page active">
    <div class="title rpc">
      <div class="logo">
        <img src="logo_s.png"/>
        <h1>SETTINGS</h1>
      </div>
    </div>
    <router-link class="close" :to="$store.getters['app/nodeLink']"><i class="fal fa-times"></i></router-link>
    <div id="inputs">
      <div class="labeltabs">
        <label @click="setAdvanced" class="df" :class="{ active: showadvanced === true}">
          Set Custom Backend URL
        </label>
      </div>
      <input v-if="showadvanced === true" v-model="address" placeholder="https://domain.com:443/path" type="text" id="address" name="address">
      <input v-if="showadvanced === true" v-model="auth" placeholder="Auth Header (ex. Basic xyz) *optional" type="text" id="auth" name="auth">
      <button v-if="showadvanced === true" @click="openAdvanced" class="openwallet btn" type="button">Save Settings</button>
    </div>
    <div>
    <p style="margin-top: 40px;">This wallet is designed to use any Nano RPC API or Node as backend. Any network, any fork.</p><p>The default setting for TIX is the Nano main network with redundant pre-configured backends.</p>
    </div>
    <div></div>
  </div>
</template>

<script>
import { serverMixin } from '../mixins/serverMixin.js'

export default {
  name: 'Node',
  components: {
  },
  data() {
    //this.$router.push('/1.nanos.cc')
    return {
      node: 'nano.linuxserver.io',
      address: '',
      auth: '',
      nodetype: 'nano',
      showadvanced: false
    }
  },
  mixins: [ serverMixin ],
  methods: {
    openNode () {
      this.$router.push('/' + this.node)
    },
    openAdvanced () {
      if (this.address) {
        let urlreg = new RegExp('^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*')
        if (urlreg.test(this.address)){
          let url = new URL(this.address)
          this.$store.state.app.settings.changeaddress = false
          this.$store.state.app.settings.checkbackends = false
          this.$store.state.app.settings.followlinks = false
          let node = {}
          node['headers'] = {'Content-Type': 'application/json'}
          node['address'] = url.hostname
          node['protocol'] = url.protocol.replace(':','')
          node['path'] = url.pathname
          if (url.port) {
            node['port'] = url.port
          } else if (url.protocol == 'http:') {
            node['port'] = 80
          } else if (url.protocol == 'https:') {
            node['port'] = 443
          }
          if (this.auth) {
            node['auth'] = this.auth
          }
          if (this.nodetype == 'banano') {
            node['banano'] = true
            this.$store.state.app.prefixparams = 'useBananoPrefix'
          }
          this.$store.state.app.settings.node = [node]
          this.$router.push({name:'Home'})
        } else {
          this.$notify({
            title: 'Error',
            text: 'URL Malformed',
            type: 'error'
          })
        }
      } else {
        this.$notify({
          title: 'Error',
          text: 'Please fill out all required values',
          type: 'error'
        })
      }
    },
    setAdvanced () {
      this.showadvanced = true
    },
    setNormal () {
      this.showadvanced = false
    }
  }
}
</script>

<style lang="scss">
.presets button{
  padding: 10px !important;
  font-size: 12px !important;
  margin-right: 4px !important;
  margin-left: 4px !important;
  margin-bottom: 8px !important;
}
.yellow {
  color: #FFFF00 !important;
  border-color: #FFFF00 !important;
}
</style>
