const chalk = require ('chalk')
const { demandOption } = require('yargs')
const yargs = require ('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//remove a command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.removeNote(argv.title, argv.body)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe:'Listing a note',
    handler () {
        notes.listNotes()
    }    
})

//creating read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder :{
        title :{
            describe : 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler (argv) {
      notes.readNote(argv.title)
    }
})

    yargs.parse();








