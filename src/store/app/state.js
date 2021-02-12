export function initialState () {
  return {
    // SETTINGS CAN BE CHANGED
    settings: {
      pow: 1,
      changeaddress: false,
      checkbackends: true,
      followlinks: true,
      receiveinterval: 5000,
      nfctoken: process.env.VUE_APP_NFC_TOKEN,
      node: [
        {
          address: '1.nanos.cc',
          protocol: 'https',
          port: 443,
          path: '/proxy',
          headers: {
            'Content-Type': 'application/json'
          },
          auth: 'Basic c2VjcmV0OklqMWxxanhsMXJiSnB4RVFwamRr'
        },
        {
          address: '2.nanos.cc',
          protocol: 'https',
          port: 443,
          path: '/proxy',
          headers: {
            'Content-Type': 'application/json'
          },
          auth: 'Basic c2VjcmV0OklqMWxxanhsMXJiSnB4RVFwamRr'
        },
        {
          address: '3.nanos.cc',
          protocol: 'https',
          port: 443,
          path: '/proxy',
          headers: {
            'Content-Type': 'application/json'
          },
          auth: 'Basic c2VjcmV0OklqMWxxanhsMXJiSnB4RVFwamRr'
        },
        {
          address: 'mynano.ninja',
          protocol: 'https',
          port: 443,
          path: '/api/node',
          headers: {
            'Content-Type': 'application/json'
          }
        },
        {
          address: 'api.nanex.cc',
          protocol: 'https',
          port: 443,
          path: '',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ],
      presets: {
        'mynano.ninja': {
          port: 443,
          path: '/api/node',
          protocol: 'https',
          headers: {
            'Content-Type': 'application/json'
          }
        },
      },
    },
    // DO NOT CHANGE ANYTHING BELOW
    privatekey: null,
    pow: null,
    ready: false,
    history: [],
    pending: [],
    node: {
      address: null,
      port: null,
      path: '',
      auth: null
    },
    prefixparams: 'useNanoPrefix'
  }
}

export default function () {
  return initialState()
}
