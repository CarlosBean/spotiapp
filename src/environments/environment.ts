// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_url: 'https://api.spotify.com/v1',
  token_url: 'https://accounts.spotify.com/api/token',
  audio_url: 'https://open.spotify.com/embed?uri=',
  client_id: '6a44fd2abdd54652a6bf2ae6c33404bf',
  client_secret: 'b510f9923b20433ea7ee43e033c6136b',
};
