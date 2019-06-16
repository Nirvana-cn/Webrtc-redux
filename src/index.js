import * as redux from 'redux'
import {reducer} from './webrtc/reducer'

let state = {
    pc1: {
        localSdp:'',
        remoteSdp:''
    },
    pc2: {
        localSdp: '',
        remoteSdp: ''
    }
}
window.store = redux.createStore(reducer, state)
window.store.subscribe(function () {
    console.log(window.store.getState())
})
