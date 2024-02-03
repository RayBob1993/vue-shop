<template>
    <header class="v-header">
        <v-container>
            <div class="v-header__inner">
                <v-logo/>

            <v-menu/>
            </div>
        </v-container>
    </header>
</template>

<script setup>
    import VLogo from '@/components/VLogo.vue';
    import VMenu from '@/components/VMenu.vue';
    import VContainer from '@/components/VContainer.vue';
</script>

<style>
    .v-header {
        padding: 10px 0;
        border-bottom: 1px solid;
    }

    .v-header__inner {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 0 100px;
    }
</style>