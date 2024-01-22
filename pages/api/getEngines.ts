import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";

type Model = {
  id: string;
  object: string;
  created: number;
  owned_by: string;
};

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
  error?: string; // Add an optional 'error' property
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Make the API request to OpenAI to get the list of models
    const response: AxiosResponse<{ data: Model[] }> = await axios.get(
      "https://api.openai.com/v1/models",
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Use your actual OpenAI API key
        },
      }
    );

    // Extract models from the response
    const models: Model[] = response.data.data;

    // Define the allowed models
    const allowedModels = [
      "gpt-4",
      "gpt-4-0314",
      "gpt-4-32k",
      "gpt-4-32k-0314",
      "gpt-3.5-turbo-16k",
      "gpt-3.5-turbo",
      "gpt-3.5-turbo-0613",
      "gpt-4-0613",
    ];

    // Filter and map the models to create options
    const modelOptions = models
      .filter((model) => allowedModels.includes(model.id))
      .map((model) => ({
        value: model.id,
        label: model.id, // Change this if you want to use a different field as the label
      }));

    // Respond with the model options
    res.status(200).json({
      modelOptions,
    });
  } catch (error) {
    // Handle any errors that may occur during the API request
    console.error("Error fetching models:", error);
    res.status(500).json({
      modelOptions: [],
      error: "Internal Server Error",
    });
  }
}
