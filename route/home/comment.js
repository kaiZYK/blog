// 将评论集合构造函数进行导入
const { Comment } = require("../../model/comment");

module.exports = async (req, res) => {
  // 接受客户端传递过来的请求参数
  const { content, uid, aid } = req.body;

  // 将评论信息存储到评论集合中;
  await Comment.create({
    content: content,
    uid: uid,
    aid: aid,
    time: new Date(),
  });
  console.log(uid);
  console.log(aid);
  console.log(content);
  // 测试用户id
  //   res.send(aid);

  // 将页面重定向回文章详情页面
  // res.redirect("/home/article?id=62d568f8b8b409714709e935");
  res.redirect("/home/article?id=" + aid.slice(0, aid.length - 1));
};
