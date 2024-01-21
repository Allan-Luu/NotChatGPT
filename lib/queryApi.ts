import openai from './chatgpt'

const query = async (prompt:string, chatId:string, model:string) => {

    const completion = await openai.completions.create({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0
    })
    .then(completion => completion.choices[0].text)
    .catch((err) => `ChatGPT was unable to find an answer for that! (Error: ${err.message})`);
    console.log(completion)
    return completion;
};

export default query;