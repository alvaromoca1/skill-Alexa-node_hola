//import  {HttpResponse} from '../helpers/response';
//import { getHelloWord as getHelloController} from '@application/controllers/helloController';

import {
  ErrorHandler,
  HandlerInput,
  RequestHandler,
  SkillBuilders,
} from 'ask-sdk-core';
import {
  Response,
  SessionEndedRequest,
} from 'ask-sdk-model';

let skill;
export const getHello = async (event,context) => {
  console.log("EVENT->",event)
  if (!skill) {
    skill = SkillBuilders.custom()
      .addRequestHandlers(
        helloMessage
      )
      .addErrorHandlers(ErrorHandler)
      .create();
  }

  const response = await skill.invoke(event, context);
  console.log("response->",response)
  return response;
  //const { data } = await getHelloController(event);
  //return HttpResponse._200(data);
};

const helloMessage = {
  canHandle(handlerInput : HandlerInput) : boolean {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest';        
  },
  handle(handlerInput : HandlerInput) : Response {
    const speechText = 'Hola soy alexa dime algo cool!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('dije algo cool', speechText)
      .getResponse();
  },
}
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
    return handlerInput.responseBuilder
      .speak('Sorry, an error occured')
      .getResponse();
  },
};
