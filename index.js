/// <reference types="@vertx/core" />
// @ts-check

const { HttpEndpoint, ServiceDiscovery } = require('@vertx/service-discovery')
const { ServiceDiscoveryOptions } = require('@vertx/service-discovery/options')

const discovery = ServiceDiscovery.create(
vertx,
new ServiceDiscoveryOptions({
name: 'test'
})
)

vertx
  .createHttpServer()
  .requestHandler(function (req) {
    req.response().end("Hello ES4X!");
  })
  .listen(3000);

console.log('Server started on port 3000');
