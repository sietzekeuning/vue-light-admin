<template>
    <div class="vla-sidebar" :class="{wide}">
        <div class="h-14 flex items-center" :class="{'justify-around': !wide}">
            <a @click="toggleWide" class="vla-sidebar-link 2xl block p-2">
                <i class="fal fa-align-left"></i>
            </a>
        </div>

        <div v-for="route in routes" class="vla-sidebar-item">
            <router-link :to="route.path" class="vla-sidebar-link">
                <i class="fal" :class="route.icon"></i>
                <span v-if="wide" v-text="route.name"></span>
            </router-link>
            
            <div v-if="route.children" class="vla-submenu">
                <div class="absolute text-blue-darkest pin-l mt-4">
                    <svg height="10" width="8" fill="currentColor">
                        <polygon points="8,0 8,10 1,5" />
                    </svg>
                </div>
                <div class="vla-submenu-items">
                    <div v-for="child in route.children">
                        <router-link :to="child.path" class="vla-submenu-link">
                            {{ child.name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import routes from '../routes'
export default {
    data : () => ({
        routes,
        wide : false
    }),

    methods : {
        toggleWide() {
            this.wide = !this.wide
        }
    }
}
</script>

<style lang="scss">
.vla-sidebar{
    @apply w-20 bg-blue-darkest text-grey flex flex-col text-center;

    transition: width .5s;

    &.wide{
        @apply w-48 text-left;

        .vla-sidebar-link{
            @apply pl-6;
        }

    }
}

.vla-sidebar-link{
    @apply block py-4 text-white no-underline text-grey-light text-xl cursor-pointer whitespace-no-wrap overflow-hidden;

    &.router-link-active{
        @apply bg-blue-dark;
    }
    
    &:hover{
        @apply text-white;
    }

    span{
        @apply pl-1 text-sm;
    }
}

.vla-sidebar-item{
    @apply relative;

    &:hover .vla-sidebar-link{
        @apply text-white;
    }

    .vla-submenu{
        @apply hidden absolute pin-t w-64 ml-20 pl-2 z-50;

        .vla-submenu-items{
            @apply bg-blue-darkest shadow-lg rounded text-left py-2;
        }

        .vla-submenu-link{
            @apply text-grey-light block py-2 px-4 no-underline;

            &:hover{
                @apply bg-blue-dark text-white;
            }
        }
    }

    &:hover .vla-submenu{
        @apply block;
    }
}

.wide .vla-sidebar-item{
    .vla-submenu{
        @apply ml-48;
    }
}

</style>
