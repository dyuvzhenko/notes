import expect from 'expect';

import { validNote } from '../src/utils/note/validData';
import { isNoteValid } from '../src/utils/note/isNoteValid';

const copy = (obj) => JSON.parse(JSON.stringify(obj));

describe('function isNoteValid (init check)', () => {

  it('should return true, note is valid', () => {
    expect(isNoteValid(validNote)).toEqual(true);
  });

  it('should return false, note is not valid', () => {
    expect(isNoteValid({})).toEqual(false);
  });
});

describe('first properties', () => {

  it('should return false (object key length does not match)', () => {
    let note = copy(validNote);
    const keys = Object.keys(validNote);
    delete note[keys[0]];
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (object key is not valid)', () => {
    let note = copy(validNote);
    note['odd_property'] = '';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "_initDate" is not valid type)', () => {
    let note = copy(validNote);
    note['_initDate'] = 'not a number';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "_lastUpdate" is not valid type)', () => {
    let note = copy(validNote);
    note['_lastUpdate'] = 'not a number';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "data" is not valid type)', () => {
    let note = copy(validNote);
    note['data'] = 'not a object';
    expect(isNoteValid(note)).toEqual(false);
  });
});

describe('data property', () => {

  it('should return false (object key length does not match)', () => {
    let note = copy(validNote);
    const keys = Object.keys(validNote.data);
    delete note.data[keys[0]];
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (object key is not valid)', () => {
    let note = copy(validNote);
    note.data['odd_property'] = '';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "title" is not valid type)', () => {
    let note = copy(validNote);
    note.data['title'] = ['not', 'a', 'string'];
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "settings" is not valid type)', () => {
    let note = copy(validNote);
    note.data['settings'] = 'not a object';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "columns" is not valid type)', () => {
    let note = copy(validNote);
    note.data['columns'] = 'not a array';
    expect(isNoteValid(note)).toEqual(false);
  });
});

describe('data.settings properties', () => {

  it('should return false (object key length does not match)', () => {
    let note = copy(validNote);
    const keys = Object.keys(validNote.data.settings);
    delete note.data.settings[keys[0]];
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (object key is not valid)', () => {
    let note = copy(validNote);
    note.data.settings['odd_property'] = '';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "colorObj" is not valid type)', () => {
    let note = copy(validNote);
    note.data.settings['colorObj'] = 'not a object';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (object key is not valid)', () => {
    let note = copy(validNote);
    note.data.settings['colorObj']['odd_property'] = '';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "columns" is not valid type)', () => {
    let note = copy(validNote);
    note.data.settings['labelsDescription'] = 'not a array';
    expect(isNoteValid(note)).toEqual(false);
  });
});


describe('data.columns properties', () => {

  const _validNote = {
    ...validNote,
    data: {
      ...validNote.data,
      columns: [{
        title: 'title',
        cards: [{
          title: 'card title',
          description: 'card desc',
          labels: []
        }]
      }]
    }
  };

  it('should return false (object key length does not match)', () => {
    let note = copy(_validNote);
    const keys = Object.keys(_validNote.data.columns[0]);
    delete note.data.columns[0][keys[0]];
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (object key is not valid)', () => {
    let note = copy(_validNote);
    note.data.columns[0]['odd_property'] = '';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "title" is not valid type)', () => {
    let note = copy(_validNote);
    note.data.columns[0]['title'] = ['not a string'];
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "cards" is not valid type)', () => {
    let note = copy(_validNote);
    note.data.columns[0]['cards'] = 'not a array';
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "title" is not valid type)', () => {
    let note = copy(_validNote);
    note.data.columns[0].cards[0]['title'] = ['not a string'];
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "description" is not valid type)', () => {
    let note = copy(_validNote);
    note.data.columns[0].cards[0]['description'] = ['not a string'];
    expect(isNoteValid(note)).toEqual(false);
  });

  it('should return false (property "labels" is not valid type)', () => {
    let note = copy(_validNote);
    note.data.columns[0].cards[0]['labels'] = 'not a array';
    expect(isNoteValid(note)).toEqual(false);
  });
});
