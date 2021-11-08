/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFarm = /* GraphQL */ `
  mutation CreateFarm(
    $input: CreateFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    createFarm(input: $input, condition: $condition) {
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
export const updateFarm = /* GraphQL */ `
  mutation UpdateFarm(
    $input: UpdateFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    updateFarm(input: $input, condition: $condition) {
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
export const deleteFarm = /* GraphQL */ `
  mutation DeleteFarm(
    $input: DeleteFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    deleteFarm(input: $input, condition: $condition) {
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
export const createFarmUserJoin = /* GraphQL */ `
  mutation CreateFarmUserJoin(
    $input: CreateFarmUserJoinInput!
    $condition: ModelFarmUserJoinConditionInput
  ) {
    createFarmUserJoin(input: $input, condition: $condition) {
      id
      farm_id
      user_id
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateFarmUserJoin = /* GraphQL */ `
  mutation UpdateFarmUserJoin(
    $input: UpdateFarmUserJoinInput!
    $condition: ModelFarmUserJoinConditionInput
  ) {
    updateFarmUserJoin(input: $input, condition: $condition) {
      id
      farm_id
      user_id
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteFarmUserJoin = /* GraphQL */ `
  mutation DeleteFarmUserJoin(
    $input: DeleteFarmUserJoinInput!
    $condition: ModelFarmUserJoinConditionInput
  ) {
    deleteFarmUserJoin(input: $input, condition: $condition) {
      id
      farm_id
      user_id
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSensorUserJoin = /* GraphQL */ `
  mutation CreateSensorUserJoin(
    $input: CreateSensorUserJoinInput!
    $condition: ModelSensorUserJoinConditionInput
  ) {
    createSensorUserJoin(input: $input, condition: $condition) {
      id
      user_id
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateSensorUserJoin = /* GraphQL */ `
  mutation UpdateSensorUserJoin(
    $input: UpdateSensorUserJoinInput!
    $condition: ModelSensorUserJoinConditionInput
  ) {
    updateSensorUserJoin(input: $input, condition: $condition) {
      id
      user_id
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteSensorUserJoin = /* GraphQL */ `
  mutation DeleteSensorUserJoin(
    $input: DeleteSensorUserJoinInput!
    $condition: ModelSensorUserJoinConditionInput
  ) {
    deleteSensorUserJoin(input: $input, condition: $condition) {
      id
      user_id
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
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const createSensor = /* GraphQL */ `
  mutation CreateSensor(
    $input: CreateSensorInput!
    $condition: ModelSensorConditionInput
  ) {
    createSensor(input: $input, condition: $condition) {
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
export const updateSensor = /* GraphQL */ `
  mutation UpdateSensor(
    $input: UpdateSensorInput!
    $condition: ModelSensorConditionInput
  ) {
    updateSensor(input: $input, condition: $condition) {
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
export const deleteSensor = /* GraphQL */ `
  mutation DeleteSensor(
    $input: DeleteSensorInput!
    $condition: ModelSensorConditionInput
  ) {
    deleteSensor(input: $input, condition: $condition) {
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
export const createReading = /* GraphQL */ `
  mutation CreateReading(
    $input: CreateReadingInput!
    $condition: ModelReadingConditionInput
  ) {
    createReading(input: $input, condition: $condition) {
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
export const updateReading = /* GraphQL */ `
  mutation UpdateReading(
    $input: UpdateReadingInput!
    $condition: ModelReadingConditionInput
  ) {
    updateReading(input: $input, condition: $condition) {
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
export const deleteReading = /* GraphQL */ `
  mutation DeleteReading(
    $input: DeleteReadingInput!
    $condition: ModelReadingConditionInput
  ) {
    deleteReading(input: $input, condition: $condition) {
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
