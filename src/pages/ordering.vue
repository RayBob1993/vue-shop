<template>
    <v-layout-default>
        <v-container>
            <div>
                <h4>Куда доставить</h4>

                <label>
                    Адрес<br>
                    <input type="text" v-model="model.address">
                </label>
            </div>

            <div>
                <h4>Персональные данные</h4>

                <label>
                    Имя<br>
                    <input type="text" v-model="model.user.firstName">
                </label>

                <br>

                <label>
                    Фамилия<br>
                    <input type="text" v-model="model.user.lastName">
                </label>
            </div>

            <div>
                <h4>Способ оплаты</h4>

                <div>
                    <label><input type="radio" v-model="model.paymentId" value="1" name="payment"> При получении</label>
                    <label><input type="radio" v-model="model.paymentId" value="2" name="payment"> Онлайн</label>
                    <label><input type="radio" v-model="model.paymentId" value="3" name="payment"> Наличными</label>
                    <label><input type="radio" v-model="model.paymentId" value="4" name="payment"> Переводом</label>
                </div>
            </div>

            <div>
                <h4>Тип доставки</h4>
                
                <div>
                    <label><input type="radio" v-model="model.deliveryId" value="1" name="delivery"> Почта мать его России</label>
                    <label><input type="radio" v-model="model.deliveryId" value="2" name="delivery"> Сдек</label>
                    <label><input type="radio" v-model="model.deliveryId" value="3" name="delivery"> Самовывоз</label>
                    <label><input type="radio" v-model="model.deliveryId" value="4" name="delivery"> Курьер</label>
                </div>
            </div>

            <div>
                <h4>Промокод на скидку</h4>

                <input type="text" v-model="model.promocode">
            </div>

            <br><br>

            <v-button 
                theme="primary"
                size="medium"
                @click="onSubmit"
            >
                Оформить заказ
            </v-button>
        </v-container>
    </v-layout-default>
</template>

<script setup>
    import { ref } from 'vue';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import VButton from '@/components/UI/VButton.vue';
    import { useOrdering } from '@/composables';

    const { createOrder } = useOrdering();

    const model = ref({
        address: '',
        user: {
            firstName: '',
            lastName: ''
        },
        paymentId: '',
        deliveryId: '',
        promocode: ''
    });

    function onSubmit () {
        createOrder(model.value);
    }
</script>