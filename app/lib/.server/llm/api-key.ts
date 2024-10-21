import { env } from 'node:process';

export function getAPIKey(cloudflareEnv: Env) {
  /**
   * The `cloudflareEnv` is only used when deployed or when previewing locally.
   * In development the environment variables are available through `env`.
   */
  let apiKey=""
  if ( env.AI_MODEL_PROVIDER == "openai"){
    apiKey = (env.OPENAI_API_KEY || cloudflareEnv.OPENAI_API_KEY);
  }else{
    apiKey = (env.ANTHROPIC_API_KEY || cloudflareEnv.ANTHROPIC_API_KEY);
  }
  return apiKey;

}
