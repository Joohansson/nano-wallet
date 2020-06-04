export function initialState () {
  return {
    // SETTINGS CAN BE CHANGED
    settings: {
      pow: 1,
      changeaddress: false,
      node: {
        address: '1.nanos.cc',
        protocol: 'https',
        port: 443,
        path: '/proxy',
        headers: {
          'Content-Type': 'application/json'
        },
        auth: 'Basic d2FsbGV0OlQ5R3ZaMXVrdkNDR0tTUFRlbDFkZVplNVZ5RXYwY255'
      },
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
    }
  }
}

export default function () {
  return initialState()
}
