<template>
	<div class="login">
		<div class="screen-overlay">
            <div id="login-wrapper">
                <div id="login-box">
                    <div class="mb-16">
                        <h1>Criar uma conta</h1>
                    </div>
                    <VButton vid="campoNome" vlabel="Nome" vtype="text" v-model="nome"></VButton>
                    <VButton vid="campoEmail" vlabel="Email" vtype="text" v-model="email"></VButton>
                    <VButton vid="campoSenha" vlabel="Senha" vtype="password" v-model="password"></VButton>
                    <VButton vid="campoConfSenha" vlabel="Confirmar Senha" vtype="password" v-model="confirmPassword"></VButton>
                    <div class="text-end">
                        <button class="btn btn-primary mb-16" @click="register()">Registrar</button>
                    </div>
                    <small>Já possui uma conta? <router-link to="/login">Entre</router-link></small>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
import VButton from '@/components/VButton.vue'
import axios from "axios"

export default {
    name: 'RegisterView',
    components: {
        VButton
    },
    data(){
        return {
            nome: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        async register(){
            const { nome, email, password, confirmPassword } = this;
            if(password.trim() == confirmPassword.trim()){
                const data = await axios.post("http://localhost:8000/register",
                { nome: nome, email: email, senha: password },
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
            }
        }
    }
}
</script>