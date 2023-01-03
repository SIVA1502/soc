class Message
{
    getContent(text){
        return console.log('the message is: ',text);
    }
}

const myMsg=new Message();
text='Good Morning!!'
myMsg.getContent(text)