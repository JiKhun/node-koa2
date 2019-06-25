const Router = require('koa-router');
const ArtileController = require('../server/controllers/article');

const router = new Router({
  prefix: '/api/v1'
});

/**
 * 文章接口
 */
//创建文章
router.post('/article/create',ArtileController.create);

//获取文章详情
router.get('/article/:id',ArtileController.detail)

//获取文章列表
router.post('/article/list',ArtileController.list)

module.exports = router