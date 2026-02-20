import {createAgent} from 'langchain'
import {ChatOllama} from '@langchain/ollama'

let ollama = new ChatOllama({
    model:"gemma3:270m"
})


let agent = createAgent({
    model: ollama
    
})
const run = async () => {
    try {
        const response = await agent.invoke({
            messages:"what is JavaScript?"
        })
        console.log(response, messages[1].content);

    } catch (error) {
        console.log(error);
    }
}
run();
