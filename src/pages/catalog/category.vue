<template>
  <v-layout-default>
    <v-container>
        <v-row>
            <v-col span="4">
              <div>
                <h5>Бренды</h5>
                <input type="radio" v-model="filter.brand" value="Apple"> Apple<br>
                <input type="radio" v-model="filter.brand" value="Samsung"> Samsung<br>
                <input type="radio" v-model="filter.brand" value="Acer"> Acer
              </div>

              <div>
                <h5>Цвет</h5>
                <input type="radio" v-model="filter.color" value="white"> Белый<br>
                <input type="radio" v-model="filter.color" value="black"> Чёрный<br>
                <input type="radio" v-model="filter.color" value="red"> Красный
              </div>

              <br><br>

              <button @click="onFilter">
                Применить
              </button>
            </v-col>

            <v-col span="8">
              <v-row>
                <v-col
                    v-for="product in products"
                    span="4"
                    md="6"
                    sm="12"
                >
                  <v-catalog-card
                      :id="product.id"
                      :price="product.price"
                      :images="product.images"
                      :title="product.title"
                      :category="product.categoryId"
                      :is-favorites="product.isFavorites"
                      @add-to-cart="onAddToCart"
                  />
                </v-col>
              </v-row>
            </v-col>
        </v-row>
    </v-container>
  </v-layout-default>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from "vue-router";
    import { useCart } from '@/composables/useCart';
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const route = useRoute();

    const filter = ref({
      brand: '',
      color: ''
    });

    const { products, getProductsCategory } = useCatalogCategory();
    const { onAddToCart } = useCart();

    getProductsCategory(route.params.category, filter.value);

    function onFilter () {
      getProductsCategory(route.params.category, filter.value);
    }
</script>