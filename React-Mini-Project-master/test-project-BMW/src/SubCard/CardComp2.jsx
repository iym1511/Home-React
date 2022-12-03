import Card from 'react-bootstrap/Card';


function CardComp2(card) {
    const cardInfo = [
        {
            image: "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf0jUi10tLhu1XzWVo7puMLWFmdkAj5DOPitppZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUFNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVeHWh1DMzt4i%25eqVYDafaOojmztYRSJdw67aftxdTgDw1RSfWQlEW%25VxdSeZG4NuzWQdjc9NO3aeZQ6KownXRjcZwBL1Lrx6Kc%252ywQ4WwBKupCVFFe%252B3in2ZIjup2XH51zv63iprJ8VWGwXHi4TPgR9%25rJHFlMgPou4TJIsDoiL3FlTv0YPiyXIslGAT5tCrv0s9Ol%259E4GA0og8ZTNF9OALUPwnkIogOybMxrnvLUgChDWP5GybUEqY6e89ChbNmtstPoEqhk7NigMLNmqn1kHJDyk7m5VnbbYCn178z5GPtE5V1Pa12SfNwVKJZR19mspzweqKhN7DlMA8nFB",
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <> 
            <br />
            <Card>
            <Card.Img variant="top" src={card.image}  />
            <Card.Body >
            <Card.Text >
                <img className='M' src="https://www.bmw.co.kr/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png" alt="" />
                <h3>BMW M3 컴페티션</h3>
                <p>가솔린</p>
                <p>$ 127,600,000 ~</p>
            </Card.Text>
            </Card.Body>
            </Card>
            </>
        );
    };

    return (
        <div>
            {cardInfo.map(renderCard)}
        </div>
    )

}

export default CardComp2;