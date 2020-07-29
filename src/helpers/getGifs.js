
  export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=sL1shnpjFtZhUFi6KHIxDzFizDcpt3md`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return gifs;
    

}