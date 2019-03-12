<template>
    <div>
        <transition name="fade">
            <div v-if="showBar" 
                class="fixed pin-l pin-r pin-t pin-b z-10" 
                style="background: rgba(166,173,179,.6)"
                @click="showBar = false"
            ></div>
        </transition>        
        
        <transition name="slide">
            <div v-show="showBar" 
                class="fixed w-96 pin-r pin-t pin-b bg-white shadow-lg z-20"
            >
                <a class="absolute pin-r mr-6 mt-4 text-2xl text-grey hover:text-black cursor-pointer"
                    @click="showBar = false"
                >
                    <i class="fal fa-times"></i>
                </a>

                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data : () => ({
        showBar : false
    }),

    methods : {
        show() {
            this.showBar = true
        }
    }
}
</script>
