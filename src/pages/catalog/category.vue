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

            <v-button
              theme="primary"
              size="large" 
              @click="onFilter"
            >
              Применить
            </v-button>

            <v-button
              theme="danger"
              size="large" 
              @click="onReset"
            >
              Сбросить
            </v-button>
          </v-col>

          <v-col span="8">
            <v-row>
              <v-col>
                <v-collapse title="Бренды">
                  <input type="radio" v-model="filter.brand" value="Apple"> Apple<br>
                  <input type="radio" v-model="filter.brand" value="Samsung"> Samsung<br>
                  <input type="radio" v-model="filter.brand" value="Acer"> Acer
                </v-collapse>
              </v-col>

              <v-col>
                <v-collapse title="Цвет">
                  <input type="radio" v-model="filter.color" value="white"> Белый<br>
                  <input type="radio" v-model="filter.color" value="black"> Чёрный<br>
                  <input type="radio" v-model="filter.color" value="red"> Красный
                </v-collapse>
              </v-col>
            </v-row>

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
                    @add-to-favorites="onToggleFavorites"
                />
              </v-col>
            </v-row>
          </v-col>
      </v-row>

      <button 
        v-for="page in pagination.pageCount"
        @click="onChangePage(page)"
      >
        {{ page }}
      </button>
    </v-container>
  </v-layout-default>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from "vue-router";
    import { useCart, useFavorites } from '@/composables';
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VButton from '@/components/UI/VButton.vue';
    import VCollapse from '@/components/UI/VCollapse.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const route = useRoute();
    const router = useRouter();

    const filter = ref({
      brand: route.query.brand,
      color: route.query.color
    });

    const { products, pagination, getProductsCategory } = useCatalogCategory();
    const { onAddToCart } = useCart();
    const { onToggleFavorites } = useFavorites();

    getProductsCategory(route.params.category, filter.value);

    async function onFilter () {
      await getProductsCategory(route.params.category, filter.value);

      router.push({
        query: filter.value
      });
    }

    async function onReset () {
      filter.value = {
        brand: undefined,
        color: undefined
      }
      
      await getProductsCategory(route.params.category, filter.value);

      router.push({
        query: filter.value
      });
    }

    async function onChangePage (page) {
      await getProductsCategory(route.params.category, {
        _page: page
      });
    }
</script>