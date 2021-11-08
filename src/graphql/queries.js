/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFarm = /* GraphQL */ `
  query GetFarm($id: ID!) {
    getFarm(id: $id) {
      id
      name
      owners {
        items {
          id
          farm_id
          user_id
          createdAt
          updatedAt
        }
        nextToken
      }
      sensors {
        items {
          id
          serial_number
          farm_id
          latitude
          longitude
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFarms = /* GraphQL */ `
  query ListFarms(
    $filter: ModelFarmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owners {
          nextToken
        }
        sensors {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      phone
      email
      farms {
        items {
          id
          farm_id
          user_id
          createdAt
          updatedAt
        }
        nextToken
      }
      sensors {
        items {
          id
          user_id
          sensor_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        farms {
          nextToken
        }
        sensors {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSensor = /* GraphQL */ `
  query GetSensor($id: ID!) {
    getSensor(id: $id) {
      id
      serial_number
      farm_id
      farm {
        id
        name
        owners {
          nextToken
        }
        sensors {
          nextToken
        }
        createdAt
        updatedAt
      }
      owners {
        items {
          id
          user_id
          sensor_id
          createdAt
          updatedAt
        }
        nextToken
      }
      latitude
      longitude
      readings {
        items {
          id
          sensor_id
          timestamp
          moisture
          temperature
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSensors = /* GraphQL */ `
  query ListSensors(
    $filter: ModelSensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        serial_number
        farm_id
        farm {
          id
          name
          createdAt
          updatedAt
        }
        owners {
          nextToken
        }
        latitude
        longitude
        readings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReading = /* GraphQL */ `
  query GetReading($id: ID!) {
    getReading(id: $id) {
      id
      sensor_id
      sensor {
        id
        serial_number
        farm_id
        farm {
          id
          name
          createdAt
          updatedAt
        }
        owners {
          nextToken
        }
        latitude
        longitude
        readings {
          nextToken
        }
        createdAt
        updatedAt
      }
      timestamp
      moisture
      temperature
      createdAt
      updatedAt
    }
  }
`;
export const listReadings = /* GraphQL */ `
  query ListReadings(
    $filter: ModelReadingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReadings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sensor_id
        sensor {
          id
          serial_number
          farm_id
          latitude
          longitude
          createdAt
          updatedAt
        }
        timestamp
        moisture
        temperature
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
