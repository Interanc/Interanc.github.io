console.log($);
$(() => {
    //VARIABLE INITIALIZATION
    let pokeList = []
    let $pokemonHolder = $("<div>").addClass("pokeWrap")
    /* INITAL API CALL TO GET ALL THE VARIABLES.
        VARIABLES ARE NESTED IN A SECOND API.
    */
    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon?limit=60'
    }).then(
        (data) => {
            /*
            SECOND API TRAVERSAL. ITERATE OVER THE ARRAY TO GET THE IMAGES THAT DISPLAY.
            */
            const pokemonList = () => {
                for (var i = 1; i < data.results.length; i++) {
                    $.ajax({
                        url:'https://pokeapi.co/api/v2/pokemon/'+ i
                    }).then(
                        (data) => {
                            pokeList.push(data)
            //ONLY OUTPUT THE FINAL RESULT
                            if (pokeList.length == (i - 1)) {
                                let x = pokeList.length
            //THEN ITERATE TO GRAB AND PLACE IMAGES
                                for (var j = 0; j < x; j++) {
                                    let $pokeImage = $("<img>").attr("src", pokeList[j].sprites.front_default).appendTo($pokemonHolder)
                                }
            //THEN PLACE THOSE IMAGES INTO BODY USING INITAL VARIABLE
                                $($pokemonHolder).appendTo("body")
                            }

                        }
                    )

                }

            }
            pokemonList();

        }

    )



    $("form").on('submit', () => {


    })


})
