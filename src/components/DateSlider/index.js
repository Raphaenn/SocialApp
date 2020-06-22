import React, { useEffect , useState } from 'react';

import { CalendarContainer, DateSlider, DateButtom, TextName, TextDay, Daymark } from './styles';

export default function DatePicket({datafilter}) {

    const [ dateList, setDateList ] = useState([]);
    const today = new Date();
    const [ active, setActive ] = useState(false);
    const [ dia, setDia ] = useState('');

    useEffect(() => {
        //Está função tem o objetivo de, através do while, gerar um objeto com os dias do mês atual do ano vigente.
        // Assim, podemos criar uma fletlist com a variavel datelist, que armazena esse objeto.
      function DatesArray() {
          const year = new Date().getFullYear();
          const month = new Date().getMonth();
          const monthIndex = month
          const names = Object.freeze([ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]);
          const date = new Date(year, monthIndex, 1);
          const result = new Array();
  
          while (date.getMonth() == monthIndex) {
            result.push({
              id: `${date.getDate()}-${names[date.getDay()]}-${date.getFullYear()}`,
              name: `${names[date.getDay()]}`,
              day: `${date.getDate()}`,
              // month: date.getMonth(),
              year: date.getFullYear()
            });
            date.setDate(date.getDate() + 1);
          }
          setDateList(result.map(item => item))
          return result
        }
        DatesArray()
    }, []);

    function handleSelect(item) {
      datafilter(item.day)
    }

    function handleActive(item) {
      setActive(!active)
      setDia(item)
    }

    return (
            <CalendarContainer>
              <DateSlider 
              horizontal={true}
              // initialScrollIndex={today}
              data={dateList}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <DateButtom onPress={() => handleSelect(item) + handleActive(item.day)} 
                  press={dia == item.day ? true : null}>
                    <TextName>{item.name}</TextName>
                    <Daymark activeNow={ item.day == today.getDate() ? true : null } >
                    <TextDay>{item.day}</TextDay>
                    </Daymark>
                  </DateButtom>
                )
              }}
              />
            </CalendarContainer>
    )
};