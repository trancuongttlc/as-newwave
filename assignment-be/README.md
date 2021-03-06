<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description 
????y l?? b???n h?????ng d???n ch???y d??? ??n
## Setup
Clone d??? ??n v??? . 
- C??i docker v??o m??y.
- T???o th?? m???c data/db
- Map th?? m???c data/db v??o docker file sharing
- ??? root ch???y l???nh 
```
$ docker-compose -f ./docker-compose-local.yml up -d
```
- Coppy file .env.example sang file .env thay c??c th??ng s??? t????ng ???ng v??o sau ???? ch???y l???nh ( Sau n??y c??c config b???ng .env ?????u ph???i put v??o .env.example)
```
$ yarn *C??i c??c pack*
$ yarn start:dev *????? ch???y dev ??? m??y local*
```
## T???o database seeding (D??? li???u m???u)

- T??i li???u ?????c t???i [????y](https://github.com/w3tecch/typeorm-seeding/blob/master/README.md)

## Notes

- Tr?????c khi push code l??n nh??? ch???y `yarn lint` ????? ki???m tra convention code. Khi c?? l???i ????u th?? nh??? s???a v?? ch???y l???i.
- T??i li???u git t???i [????y](rules/git.md)

## Ch???y prod

```
$ docker-compose up -d
$ docker-compose build
$ docker-compose up -d
```
## License

Nest is [MIT licensed](LICENSE).
