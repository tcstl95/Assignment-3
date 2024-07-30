const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
    it ("throws error if name is NOT passed into constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Name required.'));
    }
    );
    it ("constructor sets name", function() {
        let message = new Message('MOVE');
        expect(message.name).toEqual('MOVE');
    }
    );
    it ("contains a commands array passed into the constructor as 2nd argument", function() {
        let commands = [new Command('MOVE', 20)];
        let message = new Message('MOVE', commands);
        expect(message.commands).toEqual(commands);
    }
    );

});
