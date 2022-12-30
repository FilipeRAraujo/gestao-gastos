<template>
    <div class="login">
        <div class="screen-overlay">
            <div id="login-wrapper">
                <div id="login-box">
                    <div class="mb-16">
                        <h1>Entrar</h1>
                        <small>Por favor entre para continuar</small>
                    </div>
                    <VButton vid="campoEmail" vlabel="Email" vtype="text" v-model="email"></VButton>
                    <VButton vid="campoSenha" vlabel="Senha" vtype="password" v-model="password"></VButton>
                    <div class="text-end">
                        <button class="btn btn-primary mb-16" @click="login()">Entrar</button>
                    </div>
                    <small>Ainda não possui uma conta? <router-link to="/registrar">Crie uma</router-link></small>
                </div>
            </div>
        </div>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
</template>
<style scoped>
    @import '../assets/css/login-styles.css';
</style>
<script>
// @ is an alias to /src
import VButton from '@/components/VButton.vue'
import axios from "axios"

export default {
    name: 'LoginView',
    components: {
        VButton
    },
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            const { email, password } = this;
            const data = await axios.post("http://localhost:8000/login",
                { email: email, senha: password },
                    { mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json'
                        }}
                )
                .then((resp) => {
                    console.log("Sucesso", resp);
                })
                .catch((error) => {
                    console.log("ERROR: ", error, email, password);
                });
            console.log(data);
            //this.$session.start();
            //this.$session.set("jwt", token);
            // this.$http.post("url", {
            //     email: this.email,
            //     password: this.password
            // }).then(function (resp) {
            //     this.$session.start();
            //     console.log(resp);
            //     Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token;
            //     this.$router.push('/panel/search');
            // });
        }
    }
}
</script>
