<template>
    <div class="flex-1 flex flex-col">
        <div class="bg-white shadow h-14 flex justify-between px-6">
            
            <div class="flex items-center text-xl">
                <slot name="header"></slot>
            </div>

            <div class="flex items-center">
                <slot name="buttons"></slot>
                <a v-if="rightBar" 
                    @click="$refs.right.show()"
                    class="block ml-4 cursor-pointer hover:text-grey-dark p-2 -mr-2">
                    <i class="fal fa-align-right text-2xl"></i>
                </a>
            </div>
        </div>

        <div class="p-6">
            <slot></slot>
        </div>
        
        <vla-rightbar ref="right">
            <slot name="rightbar"></slot>
        </vla-rightbar>

    </div>
</template>

<script>
export default {
    props : {
        rightBar : {
            type    : Boolean,
            default : false
        }
    }

}
</script>
