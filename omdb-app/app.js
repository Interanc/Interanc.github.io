console.log($);
$(() => {
let pokeList = []
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
                    
                    console.log(pokeList[1].sprites.front_default);
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
