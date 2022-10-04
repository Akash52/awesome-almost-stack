<template>
  <form @submit.prevent="submit">
    <FormInput
      v-model="username"
      name="Username"
      type="text"
      :error="usernameSatus.message"
    />
    <FormInput
      v-model="password"
      name="Password"
      type="password"
      :error="passwordStatus.message"
    />
    <button
      class="flex justify-center px-3 py-3 mx-auto text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
      :class="{ disabled: !usernameSatus.valid || !passwordStatus.valid }"
    >
      Sign UP
    </button>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import FormInput from './FormInput.vue';
import { required, length, Status, validate } from '../validation';
import { User, useStore } from '../store';
import { useModal } from '@/useModal';

export default defineComponent({
  name: 'App',
  components: { FormInput },
  setup() {
    const username = ref('username');

    const usernameSatus = computed<Status>(() => {
      return validate(username.value, [
        required(),
        length({ min: 5, max: 10 }),
      ]);
    });

    const password = ref('password');

    const passwordStatus = computed<Status>(() => {
      return validate(password.value, [
        required(),
        length({ min: 10, max: 20 }),
      ]);
    });

    const store = useStore();
    const modal = useModal();

    const submit = async (evt: Event) => {
      if (!usernameSatus.value.valid || !passwordStatus.value.valid) {
        return;
      }
      const newUser: User = {
        id: '-1',
        username: username.value,
        password: password.value,
      };
      await store.createUser(newUser);
      modal.hideModal();
    };

    return {
      passwordStatus,
      usernameSatus,
      username,
      password,
      submit,
    };
  },
});
</script>

<style></style>
