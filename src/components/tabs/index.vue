<template lang="pug">
    .tabs
        ul.list
            li.item(v-for='tab in tabs')
                router-link(
                    :to='tab.href'
                ) {{tab.name}}
</template>

<script>
export default {
    data: function(){
        return {
            tabs: [
                {name: 'Tab 1', href: '/'},
                {name: 'Tab 2', href: '/blog'},
                {name: 'Tab 3', href: '/work'},
                {name: 'Tab 4', href: '/portfolio'}
            ]
        }
    }
}
</script>

<style lang="scss" src='./style.scss' scoped></style>

