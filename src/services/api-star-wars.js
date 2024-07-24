export default async function fetchStarWars(){
    const urlStarWars = 'https://icanhazdadjoke.com/';
    const result = await fetch(urlStarWars, {
      headers: {
        Accept: 'application/json',
      },
    });
  
    const joke = await result.json();
  
    return joke;
  }
  