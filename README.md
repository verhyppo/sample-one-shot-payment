# Sample XPAY Payments

[👀 Look at the demo](https://sample-one-shot-payment.vercel.app/)

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), then start a development server (plase read configuration section first):

```bash
npm run dev -- --https
```

## Building

To create a production version of this app:
```bash
npm run build
```

You can preview the production build with 
```
npm run preview
```
The application is ready to be deployed as a Vercel app. 
> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Configuring
### Server
You can change your api key by changing the following file
```
src/lib/server/config.server.js
```
you can change the SUPABASE api key by changing [.env.local](.env.local)

### Creating Database
The application is ready to use a PG instance on [supabase](https://supabase.com/).
You can create needed schema by using [order-DDL.sql](database/order-DDL.sql)

## Powered by

[XPAY Developer Documentation](https://developer.nexi.it)
[SMUI](https://sveltematerialui.com/)
[SvelteKit](https://kit.svelte.dev/)

## Next Steps
- Build Flow:
  - support APM
- Authorization
  - add login
  - proper ACL!!
  - send customer info to XPAY when creating orders
  - support 1Click payments