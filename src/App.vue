<template>
    <div>
        <h2>{{ title }}</h2>
        <button v-on:click="$emit('this-is-test')">counter++ from component</button>
    </div>
</template>

<script>
    export default {
        props: ["title"]
    }
</script>