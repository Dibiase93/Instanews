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
          console.log(value);
          //   const articles = `<div> ${value.title} ${value.abstract}
          //   ${value.background} ${value.url}</div>`;
          $(".sections").append(`<div>${value.title}</div>`);
          $(".sections").append(`<div>${value.abstract}</div>`);
          const newLink = value.url;
          const bg = value.multimedia[4].url;
          console.log(bg);
          //   $(".sections").prop("background", `${value.background}`);
          $(".sections").append(
            `<a href= "${newLink}" style="background-image: url(${bg})"></a>`
          );
        }); //end of .each
      }); //end of .done
    } //end of if statement
  }); //end of on change function
}); //end of Javascript
