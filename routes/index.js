const Router = require('koa-router');
const ArtileController = require('../server/controllers/article');

const router = new Router({
  prefix: '/api/v1'
});

/**
 * 文章接口
 */
router
//创建文章
    .post('/article/create',ArtileController.create)
//获取文章列表
    .post('/article/list',ArtileController.list);

//获取文章详情
router.get('/article/:id',ArtileController.detail)



module.exports = router