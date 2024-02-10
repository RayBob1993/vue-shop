<template>
    <div class="v-catalog-card">
        <router-link :to="`/catalog/${category}/${id}`">
            {{ title }}
        </router-link>

        <br>

        <input type="number" v-model="count">

        <br>

        <button @click="onAddToCart">
            Добавить в корзину
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        category: {
            type: String
        },
        id: {
            type: Number
        },
        title: {
            type: String
        }
    });

    const emit = defineEmits([
        'addToCart'
    ]);

    const count = ref(1);

    function onAddToCart () {
        emit('addToCart', {
            id: props.id,
            quantity: count.value
        });
    }
</script>