console.log($);
$(() => {
    let pokeList = []
    let $pokemonHolder = $("<div>").addClass("pokeWrap")
    // var pokemonList =
    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon?limit=60'
    }).then(
        (data) => {
            // console.log(data.results);
            const pokemonList = () => {
                for (var i = 1; i < data.results.length; i++) {
                    $.ajax({
                        url:'https://pokeapi.co/api/v2/pokemon/'+ i
                    }).then(
                        (data) => {
                            pokeList.push(data)
                            if (pokeList.length == (i - 1)) {
                                let x = pokeList.length
                                // console.log(pokeList.length);
                                for (var j = 0; j < x; j++) {
                                    // console.log(pokeList[j].sprites.front_default);
                                    let $pokeImage = $("<img>").attr("src", pokeList[j].sprites.front_default).appendTo($pokemonHolder)
                                }
                                $($pokemonHolder).appendTo("body")
                                // console.log(pokeList[1].sprites.front_default);
                                // return pokeList
                            }

                        }
                    )

                }

            }
            pokemonList();
            // console.log(pokeList[1]);
            // console.log(pokeList);
            // let $img = $("<img>").attr("src",)

        }

    )



    $("form").on('submit', () => {


    })


})
