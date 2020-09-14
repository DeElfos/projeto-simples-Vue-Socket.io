import Vue from 'vue';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

// import { Store } from './index'

export const SocketInstance = socketio.connect('http://pc-syall:7777');

Vue.use(
    new VueSocketIO({
        debug: true,
        connection: SocketInstance
    })
)