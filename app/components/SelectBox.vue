<script setup lang="ts">
const props = defineProps<{
  options: string[]
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const open = ref(false)
const wrapper = ref<HTMLElement | null>(null)

function select(opt: string) {
  emit('update:modelValue', opt)
  open.value = false
}

function handleOutside(e: MouseEvent) {
  if (wrapper.value && !wrapper.value.contains(e.target as Node)) {
    open.value = false
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    open.value = !open.value
  }
  if (e.key === 'ArrowDown' && open.value) {
    const i = props.options.indexOf(props.modelValue)
    const next = props.options[Math.min(i + 1, props.options.length - 1)]
    if (next) emit('update:modelValue', next)
    e.preventDefault()
  }
  if (e.key === 'ArrowUp' && open.value) {
    const i = props.options.indexOf(props.modelValue)
    const prev = props.options[Math.max(i - 1, 0)]
    if (prev) emit('update:modelValue', prev)
    e.preventDefault()
  }
}

onMounted(() => document.addEventListener('mousedown', handleOutside))
onUnmounted(() => document.removeEventListener('mousedown', handleOutside))
</script>

<template>
  <div ref="wrapper" class="sb" :class="{ 'sb--open': open }">
    <button
      type="button"
      class="sb-trigger"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click="open = !open"
      @keydown="handleKeydown"
    >
      <span class="sb-value">{{ modelValue || placeholder }}</span>
      <Icon name="lucide:chevron-down" size="14" class="sb-chevron" />
    </button>

    <Transition name="sb-drop">
      <ul v-if="open" role="listbox" class="sb-list">
        <li
          v-for="opt in options"
          :key="opt"
          role="option"
          :aria-selected="opt === modelValue"
          class="sb-option"
          :class="{ 'sb-option--active': opt === modelValue }"
          @mousedown.prevent="select(opt)"
        >
          <span>{{ opt }}</span>
          <Icon v-if="opt === modelValue" name="lucide:check" size="13" class="sb-check" />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.sb {
  position: relative;
  width: 100%;
}

.sb-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 14px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-primary);
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s ease;
  outline: none;
}

.sb-trigger:focus-visible {
  border-color: var(--border-strong);
}

.sb--open .sb-trigger {
  border-color: var(--border-strong);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.sb-value {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sb-chevron {
  color: var(--text-tertiary);
  flex-shrink: 0;
  transition: transform 0.18s ease;
}

.sb--open .sb-chevron {
  transform: rotate(180deg);
}

.sb-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
  list-style: none;
  background: var(--bg-elevated);
  border: 1px solid var(--border-strong);
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.sb-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.1s ease, color 0.1s ease;
  user-select: none;
}

.sb-option:hover {
  background: var(--bg-elevated-hover);
  color: var(--text-primary);
}

.sb-option--active {
  color: var(--text-primary);
}

.sb-check {
  color: var(--text-tertiary);
  flex-shrink: 0;
}

/* Transition */
.sb-drop-enter-active,
.sb-drop-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}

.sb-drop-enter-from,
.sb-drop-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
