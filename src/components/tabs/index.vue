<template lang="pug">
    .tabs
        ul.list
            li.item(v-for='tab in tabs')
                a.link(href='#') {{tab}}
</template>

<script>
export default {
    data: function(){
        return {
            tabs: ['tab 1', 'tab 2', 'tab 3', 'tab 4']
        }
    }
}
</script>

<style lang="scss" src='./style.scss' scoped></style>

