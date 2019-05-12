$(function() {
  $("#select-form").selectric({
    minWidth: 50
  });
  $("#select-form").on("change", function() {
    const selected = $(this).val();
    if (selected !== "sections") {
      $(".sections").html("");
      $("#loading").show();
      $.ajax({
        method: "GET",
        url:
          "https://api.nytimes.com/svc/topstories/v2/" +
          selected +
          ".json?api-key=CiPKzuEgMEr5iAez74KClBIAOmT4iTlJ"
      })
        .done(function(data) {
          const filteredData = data.results
            .filter(function(article) {
              return article.multimedia[4] !== undefined;
            })
            .slice(0, 12);
          $.each(filteredData, function(index, value) {
            const newLink = value.url;
            const bg = value.multimedia[4].url;
            const title = value.title;
            const content = value.abstract;
            $(".sections").append(
              `<a href= "${newLink}" 
                title="${title}" 
                style="background-image: url(${bg});
                 background-repeat: no-repeat; 
                 background-size: cover; 
                 background-position: top center;"><div class= "article-container">
                <p class= "article-content">${content}</p></div></a>`
            );
            // .selectric();
            $("#loading").hide();
          }); //end of .each
        })
        .fail(function() {
          alert("Please try again");
        })
        .always(function() {
          $("#loading").hide();
        }); //end of .always and .fail
    } //end of if statement
  }); //end of on change function
}); //end of Javascript
