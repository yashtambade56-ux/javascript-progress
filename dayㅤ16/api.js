import { ChatOllama } from "@langchain/ollama";
import { HumanMessage } from "@langchain/core/messages";
import { TavilySearch } from "@langchain/tavily";

// API key
const TAVILY_API_KEY =
  process.env.TAVILY_API_KEY ?? "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";

// Tavily search tool (optional)
const accessInternet = new TavilySearch({
  maxResults: 5,
  includeDomains: [],
  tavilyApiKey: TAVILY_API_KEY,
});

const USE_MOCK = process.env.MOCK === "true";

let agent;

if (USE_MOCK) {
  console.log("Using mock agent (MOCK=true)");
  agent = {
    invoke: async () => ({
      content:
        "Mock answer: JavaScript is a high-level language used for web development.",
    }),
  };
} else {
  agent = new ChatOllama({
    model: "gemma3:270m",
  });
}

const run = async () => {
  try {
    let response;

    if (USE_MOCK) {
      response = await agent.invoke();
    } else {
      response = await agent.invoke([
        new HumanMessage("What is AI?"),
      ]);
    }

    console.log(response?.content ?? response);

    // OPTIONAL: test internet search
    const results = await accessInternet.invoke("latest AI news");
    console.log("\nInternet results:", results);

  } catch (err) {
    console.error("Error:", err.message || err);
  }
};

run();