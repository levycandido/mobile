const {DynamoDBClient} = require('@aws-sdk/client-dynamodb')
const {DynamoDBDocument, DynamoDBDocumentClient} = require('@aws-sdk/lib-dynamodb')

const dbClient = new DynamoDBClient({
region:"us-east-2",
credentials: {
    accessKeyId:'AKIA2AUXHP45WJ7X2KH5',
    secretAccessKey:'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',
}

});

const marshallOptions = {
    /**
     * Whether to automatically convert empty strings, blobs, and sets to `null`
     */
    convertEmptyValues: false,
    /**
     * Whether to remove undefined values while marshalling.
     */
    removeUndefinedValues: false,
    /**
     * Whether to convert typeof object to map attribute.
     */
    convertClassInstanceToMap: false,
    /**
     * Whether to convert the top level container
     * if it is a map or list.
     *
     * Default is true when using the DynamoDBDocumentClient,
     * but false if directly using the marshall function (backwards compatibility).
     */
    convertTopLevelContainer: false
  }

  const unmarshallOptions = {
    wrapNumbers: false,
  }

const tranlateConfig = {marshallOptions, unmarshallOptions}

const documentClient = DynamoDBDocumentClient.from(dbClient, tranlateConfig)

module.exports = documentClient