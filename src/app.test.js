const { dayOfTheWeek } = require('./app');
const { monthOfYear } = require('./app');

test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});

test('getDay returns the month of the year', () => {
    const month = monthOfYear( new Date('11/3/2020') );    
    expect( month ).toBe('November');
});