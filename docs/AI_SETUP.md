# FuelIQ AI Setup

Yes, the live AI coach needs your OpenAI API key, but the key must only live on the backend.

## Local Development

1. Create an OpenAI API key in the OpenAI dashboard.
2. Create a root `.env` file:

```txt
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-5.1-mini
```

3. Run the API server in one terminal:

```bash
npm run api
```

4. Run the Vite app in another terminal:

```bash
npm run dev
```

The Vite dev server proxies `/api/*` requests to `http://localhost:8787`.

You can also export the variables in your shell instead of using `.env`:

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_MODEL="gpt-5.1-mini"
```

The root `.env` file is ignored by git.

## Production

Use a backend-only environment variable in your deploy target:

```txt
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5.1-mini
```

Do not create `VITE_OPENAI_API_KEY`. Any `VITE_` variable is exposed to browser code.

For Vercel, move the `api/ai/chat` logic into a Vercel serverless function. For Supabase, move it into a Supabase Edge Function and read the key from Supabase secrets.

## Admin Demo Account

The local admin account is:

```txt
admin@fueliq.demo
```

Use the "Continue as admin" button on the login page. This is a demo role only; production admin access should be enforced by Supabase RLS and server-side authorization.
