<template>
    <div>
        <div>Lista</div>
        <ul class="">
            <li v-for="(item, key) in items" v-bind:key="key">{{item.message}}</li>
        </ul>
        <button v-on:click="add">Adicionar</button>
    </div>
</template>
<script>

export default {
    name: 'List',
    props: {

    },
    data() {
        return {
            items: [
                { message: 'Algo' },
                { message: 'Outro' }
            ]
        }
    },
    components: {
        
    },
    methods: {
        add() {
            this.items.push({message: 'a'});
        }
    }
}
</script>