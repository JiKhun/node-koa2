// 引入mysql的配置文件
const db = require('../../config/db');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Article = Sequelize.import('../schema/article');
Article.sync({force: false}); //自动创建表
// Article.drop() // 删除所有表
class ArticleModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data){
        return await Article.create({
            title: data.title, //标题
            author: data.author,  //作者
            content: data.content,  //文章内容
            category: data.category //文章分类
        });
    }

    /**
     * 查询文章的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id){
        return await Article.findOne({
            where:{
                id
            }
        });
    }

    /**
     * 查询文章列表
     * @returns {Promise<List>}
     */
    static async getArticleList(){
        return await Article.findAndCountAll({
            // attributes: ['id', ['title','title2']],SELECT id, title AS title2 ...
            offset: 0,
            limit: 10
        });
    }

    /**
     * 删除文章
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async deleteArticle(id){
        return await Article.destroy({
            where:{
                id
            }
        });
    }
    
    /**
     * 更新文章
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async updateArticle(data,id){
        return await Article.update(data,{
            where:{
                id
            }
        });
    }
}

module.exports = ArticleModel;