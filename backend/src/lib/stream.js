import { StreamChat } from "stream-chat";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "backend", ".env") });
if (!process.env.STREAM_API_KEY && !process.env.STREAM_API_SECRET) {
  dotenv.config({ path: path.resolve(process.cwd(), ".env") });
  dotenv.config();
}

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

let streamClient = null;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
} else {
  try {
    streamClient = StreamChat.getInstance(apiKey, apiSecret);
    console.log("Stream Chat initialized successfully");
  } catch (error) {
    console.error("Stream Chat initialization failed");
    streamClient = null;
  }
}

export const upsertStreamUser = async (userData) => {
  try {
    if (!streamClient) {
      console.error("Stream client not initialized");
      return;
    }
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    if (!streamClient || userId == null) {
      return null;
    }
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};
