var contacts = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Nowak',
      email: 'jan.nowak@example.com',
      img: 'https://thumb9.shutterstock.com/mosaic_250/790708/235836478/stock-photo-portrait-of-spontaneous-smiling-positive-young-bearded-man-over-gray-background-235836478.jpg',
    },
    {
      id: 2,
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam.kowalski@example.com',
      img: 'https://thumb9.shutterstock.com/mosaic_250/790708/235836478/stock-photo-portrait-of-spontaneous-smiling-positive-young-bearded-man-over-gray-background-235836478.jpg',
    },
    {
      id: 3,
      firstName: 'Zbigniew',
      lastName: 'Koziol',
      email: 'zbigniew.koziol@example.com',
      img: 'https://thumb9.shutterstock.com/mosaic_250/790708/235836478/stock-photo-portrait-of-spontaneous-smiling-positive-young-bearded-man-over-gray-background-235836478.jpg',
    }
];

var contactForm = {
firstName: '',
lastName: '',
email: ''
};

var App = React.createClass({
    render: function() {
        return (
            <div className='app'>
                <ContactForm contact={contactForm} />
                <Contacts items={contacts} />
            </div>
        );
    }
});