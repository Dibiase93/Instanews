# INSTANEWS

Instanews is one of my favourite project I've done. I was introduced to writing SCSS with partials, mixins, and variables. In this project I intergrated a selectric plugin and a hover effect that did 2 animations. One was to translate the position of the article content to slide into view and the other was to highlight the article using opacity from 0.7 to 1.

eg:

      &:hover {
      opacity: 1;

      .article-container {
        transform: translateY(0);
      }

## Technologies Used

- Sass/Scss
- Html
- JavaScript (AJAX from a NYTimes API)
- Selectric plugin

#### Learning Curve

- Learning how to integrate AJAX request.
- Introduction to SASS/SCSS.
- Learning how to dynamically change an option with a variable.

Overall, my favourite part of the project was using Scss and being able to use an API. Instanews opened my eyes to the power of Javascript, and specifically variables. I found it so amazing that I was able to use the value of selected option, to dynamically change the New York Times API to display new information.

eg:

      $.ajax({
      method: "GET",
      url:
      "https://api.nytimes.com/svc/topstories/v2/" +
      selected +
      "(.json?api-key=(your api key here))"
      })

       const selected = $(this).val();

### Instructions

Simply open link provided.

#### Challenges

My biggest struggle with this project was trying to intergrate accessability. I was having issues getting the reader to read my hiddin H1 as well as reading my selectric plugin.
