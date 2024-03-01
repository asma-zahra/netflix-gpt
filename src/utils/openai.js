import OpenAI from 'openai';
import { openAI_Key } from './Constants';

const openai = new OpenAI({
  apiKey: openAI_Key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});
export default openai;

//openAI authorization is done so we can now use openAI chat API 