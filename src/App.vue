<template>
    <div>
        <h1>App</h1>
        <task v-for="item in tasks" :key="item.id" v-bind="item"></task>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Task from './Task.vue'

    class Item {
        id: number;
        title: string;
        description: string;

        constructor(id: number, title: string, description: string) {
            this.id = id;
            this.title = title;
            this.description = description;
        }
    }

    export default Vue.extend({
        data() {
            return {
                tasks: [
                    new Item(1, "tesk1", "This is task"),
                    new Item(2, "tesk2", "This is task"),
                    new Item(3, "tesk3", "This is task"),
                    new Item(4, "tesk4", "This is task"),
                    new Item(5, "tesk5", "This is task"),
                ]
            }
        },
        components: {Task}
    });
</script>