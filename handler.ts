"use strict";

import { APIGatewayEvent } from "aws-lambda";
import getCake from "./src/Ejercicio15";

module.exports.handler = async (event: APIGatewayEvent) => {
  try {
    const response = await getCake(false);

    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    };
  } catch (e) {
    return {
      stateCode: 400,
      body: JSON.stringify({ error: e }),
    };
  }
};
