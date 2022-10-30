import Card from 'react-bootstrap/Card';


function MainCardComp3(card) {
    const cardInfo = [
        {
            image: "https://www.bmw.co.kr/content/dam/bmw/marketKR/bmw_co_kr/models/bmw-i/i4/desk-220408_i4_KV_clean_low.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1649663954390.jpg",
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <> 
            <br/>
            <Card className="bg-dark text-white">
      <Card.Img src={card.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
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

export default MainCardComp3;