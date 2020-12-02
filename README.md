# PokeHunt

PokeHunt is one the best *PokeDex* that you can find out there. This project uses the famous [Pokemon API](https://pokeapi.co/). **React** is used to build the UI and **Redux** helps us to manage the global state with *reducers* and *actions*

## Running the project

Use **npm** to run the following scripts

```
npm run install
npm run start
```
This will install all dependencies and start the devServer on port 8080

```
npm run build
```
This command will bundle up everything for production 

## Features
* You can navigate through a vast collection of Pokemons. If you are a hard fan of the first generations, fear not, we've got you cover 😄
* You can check stats and info for every Pokemon
* You can add Pokemons to your vault and have their info handy if you need a quick look

### Future Features:
* You will be able to search for the Pokemon that you want
> Note: Keep in mind that this API provides more than 1000 resources (Pokemons) and since everything is client-side-rendered, this option may have a huge impact on the performance.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

> Future of the project:
The app performance is not the best, is not bad tho, keep in mind that we are fetching more than 1000 resources.

> The pagination works really well, but the initial page load can take quite a long time, even more if you use the app on your phone, which is a boomer since this layout on mobile devices looks terrific. Nonetheless, the team is currently working in a new version, from the ground up.

> The primary goal of this new version is the performance, therefore the implementation of server-side-rendering. We've got high expectations with PokeHunt, we want a fast and awesome experience.



## License
[MIT](https://choosealicense.com/licenses/mit/)
