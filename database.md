## Sensors
{
   _id: "AGRIM8-SN3320"
   user: <UserId>,
   coordinates : {
       longitude: 234.0,
       latitude: 0.0
   }
   readings : [
       <Reading1>,
       <Reading2>,
       <Reading3>,
       <Reading4>,
   ]
}

## Readings
{
    _id: 1,
    sensorId: <SensorId>,
    moisture: 25,
    temperature: 25
}

## Users
{
    _id: 1,
    username: "sufyan",
    email: "sufyan.ghazali@gmail.com",
    phone: 0443895094
    sensors: [
        <SensorId>,
        <SensorId>,
        <SensorId>
    ]
}

## Flow

- getSensors(userId)
- update "sensors" state in app