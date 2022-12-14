// import moment from 'moment';
import uuid from 'react-native-uuid';

/**
 * Define and export the dummy data.
 */
export const SendMoneyRecords = [
    {
        id: uuid.v4(),
        img: require('../../assets/images/plus.png'),
    },
    {
        id: uuid.v4(),
        avatar: require('../../assets/images/avatar2.png'),
        name: 'Mike',
    },
    {
        id: uuid.v4(),
        avatar: require('../../assets/images/avatar3.png'),
        name: 'Joshpeh',
    },
    {
        id: uuid.v4(),
        avatar: require('../../assets/images/avatar4.png'),
        name: 'Ashley',
    },
    {
        id: uuid.v4(),
        avatar: require('../../assets/images/avatar4.png'),
        name: 'xxxxx',
    },
];

export const Services = [
    {
        id: uuid.v4(),
        img: require('../../assets/images/send_money.png'),
        name: 'Send Money',
    },
    {
        id: uuid.v4(),
        img: require('../../assets/images/receive_money.png'),
        name: 'Receive Money',
    },
    {
        id: uuid.v4(),
        img: require('../../assets/images/mobile_prepaid.png'),
        name: 'Mobile Prepaid',
    },
    {
        id: uuid.v4(),
        img: require('../../assets/images/electricity_bill.png'),
        name: 'Electricity Bill',
    },

    {
        id: uuid.v4(),
        img: require('../../assets/images/cashback_offer.png'),
        name: 'Cashback Offer',
    },
    {
        id: uuid.v4(),
        img: require('../../assets/images/movie_tickets.png'),
        name: 'Movie Tickets',
    },
    {
        id: uuid.v4(),
        img: require('../../assets/images/flight_tickets.png'),
        name: 'Flight Tickets',
    },
    {
        id: uuid.v4(),
        img: require('../../assets/images/more_options.png'),
        name: 'More Options',
    },
];

const dummyData = { SendMoneyRecords, Services };

export default dummyData;
