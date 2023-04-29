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

export const LaunchRequestHandler : RequestHandler = {
  canHandle(handlerInput : HandlerInput) : boolean {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest';        
  },
  handle(handlerInput : HandlerInput) : Response {
    const speechText = 'hola elizabeth, alvaro te ama mucho y dice que res una hermosura de mujer';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('hola elizabeth, alvaro te ama mucho y dice que res una presiosura de mujer!', speechText)
      .getResponse();
  },
};




