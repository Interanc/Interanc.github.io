console.log($);
$(() => {
    // pokemonList();
    // $("form").on('submit', (event) => {
    // event.preventDefault();
    let amiiboArray = []
    let $amiiboWrapper = $("<div>").addClass("amiiboWrap")
    let $amiiboHolder = $("<div>").addClass("amiiboHolder")
    $.ajax({
        url:'https://www.amiiboapi.com/api/amiibo'
    }).then(
        (data) => {
            // console.log(data.amiibo);
            // let $amiiboImg = $("<img>").attr("src", data.amiibo[0].image).appendTo("body")

            const amiiboList = () => {
                    amiiboArray.push(data.amiibo)
                        // console.log(amiiboArray[0][0].image);
                        for (var j = 0; j < 30; j++) {
                            const $amiiboBox = $("<div>").addClass("amiiboBox")
                            let $amiiboImage = $("<img>").attr("src", amiiboArray[0][j].image).appendTo($amiiboBox)
                            $($amiiboBox).on("click", () => {

                                $amiiboBox.prependTo("body")
                                $($amiiboBox).on("click", () => {
                                    $amiiboBox.prependTo($amiiboWrapper)
                                })
                            })
                            $($amiiboBox).appendTo($amiiboWrapper)

                        }
                        $($amiiboWrapper).appendTo("body")


            }
                    amiiboList();








                            ;
                        })
                        // pokeBox(x)
                    })

                    //THEN PLACE THOSE IMAGES INTO BODY USING INITAL VARIABLE







    // })
