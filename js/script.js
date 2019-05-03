$(function() {
  $("#select-form").on("change", function() {
    const selected = $(this).val();
    if (selected !== "") {
      console.log(selected);
      $.ajax({
        method: "GET",
        url:
          "https://api.nytimes.com/svc/topstories/v2/" +
          selected +
          ".json?api-key=CiPKzuEgMEr5iAez74KClBIAOmT4iTlJ"
      }).done(function(data) {
        $.each(data.results, function(index, value) {
          const newLink = value.url;
          const bg = value.multimedia[4].url;
          const title = value.title;
          const content = value.abstract;
          console.log(bg);
          bg;
          $(".sections").append(
            `<a href= "${newLink}" 
                title="${title}" 
                style="background-image: url(${bg});
                 background-repeat: no-repeat; 
                 background-size: cover; 
                 background-position: top center;">
                <p class= "article-content">${content}</p></a>`
          );
        }); //end of .each
      }); //end of .done
    } //end of if statement
  }); //end of on change function
}); //end of Javascript
