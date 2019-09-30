# INSTANEWS

My 3rd project at Red Academy. Instanews is so far, my favourite project we've done. I was introduced to writing scss with partials including mixins, and variables. In this project I intergrated a selectric plugin and, 1 type of hover animations that did 2 animations. One was to translate the position of the article content to slide into view and the other was to highlight the article using opacity from 0.7 to 1.

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

Overall, my favourite part of the project was using Scss and being able to use an API. Instanews opened my eyes to the power of Javascript, and specifically variables. I found it so amazing that I was able to use 1 variable, to change the specific text in the API that selected all of our article content, I thought I would have to re write all the javascript for each selected API.

eg:

      $.ajax({
      method: "GET",
      url:
      "https://api.nytimes.com/svc/topstories/v2/" +
      selected +
      "(.json?api-key=(your api key here))"
      })

       const selected = $(this).val();

## Instructions

Simply open link provided.

### Challenges

I felt alot more comfortable this time through, with flexbox. My biggest struggle with this project was trying to intergrate accessability. I was having issues getting the reader to read my hiddin H1 as well as reading my selectric plugin.

#### Learning Curve

Alot of my learning curve of CSS was answered, when I was introduced to SASS/SCSS, the code seemed alot easier to orginize. I learnt how to use a plugins on my own. First it was tough, but made sense once I figured out how to use plugins. Now, looking back seems pretty easy. Also, of course what I mentioned above, but a big learning curve was seeing how 1 big function can be altered to have multiple uses based off variables.
