const notes = require('./notes');
const chalk = require('chalk');



describe('notes-test', ()=>{
    beforeEach(() => {
      notes.saveNotes([{"title":"t","body":"b"}]);
       });
    describe('addNote', () => {
        it('Should add a new note', ()=>{
            // arange
            const ifNotExist = chalk.green.inverse('New note added!')
            const ifExist = chalk.red.inverse('Note title taken!')

            // act
       const result1= notes.addNote('Title', 'Body');
       const result2= notes.addNote('t', 'b');
     
            // Assert
       expect(result1).toEqual(ifNotExist);
       expect(result2).toEqual(ifExist);
        })
    })
    describe('removeNote', () => {
        it('Should remove a spec note', ()=>{
            // arange
            const ifExist = chalk.green.inverse('Note removed!')
            const ifNot = chalk.red.inverse('No note found!')

            // act
       const result1= notes.removeNote('t');
       const result2= notes.removeNote('saaa');
     
            // Assert
       expect(result1).toEqual(ifExist);
       expect(result2).toEqual(ifNot);
        })
    })

    describe('listNote', () => {
        it('Should list notes', ()=>{
            // arange

           

            // act
       const result1= notes.listNotes();
      
     
            // Assert
       expect(result1).toEqual(["t"]);
    
  
        })
    })
    describe('readNote', () => {
        it('Should read spec note', ()=>{
            // arange
            const readNote = `Title: ${chalk.inverse("t") } Body: b`
            const notFound = chalk.red.inverse('Note not found!')
            

            // act
       const result1= notes.readNote('t');
       const result2= notes.readNote('saaa');
     
            // Assert
       expect(result1).toEqual(readNote);
       expect(result2).toEqual(notFound);
  
        })
    })
    
})





// describe('tic-tac-toe', () => {
//     describe('markCell', () => {
//         it('should set the given cell to the given sign', () => {
//             notesTest.newGame();

//             notesTest.markCell(0, 1, 'X');

//             const result = notesTest.getBoard();

//             const expected = [
//                 [null, 'X', null],
//                 [null, null, null],
//                 [null, null, null],
//             ];

//             expect(result).toEqual(expected);
//         });

//         it('should throw error when cell is already marked', () => {
//             notesTest.newGame();

//             notesTest.markCell(1, 0, 'X');

//             expect(() => {
//                 notesTest.markCell(1, 0, 'O');
//             }).toThrow('cell is already taken!');
//         });
//     });
// });
