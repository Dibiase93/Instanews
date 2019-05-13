# INSTANEWS

My 3rd project at Red Academy. Instanews is so far, my favourite project we've done. I was introduced to writing scss with partials including mixins, and variables. In this project I intergrated a selectric plugin and, 1 type of hover animations that did 2 animations. One was to translate the position of the article content to slide into view and the other was to highlight the article using opacity from 0.7 to 1.

eg:

      &:hover {
      opacity: 1;

      .article-container {
        transform: translateY(0);
      }

The rest of code can be found next to comment tags.
Find //animation code.

Overall, my favourite part of the project was using Scss and being able to use an API. Instanews opened my eyes to the power of Javascript, and specifically variables. I found it so amazing that I was able to use 1 variable, to change the specific text in the API that selected all of our article content, I thought I would have to re write all the javascript for each selected API.

eg:

      $.ajax({
      method: "GET",
      url:
      "https://api.nytimes.com/svc/topstories/v2/" +
      selected +
      ".json?api-key=CiPKzuEgMEr5iAez74KClBIAOmT4iTlJ"
      })

       const selected = $(this).val();

## Instructions

Simply open link provided.

### Challenges

I felt alot more comfortable this time through with flexbox, my biggest struggle with this project was trying to intergrate accessability. I was having issues getting the reader to read my hiddin H1 as well as reading my selectric plugin.

#### Learning Curve

Alot of my learning curve of CSS was answered when I was introduced to SASS/SCSS, the code seemed alot easier to orginize. I learnt how to use a plugin on my own, which was tough at first but made sense once I figured it out and now seems pretty easy. Also, of course what I mentioned above, but a big learning curve was seeing how 1 big function can be altered based off a variable.
