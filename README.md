# Authentication and Keycloak

Example project for authentication standards like authentication code flow, implicit flow, hybrid flow and resource owner password cretentials, all of them with.

## Necessary Tools
* docker
* docker-compose

## Execute

In root execute the command to up keycloak container

```shell
cd keycloak
docker compose up -d
```
Choose the authentication flow
```shell
cd authentication-flow
docker compose up -d
docker compose exec app bash
npm run authorization-code or
npm run implicit or
npm run hybrid or
npm run resource-owner

```
## Run

- Access keycloak in localhost:8080
- Access authentication flow in localhost:3000
- Need to create a client and a realm in keycloak and update urls in projects