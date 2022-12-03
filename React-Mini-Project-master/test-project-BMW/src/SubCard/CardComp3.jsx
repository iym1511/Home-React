import Card from 'react-bootstrap/Card';


function CardComp3(card) {
    const cardInfo = [
        {
            image: "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvKDP10tLhu1XzWVo7puMLWFmdkAj5DOPEt6kZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giUnNF1VgxNJ0%25ls2oub5imC2yRCzXeTt%25ViPRKVZVYVyOWhXNmKWnPoQ0C0w6bHa4l4qb9%25ncXczMifOxQTQ%25w1I8a3XAtEBUnd137seGOzQICrMpIhz5lZh6BownXRoYeHDVQ5HmMXeJag%25yhQC5nvfToatpO213HnZIIjEd%25OE3BDszfIcQeqrk1BxvMLZAEeRvhJRFsM5hou5Krwn1HSgWZt4W%25VvPR7c5fN2b5CxN10j9gl%25TE4DivXfiscqw2Q1IrxLtj2AGZ8J7Dj67RUuCqDYE5GSlLqmWgpVXJLbzv6NQuJLn2Y0aSuAPjm4nVScFDyemQpSVqIbJK7eRUQgyh8H5lkEXZ",
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
            <Card.Body>
            <Card.Text>
                <h3>BMW i4</h3>
                <p style={{color:'#3b35bc'}}>순수전기</p>
                <p>$ 66,400,000 ~</p>
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

export default CardComp3;