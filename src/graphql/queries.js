/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIotCatalogs = /* GraphQL */ `
  query GetIotCatalogs($serialNumber: String!, $unixTimeStamp: AWSTimestamp!) {
    getIotCatalogs(serialNumber: $serialNumber, unixTimeStamp: $unixTimeStamp) {
      deviceLat
      deviceLon
      deviceMos
      deviceTemp
      serialNumber
      unixTimeStamp
    }
  }
`;
export const listIotCatalogs = /* GraphQL */ `
  query ListIotCatalogs(
    $filter: TableIotCatalogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIotCatalogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        deviceLat
        deviceLon
        deviceMos
        deviceTemp
        serialNumber
        unixTimeStamp
      }
      nextToken
    }
  }
`;
export const queryIotCatalogsBySerialNumberIndex = /* GraphQL */ `
  query QueryIotCatalogsBySerialNumberIndex(
    $after: String
    $first: Int
    $serialNumber: String!
    $sortDirection: ModelSortDirection
  ) {
    queryIotCatalogsBySerialNumberIndex(
      after: $after
      first: $first
      serialNumber: $serialNumber
      sortDirection: $sortDirection
    ) {
      items {
        deviceLat
        deviceLon
        deviceMos
        deviceTemp
        serialNumber
        unixTimeStamp
      }
      nextToken
    }
  }
`;
export const queryIotCatalogsBySerialNumberUnixTimeStamp = /* GraphQL */ `
  query QueryIotCatalogsBySerialNumberUnixTimeStamp(
    $serialNumber: String!
    $unixTimeStamp: String
  ) {
    queryIotCatalogsBySerialNumberUnixTimeStamp(
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
    ) {
      items {
        deviceLat
        deviceLon
        deviceMos
        deviceTemp
        serialNumber
        unixTimeStamp
      }
      nextToken
    }
  }
`;
export const queryIotCatalogsBySerialNumberUnixTimeStampIndex = /* GraphQL */ `
  query QueryIotCatalogsBySerialNumberUnixTimeStampIndex(
    $after: String
    $first: Int
    $serialNumber: String!
  ) {
    queryIotCatalogsBySerialNumberUnixTimeStampIndex(
      after: $after
      first: $first
      serialNumber: $serialNumber
    ) {
      items {
        deviceLat
        deviceLon
        deviceMos
        deviceTemp
        serialNumber
        unixTimeStamp
      }
      nextToken
    }
  }
`;
export const queryIotCatalogsByEntryDate = /* GraphQL */ `
  query QueryIotCatalogsByEntryDate(
    $unixTimeStamp: ModelStringKeyConditionInput
    $filter: TableIotCatalogsFilterInput
    $limit: Int
    $serialNumber: String!
    $sortDirection: ModelSortDirection
  ) {
    queryIotCatalogsByEntryDate(
      unixTimeStamp: $unixTimeStamp
      filter: $filter
      limit: $limit
      serialNumber: $serialNumber
      sortDirection: $sortDirection
    ) {
      items {
        deviceLat
        deviceLon
        deviceMos
        deviceTemp
        serialNumber
        unixTimeStamp
      }
      nextToken
    }
  }
`;
