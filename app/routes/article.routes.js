var validator = require('./secure.js')

module.exports = (app) => {
  const articles = require('../controllers/articles.controller.js');

  /**
   * @api {post} /articles Add a new article 
   * @apiPermission author
   * @apiName CreateArticle
   * @apiGroup Article
   * 
   * @apiParamExample {json} Request-Example:
   * {
   *     "meta": null,
   *     "hidden": false,
   *     "comments": [],
   *     "_id": "5b977b9799ce6b97e9e84e29",
   *     "title": "Irrelefant (Pflanze) 2",
   *     "summary": "Der Irrelephant ist ein häufiges Gewächs aus der Familie der Unwichtigen.",
   *     "tags": [
   *         "fun",
   *         "good"
   *     ],
   *     "content": "# LebensweiseDer Irrelephant ernährt sich von B-Langlos-Strahlung. Er kann ein sehr hohes Alter erreichen. Das Wachstum endet nicht mit Erreichen der Fortpflanzungsfähigkeit. Daher wird der Irrelephant von Betroffenen sehr gefürchtet. Vor allem in geschlossenen Büros und anderen Anstalten nimmt der Irrelephant im Laufe der Zeit immer größeren Platz ein, die zu einem beschleunigten Gebäudewachstum führen. Oft ist dann eine Vernichtung des Irrelephanten nur durch Beseitigung seines Wohnsitzes möglich. Dies erfordert meist eine Revolution, und ist eine schmerzhafte Prozedur.Das Pflanzen eines Irrelephanten ist entgegen landläufiger Meinung strafbar, und wird zuverlässig mit Tod durch Kleinkariertheit bestraft.AussehenDer Irrelephant besitzt einen knotigen Stamm und lila gestreifte Blätter. Dies ist allerdings nur für Zauberer und Kleinkinder ersichtlich. Für den Großteil der Bevölkerung ist der Irrelephant unsichtbar.Die Anwesenheit eines Irrelephanten läßt sich dennoch auch für den Laien zuverlässig an einem durchdringenden Geruch nach fauligem Maschendrahtzaun und nichtrostenden Computermäusen feststellen.Geschichtliche BedeutungVor einigen Jahren konnte nachgewiesen werden, dass die Pyramiden von Gizeh lediglich drei Meter hoch ausgeführt wurden. Durch einen geschickt im Innern platzierten Irrelephanten und ständiges Verlesen der pharaonischen Rülpsübungen konnten sie innerhalb von nur wenigen Jahrzehnten ihre heute beachtliche Größe erreichen. Die Pharaonen konnten so zur Freude der Gewerkschaften erheblich Bau- und Menschenmaterial sparen.",
   *     "author": Steven Weber,
   *     "date": null,
   *     "link": irrelefant-pflanze,
   *     "title_img": null,
   *     "updatedAt": "2018-09-24T11:01:54.983Z"
   * }
   * 
   * */
  app.post('/articles', validator.verifyToken, articles.create);


  /**
   * @api {get} /articles?authors=array&tags=array&published=boolean Get all articles 
   * @apiName GetArticles
   * @apiGroup Article
   * 
   * @apiParam {array} [authors] Query articles by authors
   * @apiParam {array} [tags] Query articles by tags
   * @apiParam {boolean} [published] Query articles by published oder non-published
   * 
   * @apiSuccess {Array[Article]}  articles                List of articles
   * @apiSuccess {Guid}         articles.title             Title
   * @apiSuccess {String}       articles.author            Author and photographer
   * @apiSuccess {String}       articles.title_img         Image of thumbnail
   * @apiSuccess {String}       articles.summary           Summary of thumbnail 
   * @apiSuccess {String}       articles.content           Content written in markdown
   * @apiSuccess {Date}         articles.date              Date of creation
   * @apiSuccess {String}       [articles.hidden]          Idicates whether the article is published already
   * @apiSuccess {Array[]}      [articles.comments]        Readers comments
   * @apiSuccess {String}       articles.comments.author   Comment author
   * @apiSuccess {String}       articles.comments.body     Comment text
   * @apiSuccess {Date}         articles.comments.published Idicates whether the comment is published already    
   * @apiSuccess {Array[]}      articles.meta              Meta informations
   * @apiSuccess {Number}       [articles.meta.votes]      Votes by readers
   * @apiSuccess {tags[String]} articles.meta.tags         Tags like "landscape"
   * 
   * @apiSuccessExample SuccessExample
   * [
    {
        "meta": null,
        "hidden": false,
        "comments": [],
        "_id": "5b977b9799ce6b97e9e84e29",
        "title": "Irrelefant (Pflanze) 2",
        "summary": "Der Irrelephant ist ein häufiges Gewächs aus der Familie der Unwichtigen.",
        "tags": [
            "fun",
            "good"
        ],
        "content": "# LebensweiseDer Irrelephant ernährt sich von B-Langlos-Strahlung. Er kann ein sehr hohes Alter erreichen. Das Wachstum endet nicht mit Erreichen der Fortpflanzungsfähigkeit. Daher wird der Irrelephant von Betroffenen sehr gefürchtet. Vor allem in geschlossenen Büros und anderen Anstalten nimmt der Irrelephant im Laufe der Zeit immer größeren Platz ein, die zu einem beschleunigten Gebäudewachstum führen. Oft ist dann eine Vernichtung des Irrelephanten nur durch Beseitigung seines Wohnsitzes möglich. Dies erfordert meist eine Revolution, und ist eine schmerzhafte Prozedur.Das Pflanzen eines Irrelephanten ist entgegen landläufiger Meinung strafbar, und wird zuverlässig mit Tod durch Kleinkariertheit bestraft.AussehenDer Irrelephant besitzt einen knotigen Stamm und lila gestreifte Blätter. Dies ist allerdings nur für Zauberer und Kleinkinder ersichtlich. Für den Großteil der Bevölkerung ist der Irrelephant unsichtbar.Die Anwesenheit eines Irrelephanten läßt sich dennoch auch für den Laien zuverlässig an einem durchdringenden Geruch nach fauligem Maschendrahtzaun und nichtrostenden Computermäusen feststellen.Geschichtliche BedeutungVor einigen Jahren konnte nachgewiesen werden, dass die Pyramiden von Gizeh lediglich drei Meter hoch ausgeführt wurden. Durch einen geschickt im Innern platzierten Irrelephanten und ständiges Verlesen der pharaonischen Rülpsübungen konnten sie innerhalb von nur wenigen Jahrzehnten ihre heute beachtliche Größe erreichen. Die Pharaonen konnten so zur Freude der Gewerkschaften erheblich Bau- und Menschenmaterial sparen.",
        "author": Steven Weber,
        "date": null,
        "link": irrelefant-pflanze,
        "title_img": null,
        "updatedAt": "2018-09-24T11:01:54.983Z"
    }]
   */
  app.get('/articles', articles.find);

  /**
   * @api {get} /articles/:link Get an article by link
   * @apiName GetArticleByLink
   * @apiGroup Article
   * 
   * @apiParam {String} link Link to the article
   * 
   * 
   */
  app.get('/content/:link', articles.findOne);

  /**
   * @api {get} /articles/:articleId Get an article by id
   * @apiName GetArticle
   * @apiGroup Article
   * 
   * @apiParam {Guid} articleId Identifier
   * @apiParamExample {json} Request-Example:
   * fokussimus.de/post-link
   */
  app.get('/articles/:articleId', articles.findOne);

  /**
  * @api {put} /articles/:articleId Update an article by id
  * @apiName UpdateArticle
  * @apiGroup Article
  * 
  * @apiParam {Guid} articleId Identifier
  * @apiParam {Object} article article to update with changes
  */
  app.put('/articles/:articleId', articles.update);

  
  /**
  * @api {delete} /articles/:articleId Delete an article by id
  * @apiName DeleteArticle
  * @apiGroup Article
  */
  app.delete('/articles/:articleId', articles.delete);
}