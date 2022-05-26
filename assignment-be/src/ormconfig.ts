import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";
// import entities = require('./entities');

const ormconfig: TypeOrmModuleOptions = {
  type: "mariadb",
  url: process.env.DATABASE_URL,
  database: process.env.DATABASE_NAME,
  bigNumberStrings: false,
  charset: "utf8mb4",
  entities: [join(__dirname, "**/**.entity{.ts,.js}")],
  synchronize: true,
  logging: true,
  logger: ["development", "production"].includes(process.env.NODE_ENV)
    ? "simple-console"
    : "advanced-console",
  // migrations: ['migrations/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'migrations',
  // },
};
export default ormconfig;
