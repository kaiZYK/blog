const { Article } = require("../../model/article");

module.exports = async (req, res, next) => {
  // 接受客户端传递过来的请求参数
  const { title, author, publishDate, cover, content } = req.body;
  // 即将要修改的用户id
  const id = req.query.id;


  await Article.updateOne(
    { _id: id },
    {
      title: title,
      author: author,
      publishDate: publishDate,
      cover: cover,
      content: content,
    }
  );

  // 将页面重定向到用户列表页面
  res.redirect("/admin/article");
};
