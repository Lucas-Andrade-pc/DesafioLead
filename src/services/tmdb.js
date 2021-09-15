const API_KEY = '4c56117fc51c27d062fc540fc8f21c7e';
const API_BASE = 'https://api.themoviedb.org/3';
 
const basciFetch = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`, 
    {headers:{ 'Accept':'application/json', 'Content-Type':'application/json'}}).then(res=> res.json())
    .then(data=> data)
    return req
}
export function searchMovies(name) {
    try{
        const req = fetch(`${API_BASE}/search/movie?api_key=${API_KEY}language=pt-br&query=${name}&page=1&include_adult=false`,
        {headers:{ 'Accept':'application/json', 'Content-Type':'application/json'}})
        .then(res=> res.json())
        .then(data=> data)
        return req
    } catch(error){
        console.log(err)
    }
}
export function getHomeList(endpoint){
    try{
        const res = fetch(`${API_BASE}${endpoint}&api_key=${API_KEY}`,
            {headers:{ 'Accept':'application/json', 'Content-Type':'application/json'}})
            .then(res=> res.json())
            .then(data=> data)
            return res
        
    } catch (err) {
        console.log(err)
    }
}

export default {
    getHomeList: () =>{
         return [
             {
                title:'Originais do Netflix',
                items: basciFetch(`/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY} `)
             },
            // {
            //     //title:'Recomendados para Voce',
            //     items: await basciFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY} `)
            // }
            // },
            // { 
            //     title:'Em Alta',
            //     items: await basciFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY} `)
            // },
            // {  r  
            //     title:'Ação',
            //     items:await basciFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY} `)
            // },
            // {  
            //     title:'Comédia',
            //     items:await basciFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY} `)
            // },
            // {    
            //     title:'terror',
            //     items:await basciFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY} `)
            // },
            // {    
            //     title:'Romance',
            //     items:await basciFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY} `)
            // },
            // {    
            //     title:'Documentarios',
            //     items:await basciFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY} `)
            // }
         ]
     },
}
