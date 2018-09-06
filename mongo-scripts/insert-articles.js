/**
 * File: insert-articles.js
 * Author: Steven Weber
 * 
 * About:
 * ======
 * With this script you can directly insert some articles to db for testing.
 * 
 * How to use:
 * ==========
 */

conn = new Mongo();
db = connect("localhost:27017/fokussimus");
db.articles.drop();
db.articles.insert({
  title: "The first post is always a bad one.",
  summary: "This is just a great summary.",
  tags: ["fun", "good"],
  content: "# Intro"
    + "Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like `cmd-b` or `ctrl-b`."
    + ""
    + "## Lists"
    + "Unordered lists can be started using the toolbar or by typing `* `, `- `, or `+ `. Ordered lists can be started by typing `1. `."
    + ""
    + "#### Unordered"
    + "* Lists are a piece of cake"
    + "* They even auto continue as you type"
    + "* A double enter will end them"
    + "* Tabs and shift-tabs work too"
    + ""
    + "#### Ordered"
    + "1. Numbered lists..."
    + "2. ...work too!"
    + ""
    + "## What about images?"
    + "![Yes](https://i.imgur.com/sZlktY7.png)"
});

db.articles.insert({
  title: "Irrelefant (Pflanze)",
  summary: "Der Irrelephant ist ein häufiges Gewächs aus der Familie der Unwichtigen.",
  tags: ["fun", "good"],
  content: "# Lebensweise"
 + "Der Irrelephant ernährt sich von B-Langlos-Strahlung. Er kann ein sehr hohes Alter erreichen. Das Wachstum endet nicht mit Erreichen der Fortpflanzungsfähigkeit. Daher wird der Irrelephant von Betroffenen sehr gefürchtet. Vor allem in geschlossenen Büros und anderen Anstalten nimmt der Irrelephant im Laufe der Zeit immer größeren Platz ein, die zu einem beschleunigten Gebäudewachstum führen. Oft ist dann eine Vernichtung des Irrelephanten nur durch Beseitigung seines Wohnsitzes möglich. Dies erfordert meist eine Revolution, und ist eine schmerzhafte Prozedur."
 + ""
 + "Das Pflanzen eines Irrelephanten ist entgegen landläufiger Meinung strafbar, und wird zuverlässig mit Tod durch Kleinkariertheit bestraft."
 + "" 
 + "Aussehen"
 + "Der Irrelephant besitzt einen knotigen Stamm und lila gestreifte Blätter. Dies ist allerdings nur für Zauberer und Kleinkinder ersichtlich. Für den Großteil der Bevölkerung ist der Irrelephant unsichtbar."
 + "" 
 + "Die Anwesenheit eines Irrelephanten läßt sich dennoch auch für den Laien zuverlässig an einem durchdringenden Geruch nach fauligem Maschendrahtzaun und nichtrostenden Computermäusen feststellen."
 + ""
 + "Geschichtliche Bedeutung"
 + "Vor einigen Jahren konnte nachgewiesen werden, dass die Pyramiden von Gizeh lediglich drei Meter hoch ausgeführt wurden. Durch einen geschickt im Innern platzierten Irrelephanten und ständiges Verlesen der pharaonischen Rülpsübungen konnten sie innerhalb von nur wenigen Jahrzehnten ihre heute beachtliche Größe erreichen. Die Pharaonen konnten so zur Freude der Gewerkschaften erheblich Bau- und Menschenmaterial sparen."
});
