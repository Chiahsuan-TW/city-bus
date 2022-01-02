module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @use "@/assets/scss/_breakpoints.scss";
          @use "@/assets/scss/_color.scss";
        `,
      },
    },
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: /node_modules/,
        poll: 3000,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/city-bus/" : "/",
};
