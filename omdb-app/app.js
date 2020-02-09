console.log($);
$(() => {
    // pokemonList();
    // $("form").on('submit', (event) => {
        // event.preventDefault();
            //VARIABLE INITIALIZATION
            let pokeList = []
            let $pokemonWrapper = $("<div>").addClass("pokeWrap")
            let $pokemonHolder = $("<div>").addClass("pokeHolder")
            /* INITAL API CALL TO GET ALL THE VARIABLES.
            VARIABLES ARE NESTED IN A SECOND API.
            */
            $.ajax({
                url:'https://pokeapi.co/api/v2/pokemon?limit=30'
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
                                        //TESTER CODE
                                        // console.log(pokeList[0].types[0].type.url);
                                        //TESTER CODE END
                                        let x = pokeList.length

                                        //CREATING OUR POKEMON OUTPUT
                                        const pokeBox = (num) => {
                                            for (var j = 0; j < num; j++) {
                                                const $pokeBox = $("<div>").addClass("pokeBox")
                                                let $pokeImage = $("<img>").attr("src", pokeList[j].sprites.front_default).appendTo($pokeBox)
                                                let $pokeType = $("<p>").text(pokeList[j].types[0].type.url)
                                                //GRABBING POKEMON NAME
                                                let $pokeName = $("<p>").text(pokeList[j].name.toUpperCase()).appendTo($pokeBox)
                                                $($pokeBox).on("click", () => {
                                                    // $.ajax({
                                                    //     url: $pokeType
                                                    // })
                                                    console.log($pokeType);
                                                    $pokeBox.prependTo("body")
                                                    $($pokeBox).on("click", () => {
                                                        $pokeBox.prependTo($pokemonWrapper)
                                                    })
                                                })
                                                $($pokeBox).appendTo($pokemonWrapper)

                                            }
        ;
                                        }
                                                                        pokeBox(x)
                                    }

                                    //THEN PLACE THOSE IMAGES INTO BODY USING INITAL VARIABLE

                                    $($pokemonWrapper).appendTo("body")
                                }


                        )

                    }

                }




                pokemonList();
                // divMaker();
            })

    // })




})
