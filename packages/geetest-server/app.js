/*
 * @Description:本地服务
 * @Version: 1.0.0
 * @Date: 2022-04-11 12:12:16
 * @LastEditors: Yawen Yang
 * @LastEditTime: 2022-04-11 12:12:16
 */
const koa = require('koa');
const Router = require('@koa/router');
const axios = require('axios');
const crypto = require('crypto');
const koaStatic = require('koa-static');
const cors = require('@koa/cors');

const keyMap = {
  // 左边是 ID：key
  a0d0fb780077660c40b3c784450aca55: '0befce1ffe857fcf0477a2df33159ed3',
};

const app = new koa();
// 跨域请求
app.use(cors());

const router = new Router();
app.use(koaStatic(__dirname + '/dist'));

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
  );
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

router.get('/demo/login', async (ctx, next) => {
  const params = ctx.query;
  const prikey = keyMap[params.captcha_id];

  if (!prikey) {
    ctx.response.status = 200;
    ctx.response.body = { result: 'fail', reason: 'id is not in id pools ' };
  }

  const sign_token = crypto
    .createHmac('sha256', prikey)
    .update(params.lot_number)
    .digest('hex');
  const query = Object.assign(params, {
    sign_token,
  });
  const result = await axios({
    method: 'get',
    params: query,
    url: 'http://gcaptcha4.geetest.com/validate',
  })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return { result: 'success', reason: 'request geetest api fail' };
    });
  ctx.response.status = 200;
  ctx.response.body = result;
});

app.use(router.routes()).listen(3001, () => {
  console.log('server is running in 3001');
});
