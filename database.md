# User Singup Flow

-   User registers via Agriweiss
-   Amazon Cognito handles authentication/authorization
    -   Adds user to user pool
-   Somehow create User item in database after verification

## Sensor Flow

-   User can **register their farm** to the app
    -   establish connection between:
        -   user and farm
-   User needs to **add sensor** to their account
    -   establish relationship between:
        -   sensor and user
        -   sensor and farm (if applicable)
-   Sensor takes readings
-   Sensor pushes reading to AWS IoT service
-   Somehow pushes that data to API
-   API creates Reading item and adds to database

## Agriweiss Flow

-   Fetch user sensors
-   Fetch readings from all user's sensors
-   Render sensors on Map component
-   Render readings on Feed component
-   On Sensor click, fetch sensor's readings
    -   Then render current/most recent reading
-   On Readings click, render data
