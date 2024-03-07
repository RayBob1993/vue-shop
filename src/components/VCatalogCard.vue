<template>
    <article class="v-catalog-card">
        <router-link :to="`/catalog/${category}/${id}`">
            <img :src="image" class="v-catalog-card__image">
        </router-link>

        <router-link :to="`/catalog/${category}/${id}`">
            {{ title }}
        </router-link>

        <br>

        <div>
            {{ price }} р.
        </div>

        <br>

        <v-input-number v-model="count"/>

        <br>

        <v-button
            :theme="currentThemeFavoriteButton"
            size="large"
            wide
            @click="onAddToFavorites"
        >
            {{ isFavorites ? 'Удалить из избранного' : 'Добавить в избранное' }}
        </v-button>

        <v-button
            theme="primary"
            size="large"
            wide
            @click="onAddToCart"
        >
            Добавить в корзину
        </v-button>
    </article>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import VButton from '@/components/UI/VButton.vue';
    import VInputNumber from '@/components/UI/VInputNumber.vue';

    const props = defineProps({
        category: {
            type: [String, Number]
        },
        id: {
            type: Number
        },
        price: {
            type: Number
        },
        title: {
            type: String
        },
        image: {
            type: String
        },
        isFavorites: {
            type: Boolean
        }
    });

    const emit = defineEmits([
        'addToCart',
        'addToFavorites'
    ]);

    const count = ref(1);

    const currentThemeFavoriteButton = computed(() => {
        return props.isFavorites
            ? 'danger'
            : 'success'
    });

    function onAddToCart () {
        emit('addToCart', {
            title: props.title,
            image: props.image,
            price: props.price,
            id: props.id,
            quantity: count.value
        });
    }

    function onAddToFavorites () {
        emit('addToFavorites', {
            id: props.id,
            isFavorites: !props.isFavorites
        });
    }
</script>

<style>
    .v-catalog-card {
        border: 1px solid;
    }

    .v-catalog-card__image {
        display: block;
        width: 100%;
        height: 200px;

        object-fit: cover;
    }
</style>