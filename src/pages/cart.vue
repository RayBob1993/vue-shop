<template>
    <v-container>
        <div>
            Сумма: {{ cart.total }}р
        </div>

        <hr>

        <div v-for="product in cart.products">
            <img :src="product.thumbnail" alt="">

            <h6>{{ product.title }}</h6>

            <div>{{ product.price }}</div>
        </div>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { api } from '@/utils/api';

    const cart = ref();

    api('/carts')
        .then(data => {
            cart.value = data.carts[0];
        });
</script>