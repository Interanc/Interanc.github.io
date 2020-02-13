// console.log($);
$(() => {
    // $("form").on('submit', (event) => {
    // event.preventDefault();
    let amiiboArray = []
    let $amiiboWrapper = $("<div>").addClass("amiiboWrap")
    let $amiiboHolder = $("<div>").addClass("amiiboHolder")

    // Variables ===============
    const $openBtn = $('#amiiboModalopen');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    // Event Handlers ===============
    const openModal = () => {
        $modal.css('display', 'block');
    }

    const closeModal = () => {
        $modal.css('display', 'none');
    }

    // Event Listeners ===============
    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);


    $('form').on('submit', (event) => {
        event.preventDefault();
        $('.amiiboWrap').empty()
    $.ajax({
        url:'https://www.amiiboapi.com/api/amiibo'
    }).then(
        (data) => {
            // console.log(data.amiibo);
            // let $amiiboImg = $("<img>").attr("src", data.amiibo[0].image).appendTo("body")

            const amiiboList = () => {
                                amiiboArray.push(data.amiibo)
                let userInput = $('input[type="text"]').val();
                console.log(userInput);


                console.log(amiiboArray[0][0]);
                for (var j = 0; j < amiiboArray[0].length; j++) {
                    const $amiiboBox = $("<div>").addClass("amiiboBox")
                    let $amiiboImage = $("<img>").attr("src", amiiboArray[0][j].image).addClass("amiiboImageBox")
                    let $amiiboName = $("<p>").text(amiiboArray[0][j].character)
                    if (amiiboArray[0][j].character === `${userInput}`) {
$amiiboImage.appendTo($amiiboBox)
$amiiboName.appendTo($amiiboBox)
$($amiiboBox).appendTo($amiiboWrapper)

}
else if (userInput === '') {
    $amiiboImage.appendTo($amiiboBox)
    $amiiboName.appendTo($amiiboBox)
    $($amiiboBox).appendTo($amiiboWrapper)

}
                    let $amiiboCounter = $("<p>").text(j)
                    let $amiiboBoxes = $('.amiiboBox')
                    $amiiboBox.on("click", () => {
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
                        let $amiiboTypeHolder = $("<tr>").appendTo($amiiboTable)
                        let $amiiboTypeTitle = $("<th>").text("Type  ").appendTo($amiiboTypeHolder)
                        let $amiiboType = $("<th>").text(amiiboArray[0][j].type).appendTo($amiiboTypeHolder)
                        let $amiiboSearchHolder = $("<tr>").appendTo($amiiboTable)
                        let $amiiboSearchTitle = $("<th>").text("Search  ").appendTo($amiiboSearchHolder)
                        let $amiiboSearch = $("<th>").appendTo($amiiboSearchHolder)
                        let $purchaseLink = $("<a>").text("Google Search").attr({href: `https://www.google.com/searchbyimage?site=search&sa=X&image_url=${amiiboArray[0][j].image}`, target: "_blank" }).appendTo($amiiboSearch)
                        let $amiiboTableImage = $("<tr>").appendTo($amiiboTable)
                        let $amiiboSeriesImage = $("<th>").text("Image ").appendTo($amiiboTableImage)
                        let $amiiboImagePlacer = $("<th>").appendTo($amiiboTableImage)
                        let $amiiboBigImage = $("<img>").attr("src", amiiboArray[0][j].image).appendTo($amiiboImagePlacer)
                        $($amiiboBox).on("click", () => {

                            $(".infoTable").empty()
                            $amiiboBox.prependTo($amiiboWrapper)
                        })
                    })

                }
                $($amiiboWrapper).appendTo(".amiiboPage")


            }
            amiiboList();
            })
            // amiiboList();








            ;
        })
        // pokeBox(x)
    })

    //THEN PLACE THOSE IMAGES INTO BODY USING INITAL VARIABLE







    // })
