<template>
  <div class="relative flex-auto p-3">
    <label class="block text-lg font-medium text-gray-900" :name="name">
      {{ name }}
    </label>

    <input
      :id="name"
      :type="type"
      class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      :value="modelValue"
      @input="handleInput"
    />
    <span
      class="text-xs italic text-red-500 transition duration-300 ease-in-out"
    >
      {{ error }}
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  modelValue: string;
  type: string;
  error: string;
}>();
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();
function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>
