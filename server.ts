// Dependencies
import ngrok from "ngrok";
import webpack from 'webpack';
import webpackDevServer from "webpack-dev-server";
import invariant from "invariant";
// Custom
import config from "./webpack.config";
import { logger } from "./logger";

const compiler = webpack(config);
const isTunneled = !!process.env.ENABLE_TUNNEL;
const port = 3001;
const host = "localhost";
const url = `http://${host}:${port}/`;

const options = {
  publicPath: config.output ? config.output.publicPath : "/",
  hot: true,
  historyApiFallback: true
};

const server = new webpackDevServer(compiler, options);

server.listen(port, host, (error: any) => {
  console.log("LOL errowefwefwfwfe: ", error);

  invariant(!error, 'Something failed: ', error)

  if (isTunneled) {
    ngrok.connect({
      port: port,
      host_header: `${host}:${port}`,
    });
    logger(url, isTunneled);
  } else {
    logger(url);
  }
});
