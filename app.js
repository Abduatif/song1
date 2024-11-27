import { EventHandler } from "./src/components/EventHandler.js";
import { QuizManager } from "./src/components/QuizManager.js";
import { UIUpdater } from "./src/components/UIUpdater.js";




const input1 = new UIUpdater();
const quizManager = new QuizManager();
const eventHanderler = new EventHandler(quizManager, input1);

eventHanderler.init();
