<template>
    <div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"

    export default Vue.extend({
        props: ["id", "title", "description"]
    });
</script>