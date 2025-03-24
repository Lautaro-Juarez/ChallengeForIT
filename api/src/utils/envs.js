import { config } from "dotenv";
config();

export const envs = {
    PORT: process.env.PORT || 3000,
}