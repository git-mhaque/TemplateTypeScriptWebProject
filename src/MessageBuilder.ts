class MessageBuilder {
    name: string;

    constructor(name: string) {
        this.name = name; 
    }

    getHelloMessage (): string {
        return `Hello ${this.name}!`;
    }

    getWelcomeMessage (): string {
        return `Welcome ${this.name}!`;
    }
}

export { MessageBuilder }