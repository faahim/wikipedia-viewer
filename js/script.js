$(document).ready(function() {

	function fetchQuery() {

		$("#search").submit( function() {
			//Fetching the value from input element
			var searchQuery = document.getElementById('query').value;
			var wikiAPICall = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search="+searchQuery;
			$.ajax({
				url: wikiAPICall,
				type: "GET",
				dataType: "jsonp",
				success: function(wikiData) {
					//Removing existing results
					$(".wow").remove();

					$(".search-corner").css("padding-top", "50px");

					//Checking weather any result found or not and showing the message
					if (wikiData[1][0] == undefined) {
						$(".query-title").text("No result found for '"+searchQuery+"' 😕");
					} else {
						$(".query-title").text("Search results for '"+searchQuery+"'");
					}

					//Inserting search results into UI
					for (i=0; i<wikiData[1].length; i++) {
						$(".r"+i).html("<div class='wow fadeInUp'><a href='"+wikiData[3][i]+"' target='_blank'><p>"
							+wikiData[1][i]+"</p></a><p>"+wikiData[2][i]+"</p></div>");
					}
				}
			})
			event.preventDefault();
		});

	}

	fetchQuery();

});