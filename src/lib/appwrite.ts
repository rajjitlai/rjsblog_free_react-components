import { Client, Account, Databases, ID, Query } from 'appwrite';

// Appwrite configuration - shared with rjsblog.in
export const appwriteConfig = {
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1',
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || '',
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || '',
    componentsCollectionId: import.meta.env.VITE_APPWRITE_COMPONENTS_COLLECTION_ID || '',
};

// Initialize Appwrite Client
const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);

// Export ID and Query helpers
export { ID, Query };

export default client;

