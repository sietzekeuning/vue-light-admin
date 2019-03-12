<template>
    <vla-page right-bar>
        
        <template slot="header">
            Admin header
        </template>

        <template slot="buttons">
            <a class="btn btn-default mr-4">
                <i class="fal fa-plus-circle mr-1"></i>
                Default button
            </a>
            <a class="btn btn-primary">
                <i class="fal fa-plus-circle mr-1"></i>
                Header button
            </a>
        </template>

        <template slot="rightbar">lsdkfj</template>

        <div class="flex">

            <div class="w-1/3 pr-8">
                <vla-panel>
                    <template slot="header">User settings</template>
                    
                    <div class="flex items-center mb-2">
                        <div class="w-1/3 text-grey-darkest">Field</div>
                        <div class="flex-1">
                            <el-input v-model="item"></el-input>
                        </div>
                    </div>
                    
                    <div class="flex items-center mb-2">
                        <div class="w-1/3 text-grey-darkest">Field</div>
                        <div class="flex-1">
                            <input v-model="item" class="form-control">
                        </div>
                    </div>

                    <button type="button" @click="showMessage" class="btn btn-primary">Message</button>
                    <button type="button" @click="showNotification" class="btn btn-default">Notification</button>

                </vla-panel>
            </div>

        </div>

    </vla-page>
</template>

<script>
export default {
    data : () => ({
        item : null
    }),

    methods : {
        showMessage() {
            this.$message.success('Opgeslagen')
        },

        showNotification() {
            this.$notify.warning({
                title    : 'Incoming mail',
                message  : 'A new mail from info@kingwebsites.nl just came in',
                duration : 6000000
            })
        }
    }
}
</script>
