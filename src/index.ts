import { MessageBuilder } from "./MessageBuilder";

class Helper {
    getMessageComponent(): HTMLDivElement {
        var name:string = "John Smith";
        var messageBuilder = new MessageBuilder(name); 
        
        var helloMessage:string = messageBuilder.getHelloMessage();
        var welcomeMessage:string = messageBuilder.getWelcomeMessage();
        
        const element = document.createElement(`div`);
        element.innerHTML = helloMessage + `</br>` + welcomeMessage;
        return element;
    }
}

document.body.appendChild(new Helper().getMessageComponent());