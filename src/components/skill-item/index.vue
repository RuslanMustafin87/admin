<template lang="pug">
    tr
                    td {{skill.name}}
                    td 
                        input(type='text'
                            :value='skill.percents'    
                        )
                    td %
</template>

<script>
export default {
    props:{
        skill: Object
    }
}
</script>
