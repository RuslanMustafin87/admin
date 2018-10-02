const skills = {
    state: {
        data: []
    },
    actions:{
        fetchSkill({state, rootGetters}){
            const {$http} = rootGetters;
            $http.get('../../components/about/data.json').then(respons=>{
                state.data = respons.body
            }, error=>{
                console.error(error)
            })
            // console.log($http);
            // console.log(rootGetters)
        }
    }
}

export default skills;