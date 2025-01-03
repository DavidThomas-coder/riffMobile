module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
      default: {
          connector: 'bookshelf',
          settings: {
              client: 'postgres',
              host: env('DATABASE_HOST', '127.0.0.1'),
              port: env.int('DATABASE_PORT', 5432),
              database: env('DATABASE_NAME', 'riffmobile_development'),
              username: env('DATABASE_USERNAME', 'riff_user'),
              password: env('DATABASE_PASSWORD', 'assass1'),
              ssl: env.bool('DATABASE_SSL', false),
          },
          options: {
              useNullAsDefault: true,
          },
      },
  },
});

