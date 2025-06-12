export default () => ({
  gateway: {
    host: process.env.HOST_API_GATEWAY,
    port: process.env.PORT_API_GATEWAY,
    publicPort: process.env.PUBLIC_PORT_API,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  nats: {
    server: process.env.NATS_SERVER,
  },
});
