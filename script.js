async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        const name = document.getElementById("search").value;
        console.log(name);
        const url = "https://www.omdbapi.com/?apikey=5a8e4bab&s=" + name;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON
        const movieHolder = document.getElementById("movieHolder");
        for (movie of json.Search) {
            //  Create a div to hold each image and title 
            const div = document.createElement("div")
            //  Give the div the css class of CARD
            div.classList.add("card");
            // Create an image element
            const img = document.createElement("img");
            //      point it to the image from this movie            
            img.src = movie.Poster;
            img.width = 100;
            div.append(img)
            // Create a CONTAINER div to hold the title and year.
            const container = document.createElement("div")
            // Give the CONTAINER div the style of container
            container.classList.add("container")

            const title = document.createElement("h3")
            title.textContent = movie.Title+ ": "+movie.Year
            // Add the CONTAINER to the CARD
            div.append(title)
            div.append(container)
            // Add all the elements to the movieHolder element
            movieHolder.append(div)
        }


    }
    catch (error) {
        console.log(error)
    }
}