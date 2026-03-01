import { Account, Client, Databases } from "appwrite";

export const appConfig = {
	endPointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
	projectId: import.meta.env.VITE_APPWRITE_PRODUCT_ID,
	apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
	databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
};

const client = new Client()
	.setEndpoint(appConfig.endPointUrl)
	.setProject(appConfig.projectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage();

export { client, account, database, storage };
