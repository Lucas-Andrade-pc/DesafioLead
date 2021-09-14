const API_KEY = '4c56117fc51c27d062fc540fc8f21c7e';
const API_BASE = 'https://api.themoviedb.org/3';
 
const basciFetch = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`, {headers:{ 'Accept':'application/json', 'Content-Type':'application/json'}})
    const json = await req.json();
    return json;
}
const bf = async(name) =>{
    const req = await fetch(`${API_BASE}/search/movie?api_key=${API_KEY}language=pt-br&query=${name}&page=1&include_adult=false`)
    const json = await req.json();
    return json;
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
//     getSearch: async() =>{
//         return [
//             {
//                 items: await bf(name)
//             }
//         ]
//     }
}

export const search = async(name) =>{
    console.log(name)
    console.log('RETORNEI ISSO ')
    return [
        {items: await bf(name)} 
    ];
}