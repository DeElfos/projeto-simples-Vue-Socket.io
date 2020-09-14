<template>
<div>
    <p v-if="isConnected">Você está conectado!</p>
    <p>Mensagem do servidor: "{{mensagemSocket}}"</p>
    <button @click="testaServidor()">Testar Servidor</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            isConnected: false,
            mensagemSocket: ''
        }
    },

    sockets: {
        connect() {
            // é disparado quando o socket conecta
            console.log('conectou')
            this.isConnected = true;
        },

        disconnect() {
            this.isConnected = false;
        },
        // Disparado apenas quando o servidor der um emit no metodo "mensagem".
        mensagem(data) {
            this.mensagemSocket = data
        }
    },

    methods: {
        testaServidor() {
            // Envia o evento "pingServer" para o servidor.
            this.$socket.emit('pingServer', 'PING!')
        }
    }
}
</script>
