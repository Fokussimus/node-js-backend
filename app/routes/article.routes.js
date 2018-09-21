module.exports = (app) => {
  const articles = require('../controllers/articles.controller.js');

  /**
   * @api {post} /articles Add a new article
   * @apiName CreateArticle
   * @apiGroup Article
   * 
   * */
  app.post('/articles', articles.create);


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
   */
  app.get('/articles', articles.find);


  app.get('/content/:link', articles.findOne);

  /**
   * @api {get} /articles/:articleId Get an article by id
   * @apiName GetArticle
   * @apiGroup Article
   * 
   * @apiParam {Guid} articleId Identifier
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