const { Article } = require("../../model/article");

module.exports = async (req, res) => {
  // 标识 标识当前访问的是文章管理页面
  req.app.locals.currentLink = "article";

  // 获取到地址栏中的id参数
  const { message, id } = req.query;

  // 如果当前传递了id参数
  if (id) {
    // 修改操作
    let article = await Article.findOne({ _id: id });

    // 测试article是否有值
    // console.log(article);

    // 渲染文章编辑页面 (修改)
    res.render("admin/article-edit", {
      message: message,
      article: article,
      link: "/admin/article-modify?id=" + id,
      button: "修改",
    });

    // console.log(article.publishDate + "======" + typeof article.publishDate);
  } else {
    // 添加操作
    res.render("admin/article-edit", {
      message: message,
      link: "/admin/article-edit",
      button: "添加",
    });
  }

  // console.log(req.query.id);
  // res.render("admin/article-edit.art");
};
