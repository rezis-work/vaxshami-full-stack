const env = {
  apiConnectionUrl: process.env.API_CONNECTION_URL!,

  appwrite: {
    appwriteProjectId: process.env.APPWRITE_PROJECT_ID!,
    appwriteProjectName: process.env.APPWRITE_PROJECT_NAME!,
    appwriteEndpoint: process.env.APPWRITE_ENDPOINT!,
  },

  databases: {
    testDB: {
      databaseId: process.env.DATABASE_ID!,
      tableId: process.env.TABLE_ID!,
    },
  },
};

export default env;
