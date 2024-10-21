import { env } from 'node:process';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';
import type { LanguageModel } from 'ai';

function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    apiKey,
    headers: {
      'anthropic-beta': 'max-tokens-3-5-sonnet-2024-07-15',
    },
  });

  return anthropic('claude-3-5-sonnet-20240620');
}

function getOpenAIModel(apiKey: string) {
  const openai = createOpenAI({
    apiKey,
    compatibility: 'strict',
  });
  return openai('gpt-4o');
}

export function getAIModel(apiKey: string) {
  if (env.AI_MODEL_PROVIDER == "openai"){
    return getOpenAIModel(apiKey)
  }else{
    return getAnthropicModel(apiKey)
  }
}
