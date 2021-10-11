/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIotCatalogs = /* GraphQL */ `
  subscription OnCreateIotCatalogs(
    $deviceLat: String
    $deviceLon: String
    $deviceMos: String
    $serialNumber: String
    $unixTimeStamp: AWSTimestamp
  ) {
    onCreateIotCatalogs(
      deviceLat: $deviceLat
      deviceLon: $deviceLon
      deviceMos: $deviceMos
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
    ) {
      deviceLat
      deviceLon
      deviceMos
      deviceTemp
      serialNumber
      unixTimeStamp
    }
  }
`;
export const onDeleteIotCatalogs = /* GraphQL */ `
  subscription OnDeleteIotCatalogs(
    $deviceLat: String
    $deviceLon: String
    $deviceMos: String
    $serialNumber: String
    $unixTimeStamp: AWSTimestamp
  ) {
    onDeleteIotCatalogs(
      deviceLat: $deviceLat
      deviceLon: $deviceLon
      deviceMos: $deviceMos
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
    ) {
      deviceLat
      deviceLon
      deviceMos
      deviceTemp
      serialNumber
      unixTimeStamp
    }
  }
`;
export const onUpdateIotCatalogs = /* GraphQL */ `
  subscription OnUpdateIotCatalogs(
    $deviceLat: String
    $deviceLon: String
    $deviceMos: String
    $serialNumber: String
    $unixTimeStamp: AWSTimestamp
  ) {
    onUpdateIotCatalogs(
      deviceLat: $deviceLat
      deviceLon: $deviceLon
      deviceMos: $deviceMos
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
    ) {
      deviceLat
      deviceLon
      deviceMos
      deviceTemp
      serialNumber
      unixTimeStamp
    }
  }
`;
