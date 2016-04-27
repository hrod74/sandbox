/*

- One of the commands must utilize the list of people in the class to send a direct message or reply.
- Use at least 1 conditional to change the outcome of a Slackbot.
- Leverage a for loop to iterate over a collection



I want my bot to say hola when he hears the word hi or hello
I want to display images of darth vader when some says may the force be with you
I want to display a random quote when someone says cool or awesome
I want reply darth bots favorite movie and song when asked


*/
module.exports = function(robot) {
   robot.hear(/hi|hello/i, function(msg) {
    return msg.send("Hola Amigo!");
  });
   robot.respond(/cool|awesome/i, function(msg) {
    return msg.send("Obi Wan is a fool");
  });
  robot.respond(/star wars/i, function(msg){
    var quotes;
    quotes = ["The force is with you!","Luke, I am you father","Join me and we will rule the galaxy","Obi Wan is a fool"];
    return msg.send(msg.random(quotes));
  })
  robot.hear(/very cool|ship it|nice job/i, function(res){
    var darth;
    darth = ["http://cdn.bgr.com/2015/08/darth-vader.jpg", "http://www.nerdcotics.com/wp-content/uploads/2015/01/Slide48op-e1420312079300.jpg", "http://content.pulse.ea.com/content/starwars-ea-com/en_US/starwars/battlefront/news-articles/the-villains-of-star-wars--battlefront---darth-vader/_jcr_content/featuredImage.img.jpg"];
    return res.send(res.random(darth));
  })
  robot.respond(/what is your favorite (.*)/i, function(msg){
    var fav;
    fav = msg.match[0];
    if (fav = "thing to do"){
      return msg.send("crushing rebel scum!");
    } else {
      return msg.reply("I don't have a favorite, how about you?");
    }
  });

};
