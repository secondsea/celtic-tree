/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const ImagePath = "https://s3.us-east-2.amazonaws.com/marypic/ogham/";

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact.phonetic + randomFact.meaning;
    const textOutput = randomFact.ogham + randomFact.meaning;
          const image = ImagePath + randomFact.image;

    return handlerInput.responseBuilder
      .speak(speechOutput)
         //     .withSimpleCard(SKILL_NAME, randomFact)
         .withStandardCard(SKILL_NAME, speechOutput, image, image)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak(FALLBACK_MESSAGE)
   //  .speak(FALLBACK_REPROMPT)
     .getResponse();
  },
};

const SKILL_NAME = 'Celtic Oracle';
const GET_FACT_MESSAGE = 'Here is today\'s Celtic Oracle message: ';
const HELP_MESSAGE = 'You can say open celtic oracle, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const FALLBACK_MESSAGE = 'The Druids are busy now.  Try saying celtic oracle.';
const FALLBACK_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
{"ogham":"Beith, ","phonetic":"Beth,","meaning":"Birch.  New Beginings.  Use this as a tool for spiritual and emotional regrowth, and developing your own ability to regenerate where there has been emptiness or devastation.","image":"Birch.jpg"},
{"ogham":"Luis, ","phonetic":"Lweesh, ","meaning":"Rowan.  Protection. Keep yourself true to your spirituality, staying grounded even in times of doubt. This will help protect you from that which might bring you emotional, physical or spiritual harm","image":"Rowan.jpg"},
{"ogham":"Fearn, ","phonetic":"Fair-n," , "meaning":"Alder.   Follow your instinct. Others will turn to you for advice and counsel during spiritual disagreements, and it is your job to be the mediator and voice of reason.","image":"Alder.jpg"},
{"ogham":"Saille, ","phonetic":"Shailuh, ","meaning":"Willow.  Give yourself a break periodically, and take time to rest spiritually. Know that change will come when you are ready for it.","image":"Willow.jpg"},
{"ogham":"Nuin, ","phonetic":"Nee-uhn, ","meaning":"Ash.  Remember that for every action, there is a consequence, and these effect not only ourselves but others as well. What we do in our life will carry into the future and possibly even beyond.","image":"Ash.jpg"},
{"ogham":"Huathe, ","phonetic":"Oo-uh,  ","meaning":"Hawthorn","meaning":  "Difficult times ahead.  Understand that no matter how thorny a problem may be, you can use your spiritual strength to protect and guide you.","image":"Hawthorn,jpg"},
{"ogham":"Duir, ","phonetic":"Doo-r, ","meaning":"Oak.  Strength, Ppower and Protection; the great Oak is telling you that Your objectives will be achieved if you show a resistant exterior to aggressive forces.","image":"Oak.jpg"},
{"ogham":"Tinne, ","phonetic":"Chin-yuh", "meaning":"Holly.  Develop the ability to respond quickly and wisely to your intuition. Learn to overcome and adapt to new situations, and to respond immediately to changes in your spiritual environment.","image":"Holly.jpg"},
{"ogham":"Coll, ", "phonetic":"Cull, ","meaning":"Hazel.  Take advantage of your own artistry or creativity, and share your knowledge with others so they too can practice these arts. Lead by example.","image":"Hazel.jpg"},
{"ogham":"Muin, ","phonetic":"Muhn, ","meaning":"Vine.  Do rituals related to prophecy and divination. Be sure to record all messages that you receive–they may not make sense right now, but they will later on.","image":"Vine.jpg"},
{"ogham":"Gort, ","phonetic":"Gort", "meaning":"Ivy.   Banish the negative things from your life, and eliminate toxic relationships. Place a barricade of some sort between you and the things or people that would bring you down.","image":"Ivy.jpg"},
{"ogham":"NgETAL, ","phonetic":"Nyeh-dl, ","meaning":"Reed.  An action undertaken will bear fruit if you are careful to not allow yourself to be drawn in another direction.","image":"Reed.jpg"} ,
{"ogham":"Ruis, ","phonetic":"Rweesh, ","meaning":"Elder.  This is a time of transition; while one phase of life ends, another begins. With maturity and experience comes wisdom and knowledge.","image":"Elder.jpg"},
{"ogham":"Quert, ","phonetic":"Kwairt, ","meaning":"Apple.  You must make a difficult choice.   Open your inner soul to new decisions, and allow yourself to harvest the gifts that your spiritual path has to offer.","image":"Apple.jpg"},
{"ogham":"Straif, ","phonetic":"Strahf, ","meaning":"Blackthorn.  Destiny is the sole influencing factor so leave the decision and outcome to destiny, trust it, you will succeed in the end.","image":"Blackthorn.jpg"},
{"ogham":"Ailim, ","phonetic":"Ahl-m, ","meaning":"Silver Fir.  Do not succumb to choices that are easy but short-sighted,in other words do not try to find a short cut.","image":"SilverFir.jpg"},
{"ogham":"Ohn, ","phonetic":"Uhn, ","meaning":"Furze or Gorse.  Think of the long term in your plans.  Sometimes we need to go without to gain something greater.","image":"Furze.jpg"},	
{"ogham":"Ur, ","phonetic":"Oo-r, ","meaning":"Heather.  Good luck and fortune.  Perhaps a new love in your life.","image":"Heather.jpg"},
{"ogham":"Eadha, ","phonetic":"Eh-yah, ","meaning":"Poplar.  This is a time for healing.  Do not waste your strength now.","image":"Poplar.jpg"},
{"ogham":"Ioho, ","phonetic":"Ee-yoh,  ","meaning":"Yew. Do not waste time obsessed with the past.  Endings are for begininngs.","image":"Yew.jpg"},
{"ogham":"Oir, ","phonetic":"Or,  ","meaning":"Spindle.  Finish your obligations and tasks.  When you honor your obligations you gain happiness.","image":"Spindle.jpg"},
{"ogham":"Uilleand, ","phonetic":"Ill-inn, ","meaning":"Honeysuckle.  Pursue your desires, allow yourself to experience pleasure  By joy do we learn.  Remain true to your beliefs and principles.","image":"Honeysuckle.jpg"},
{"ogham":"Phagos, ","phonetic":"Fagus, ","meaning":"Beech.  Relax and let go of fixed ideas which hinder you and your development.  Meditate and ask wisdom from your ancestors.","image":"Beech.jpg"},
{"ogham":"Koad, ","phonetic":"Koad, ","meaning":"Grove. Knowledge and awareness are the sources of peace and strength.","image":"Grove.jpg"},
{"ogham":"Mór", "phonetic":"Mo-ur, ","meaning:":"The Sea.  Try to see what is unseen in your life.  Much is happening in the depths of your soul","image":"Sea.jpg"},

];

const skillBuilder = Alexa.SkillBuilders.custom();


exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
