<template>
<div>
    <p v-if="isConnected">Você está conectado!</p>
    <p>Mensagem do servidor: "{{socketMessage}}"</p>
    <button @click="testaServidor()">Testar Servidor</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            isConnected: false,
            socketMessage: ''
        }
    },

    sockets: {
        connect() {
            // Fired when the socket connects.
            this.isConnected = true;
        },

        disconnect() {
            this.isConnected = false;
        },
        // Fired when the server sends something on the "messageChannel" channel.
        messageChannel(data) {
            this.socketMessage = data
        }
    },

    methods: {
        testaServidor() {
            // Send the "pingServer" event to the server.
            this.$socket.emit('testaServer', 'PING!')
        }
    }
}
</script>
