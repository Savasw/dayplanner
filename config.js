var config = {};

config.Azuresearch = {}

//Azure search API key
config.Azuresearch.apiKey = "25843E690EC7F3A80FBF74DD67641D7E";
//config.apiKey = process.env.searchServicePrimaryKey

//Azure search service URL
config.Azuresearch.serviceURL = "https://akash.search.windows.net";
//config.serviceURL = process.env.searchServiceUri

//Azure search index name to be created
config.Azuresearch.indexName = "azure-search-data";

//Azure search serive API version
config.Azuresearch.apiVersion = "2015-02-28-Preview";



config.Postgres = {}
//Postgres database connection string

//config.db.connstr = process.env.POSTGRESQLCONNSTR_DefaultConnection;
config.Postgres.connstr = "postgres://postgres@postgresqlq7zavhy5ohzzy:pg%4012345@postgresqlq7zavhy5ohzzy.postgres.database.azure.com:5432/microsoft?ssl=true";

module.exports = config;
