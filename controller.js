$(document).ready(function () {

    $('p').hide();


    // function addRow() {
    //     var tr = $("<tr>")
    //     $("<td>").text(countryName).appendTo($(tr))
    //     $("<td>").text("<img src='+" + countryflag + ">").appendTo($(tr))
    //     $("<td>").text(countryCode).appendTo($(tr))
    //     $("<td>").text(population).appendTo($(tr))
    //     $("tbody").append($(tr))


    // }




    $('#btnSearch').click(function () {
        var search = $('#search').val().toLowerCase();
        var url = "https://restcountries.eu/rest/v2/name/" + search + ""


        $(document).ajaxStart(function () {
            $('#btnSearch').attr('disable',true);
            $('#btnSearch').text('');
            $('#btnSearch').text('Searching');
        })

        $(document).ajaxStop(function () {
            $('#btnSearch').attr('disable', false);
            $('#btnSearch').text('Search');
        })


        $.ajax( {
		url:url,
		type:"get",
		error:funtion(e){
			alert("no result found")
		},
		success:funtion(data){
		$.each(data, function (key, val) {
                if (val.name.toLowerCase().substring(0, search.length) == search) {
                    $('tbody').append(
                        "<tr><td>" + val.name + "</td><td><img style='height:20px' src=" + val.flag + "></td><td>" + val.alpha3Code + "</td><td>" + val.population + "</td></tr>"
                    )
                }

            });
		}
      })
        emptyTable();
    })

});





