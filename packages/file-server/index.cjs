const Koa = require('koa');
const Router = require('koa-router');
const multer = require('@koa/multer');
const app = new Koa();
const router = new Router();

const path = require('path');

// 配置存储引擎
const storage = multer.diskStorage({
  // 设置文件存储位置
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // 设置文件名
  filename: function (req, file, cb) {
    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    );
    // 使用原始文件名（你也可以加上时间戳之类的来避免文件名重复）
    const fileExtension = path.extname(file.originalname); // 获取文件扩展名
    const filename = path.basename(file.originalname, fileExtension); // 获取文件名，不包括扩展名
    cb(null, `${filename}-${Date.now()}${fileExtension}`);
  }
});

// 配置 multer
const upload = multer({ storage: storage });

// 创建一个路由来接收文件上传
// 使用 upload.single('file') 中间件处理单个文件上传，'file' 是表单中文件字段的名字
router.post('/upload', upload.single('file'), async (ctx) => {
  // 文件信息在 ctx.file 或者 ctx.request.file
  console.log(ctx.file);
  ctx.body = {
    message: '文件上传成功',
    fileInfo: ctx.file,
  };
});

// 应用路由
app.use(router.routes()).use(router.allowedMethods());

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
