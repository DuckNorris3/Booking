import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Price from './Price.jsx';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Guests from './Guests.jsx';
import { Calendar } from './Calendar.jsx';
import RequestBooking from './BookButton.jsx';
import Totals from './Totals.jsx';
import styled from 'styled-components';


const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: left;
position: relative;
width: 319px;
font-family: "Calibre", Helvetica, Arial, sans-serif;
z-index: 99;
box-sizing: border-box;
font-weight: 400;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
`;
const Col = styled.div`
  background-color: white;
  padding: 10px;
  border-right: 1px solid #ebebeb;
`;

function App() {
  const[siteData, setSiteData] = useState(null);
  const[checkIn, setCheckIn] = useState(null);
  const[checkOut, setCheckOut] = useState(null);

  function updateCheckInOut(date) {
    debugger;
    setCheckIn(date);
    console.log("DATES", date, checkIn);
  }

  useEffect(() => {
    axios.get(`/1`)
      .then((result) => {
        console.log("received data")
        setSiteData(result.data[0])
      })
      .catch(err => {
        console.log(err);
      })
    }, []);

  if (siteData) {
    return (
      <Container>
        <div className="banner">
          <div className="price-wrapper">
            <Price price= {siteData.price} />
          </div>
        </div>
          <div className="well-content">
            <FlexRow>
              <Col>
                <CheckIn/>
              </Col>
              <Col>
                <CheckOut/>
              </Col>
              <Col>
                <Guests maxGuests= {siteData.maxGuests}/>
              </Col>
            </FlexRow>
          </div>
          <div className="well-content">
            <RequestBooking/>
          </div>
        <div>
          <Calendar handleClick= {(date) => updateCheckInOut(date)}/>
        </div>
        <div>
          <Totals/>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        Loading site...
      </Container>
    )
  }
}


// ReactDOM.render(<App/>, document.getElementById('app'));
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       price: null,
//       maxGuests: null,
//       discount: null,
//       checkin: null,
//       checkout: null,
//       total: null
//     }
//   }


//   componentDidMount() {

//   }


//   render() {
//     console.log(this.state.price)
//     return (
//       <div>
//         <h3>Booking Calendar</h3>
//         <Price price= {this.state.price}/>
//         <CheckIn checkin= {this.state.checkin}/>
//         <CheckOut checkout= {this.state.checkout}/>
//         <Guests maxGuests= {this.state.maxGuests}/>
//         <RequestBooking total= {this.state.total}/>
//         <Calendar/>
//         <Totals discount= {this.state.discount}/>
//       </div>
//     )
//   }

// }

export default App;