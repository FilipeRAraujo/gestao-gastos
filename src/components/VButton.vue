<template>
    <!-- v-input-label no-focus -->
    <div class="v-input-wrapper">
        <label class="v-input-label" :class="classObject">
            {{ vlabel }}
        </label>
        <input :id="vid"
            v-model="text"
            class="v-input"
            :class="classObject"
            v-on:focus="toggleFocus"
            v-on:blur="toggleFocus"
            :type="vtype"
            @input="handleInput"/>
    </div>
</template>
<script>
export default {
    name: 'VButton',
    prop: ['value'],
    data () {
        return {
            classObject: {
                active: false
            },
            text: '',
            content: this.value
        }
    },
    methods: {
        toggleFocus(){
            if(this.text.trim().length <= 0){
                this.classObject.active = !this.classObject.active;
            }
        },
        handleInput() {
            this.$emit('input', this.text);
        }
    },
    props: {
        vlabel: String,
        vid: String,
        vtype: String
    }
}
</script>
<style>
.v-input-wrapper {
    position: relative;
    margin-bottom: 16px;
}

.v-input-label {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    color: #000000a8;
    pointer-events: none;
    transition: all 0.2s;
    padding: 10px 16px;
    align-items: center;
}

.v-input-label.active {
    align-items: unset;
    font-size: smaller;
    padding: 0px 16px;
}

.v-input {
    transition: all 0.2s;
    background: lightgray;
    border: none;
    border-bottom: 1px solid;
    border-color: #00000061;
    padding: 18px 27px 13px 16px;
    border-radius: 5px 5px 0px 0px;
    width: 100%;
}
.v-input.active {
    border-color: #5800FF;
}
</style>