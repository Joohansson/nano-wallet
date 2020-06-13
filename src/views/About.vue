<template>
  <div id="login" class="page active">
    <div class="title rpc">
      <div class="logo">
        <img src="logo_s.png"/>
        <h1>ABOUT TIX WALLET</h1>
      </div>
    </div>
    <router-link class="close" :to="$store.getters['app/nodeLink']"><i class="fal fa-times"></i></router-link>
    <div class="about-inner">
      <div class="about">
        <p>
          TIX is a secure client-side JS Wallet running on the live Nano network.<br>
          
          <ul>
            <li>Developed by <a href="https://www.linuxserver.io/">LinuxServer.io</a></li>
            <li>Source code at <a href="https://github.com/Joohansson/nano-wallet">Github</a> and this host is running from the <a href="https://github.com/Joohansson/nano-wallet/tree/gh-pages">GH pages branch</a></li>
          </ul> 
          
        </p>
        <h2>TERMS</h2>
        <p>
          <ul>
            <li>By using TIX you agree to the following terms which may update at any time.</li>
            <li>TIX does not store or send keys anywhere. Keeping a backup of any seed or private key is up to the user. TIX will not be held accountable for any loss of funds.</li>
            <li>TIX or the owner of any backend API it connects to does not promise a certain uptime and may stop or pause the service at any time.</li>
          </ul>  
        </p>
        <h2>TECHNICALITY</h2>
        <p>
          <ul>
            <li>You must keep a backup of the seed since nothing is stored in TIX, locally or remotely. Wallet session is terminated when closing the browser or logging out.</li>
            <li>Proof of Work is always done locally for maximum stability. Depending on device, it may take several minutes to be completed (do not refresh the page).</li>
            <li>Refreshing wallet state is done manually with the refresh button, for example detect new incoming transactions.</li>
            <li>Each incoming transaction is initiated manually using the Receive button.</li>
            <li>Your account's representative can be changed under Settings.</li>
          </ul>
        </p>
        <h2>SPECIAL FEATURES</h2>
        <p>
          <ul>
            <li><router-link :to="$store.getters['app/nodeLink'] + 'generate'">Address generator with paper wallet</router-link></li>
            <li><router-link :to="$store.getters['app/nodeLink'] + 'block/D318ADB547B69733BAFB7D491BF05B38C542F57A39A8BEDB05657D8C95A9EA6D'">Block Explorer</router-link></li>
            <li><router-link :to="$store.getters['app/nodeLink'] + 'address/nano_3jwrszth46rk1mu7rmb4rhm54us8yg1gw3ipodftqtikf5yqdyr7471nsg1k'">Watch-only address</router-link></li>
            <li><router-link :to="$store.getters['app/nodeLink'] + 'pos/nano_1gur37mt5cawjg5844bmpg8upo4hbgnbbuwcerdobqoeny4ewoqshowfakfo'">Point of Sale (PoS) Terminal</router-link></li>
          </ul>
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

