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
                        // console.log(amiiboArray[0][0]);
                        for (var j = 0; j < amiiboArray[0].length; j++) {
                            const $amiiboBox = $("<div>").addClass("amiiboBox")
                            let $amiiboImage = $("<img>").attr("src", amiiboArray[0][j].image).appendTo($amiiboBox)
                            let $amiiboName = $("<p>").text(amiiboArray[0][j].character).appendTo($amiiboBox)
                            let $amiiboCounter = $("<p>").text(j)
                            $($amiiboBox).on("click", () => {
                                $amiiboBox.prependTo(".amiiboPage")
                                j = $($amiiboCounter).text();
                                let $amiiboTable = $("<table>").appendTo($amiiboBox).addClass("infoTable")
                                let $amiiboSeriesHolder = $("<tr>").appendTo($amiiboTable)
                                let $amiiboSeriesTitle = $("<th>").text("Amiibo Series ").appendTo($amiiboSeriesHolder)
                                let $amiiboSeries = $("<th>").text(amiiboArray[0][j].amiiboSeries).appendTo($amiiboSeriesHolder)
                                let $amiiboGameSeriesHolder = $("<tr>").appendTo($amiiboTable)
                                let $amiiboGameSeriesTitle = $("<th>").text("Game Series  ").appendTo($amiiboGameSeriesHolder)
                                let $amiiboGameSeries = $("<th>").text(amiiboArray[0][j].gameSeries).appendTo($amiiboGameSeriesHolder)
                                let $amiiboReleaseDateHolder = $("<tr>").appendTo($amiiboTable)
                                let $amiiboReleaseDateTitle = $("<th>").text("Release Date ").appendTo($amiiboReleaseDateHolder)
                                let $amiiboReleaseDate = $("<th>").text(amiiboArray[0][j].release.na).appendTo($amiiboReleaseDateHolder)
                                let $amiiboTableImage = $("<tr>").appendTo($amiiboTable)
                                let $amiiboSeriesImage = $("<th>").text("Image ").appendTo($amiiboTableImage)
                                let $amiiboImagePlacer = $("<th>").appendTo($amiiboTableImage)
                                let $amiiboBigImage = $("<img>").attr("src", amiiboArray[0][j].image).appendTo($amiiboImagePlacer)
                                $($amiiboBox).on("click", () => {
                                    $(".infoTable").empty()
                                    $amiiboBox.prependTo($amiiboWrapper)
                                })
                            })
                            $($amiiboBox).appendTo($amiiboWrapper)

                        }
                        $($amiiboWrapper).appendTo(".amiiboPage")


            }
                    amiiboList();








                            ;
                        })
                        // pokeBox(x)
                    })

                    //THEN PLACE THOSE IMAGES INTO BODY USING INITAL VARIABLE







    // })
