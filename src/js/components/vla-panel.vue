<template>
    <div class="vla-panel">
        <div class="vla-panel-header">
            <slot name="header"></slot>
        </div>
        
        <div class="vla-panel-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.vla-panel{
    @apply bg-white rounded-sm shadow;

    .vla-panel-header{
        @apply text-lg border-b border-grey-lighter py-4 px-6;
    }
    .vla-panel-body{
        @apply py-4 px-6 text-sm;
    }
}
</style>
