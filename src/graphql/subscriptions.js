/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFarm = /* GraphQL */ `
  subscription OnCreateFarm {
    onCreateFarm {
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
export const onUpdateFarm = /* GraphQL */ `
  subscription OnUpdateFarm {
    onUpdateFarm {
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
export const onDeleteFarm = /* GraphQL */ `
  subscription OnDeleteFarm {
    onDeleteFarm {
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
export const onCreateFarmUserJoin = /* GraphQL */ `
  subscription OnCreateFarmUserJoin {
    onCreateFarmUserJoin {
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
export const onUpdateFarmUserJoin = /* GraphQL */ `
  subscription OnUpdateFarmUserJoin {
    onUpdateFarmUserJoin {
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
export const onDeleteFarmUserJoin = /* GraphQL */ `
  subscription OnDeleteFarmUserJoin {
    onDeleteFarmUserJoin {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateSensorUserJoin = /* GraphQL */ `
  subscription OnCreateSensorUserJoin {
    onCreateSensorUserJoin {
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
export const onUpdateSensorUserJoin = /* GraphQL */ `
  subscription OnUpdateSensorUserJoin {
    onUpdateSensorUserJoin {
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
export const onDeleteSensorUserJoin = /* GraphQL */ `
  subscription OnDeleteSensorUserJoin {
    onDeleteSensorUserJoin {
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
export const onCreateSensor = /* GraphQL */ `
  subscription OnCreateSensor {
    onCreateSensor {
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
export const onUpdateSensor = /* GraphQL */ `
  subscription OnUpdateSensor {
    onUpdateSensor {
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
export const onDeleteSensor = /* GraphQL */ `
  subscription OnDeleteSensor {
    onDeleteSensor {
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
export const onCreateReading = /* GraphQL */ `
  subscription OnCreateReading {
    onCreateReading {
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
export const onUpdateReading = /* GraphQL */ `
  subscription OnUpdateReading {
    onUpdateReading {
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
export const onDeleteReading = /* GraphQL */ `
  subscription OnDeleteReading {
    onDeleteReading {
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
