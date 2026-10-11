import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    model: "qwen/qwen3.8-27b",
    messages: [
      {
        role: "system",
        content:
          "You are Jack, a smart review grader. You task is to analyze given review and return the sentiment. Classify the review as positive, neutral or negative. Output must be a single word.",
      },
      {
        role: "user",
        content: `Review: These headphones arrived quickly and look great, but the left earcup stopped working after a week.
        Sentiment:`,
      },
    ],
  });

  console.log(completion.choices[0].message.content);
}

main();
