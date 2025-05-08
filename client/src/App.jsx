import { useState } from "react";
import { getGeminiResponse } from "./gemini";

const App = () => {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");

  const QuestionFunction = (e) => {
    setQuestion(e.target.value);
  };

  const sendData = async () => {
    const result = await getGeminiResponse(question);
    setResponse(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      <div className="flex">
        <input
          type="text"
          value={question}
          onChange={QuestionFunction}
          className="py-1 px-4 rounded text-xl text-blue-500 border border-gray-600"
          placeholder="Enter prompt"
        />
        <button
          onClick={sendData}
          className="py-1 px-3 bg-blue-600 text-white cursor-pointer"
        >
          Send
        </button>
      </div>
      <p>{response}</p>
    </div>
  );
};

export default App;
