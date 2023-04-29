import { responseSuccess, responseFail } from '../helpers/responses';

const data = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: 'hola elizabeth, alvaro te ama mucho y dice que res una hermosura de mujer'
      },
      shouldEndSession: true
    }
  };
export const getHelloWord = async(event) =>{
    let response = null;
    try {
        response = responseSuccess(data,200);
    } catch (error) {
        response = responseFail({ 
            data:[]
        },400);
    }
    return response;
}