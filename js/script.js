$(document).ready(function() {

	function fetchQuery() {

		$("#search").on( "click", function() {
			var searchQuery = document.getElementById('query').value;
			var wikiAPICall = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search="+searchQuery;
			// console.log(wikiAPICall);
			$.ajax({
				url: wikiAPICall,
				type: "GET",
				dataType: "jsonp",
				success: function(wikiData) {
					for (i=0; i<wikiData[1].length; i++) {
						$(".r"+i).html("<div><a href=\""
							+wikiData[3][i]+"\" target=\"_blank\"><p>"
							+wikiData[1][i]+"</p></a>"
							+"<p>"+wikiData[2][i]+"</p></div>");
					}
				}
			})
		});

	}

	fetchQuery();

});